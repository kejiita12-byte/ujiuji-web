import { getRedis } from "@/lib/redis/client";

export class WordRateLimitError extends Error {
  code: "RATE_LIMITED";
  retryAfterSeconds?: number;

  constructor(message = "少し時間をおいてから置いてみてください。", retryAfterSeconds?: number) {
    super(message);
    this.name = "WordRateLimitError";
    this.code = "RATE_LIMITED";
    this.retryAfterSeconds = retryAfterSeconds;
  }
}

type RateLimitWindow = {
  key: string;
  limit: number;
  windowSeconds: number;
};

async function incrementWindow({
  key,
  limit,
  windowSeconds
}: RateLimitWindow) {
  const redis = getRedis();

  const count = await redis.incr(key);

  if (count === 1) {
    await redis.expire(key, windowSeconds);
  }

  const ttl = await redis.ttl(key);

  return {
    allowed: count <= limit,
    count,
    limit,
    ttl: ttl > 0 ? ttl : windowSeconds
  };
}

export async function assertWordsSubmitRateLimit(params: {
  sessionHash: string;
  ipHash: string;
}) {
  const checks = await Promise.all([
    incrementWindow({
      key: `words:submit:session:${params.sessionHash}:1m`,
      limit: 3,
      windowSeconds: 60
    }),
    incrementWindow({
      key: `words:submit:session:${params.sessionHash}:1h`,
      limit: 20,
      windowSeconds: 60 * 60
    }),
    incrementWindow({
      key: `words:submit:ip:${params.ipHash}:1m`,
      limit: 10,
      windowSeconds: 60
    }),
    incrementWindow({
      key: `words:submit:ip:${params.ipHash}:1h`,
      limit: 100,
      windowSeconds: 60 * 60
    })
  ]);

  const blocked = checks.find((result) => !result.allowed);

  if (blocked) {
    throw new WordRateLimitError(
      "少し時間をおいてから置いてみてください。",
      blocked.ttl
    );
  }
}

export async function assertWordsPoolRateLimit(params: {
  sessionHash: string;
  ipHash: string;
}) {
  const checks = await Promise.all([
    incrementWindow({
      key: `words:pool:session:${params.sessionHash}:1m`,
      limit: 60,
      windowSeconds: 60
    }),
    incrementWindow({
      key: `words:pool:ip:${params.ipHash}:1m`,
      limit: 180,
      windowSeconds: 60
    })
  ]);

  const blocked = checks.find((result) => !result.allowed);

  if (blocked) {
    throw new WordRateLimitError(
      "少し時間をおいてから読み込んでください。",
      blocked.ttl
    );
  }
}