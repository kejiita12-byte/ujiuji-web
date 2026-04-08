// import { Redis } from "@upstash/redis";

// let redis: Redis | null = null;

// export function getRedis() {
//   if (redis) {
//     return redis;
//   }

//   const url = process.env.UPSTASH_REDIS_REST_URL;
//   const token = process.env.UPSTASH_REDIS_REST_TOKEN;

//   if (!url || !token) {
//     throw new Error(
//       "Upstash Redis is not configured. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN."
//     );
//   }

//   redis = new Redis({
//     url,
//     token
//   });

//   return redis;
// }

import { Redis } from "@upstash/redis";

let redis: Redis | null = null;

export function getRedis() {
  if (redis) {
    return redis;
  }

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  console.log("REDIS URL exists:", !!url);
  console.log("REDIS TOKEN exists:", !!token);

  if (!url || !token) {
    throw new Error(
      "Upstash Redis is not configured. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN."
    );
  }

  redis = new Redis({ url, token });

  return redis;
}