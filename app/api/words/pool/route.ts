import { NextResponse } from "next/server";
import { toWordFragmentDto } from "@/lib/words/dto";
import { getVisibleWordPool } from "@/lib/words/query";
import { assertWordsPoolRateLimit, WordRateLimitError } from "@/lib/words/rate-limit";
import { getWordsRequestContext } from "@/lib/words/session";

function parseLimit(value: string | null) {
  if (!value) {
    return 60;
  }

  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return 60;
  }

  return Math.min(Math.max(Math.floor(parsed), 1), 100);
}

export async function GET(request: Request) {
  try {
    const { sessionHash, ipHash } = await getWordsRequestContext();

    await assertWordsPoolRateLimit({
      sessionHash,
      ipHash
    });

    const { searchParams } = new URL(request.url);
    const limit = parseLimit(searchParams.get("limit"));

    const fragments = await getVisibleWordPool({
      limit,
      seedRatio: 0.6
    });

    return NextResponse.json(
      {
        ok: true,
        items: fragments.map(toWordFragmentDto)
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof WordRateLimitError) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: error.code,
            message: error.message,
            retryAfterSeconds: error.retryAfterSeconds ?? null
          }
        },
        {
          status: 429,
          headers:
            error.retryAfterSeconds != null
              ? {
                  "Retry-After": String(error.retryAfterSeconds)
                }
              : undefined
        }
      );
    }

    console.error("GET /api/words/pool failed:", error);

    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "SERVER_ERROR",
          message: "うまく読み込めませんでした。少ししてから試してください。"
        }
      },
      { status: 500 }
    );
  }
}