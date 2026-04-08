import { NextResponse } from "next/server";
import { createWordFragment } from "@/lib/words/query";
import { getWordsRequestContext } from "@/lib/words/session";
import { assertWordsSubmitRateLimit, WordRateLimitError } from "@/lib/words/rate-limit";
import { moderateWordText } from "@/lib/words/moderation";
import { toWordFragmentDto } from "@/lib/words/dto";
import { validateWordText, WordValidationError } from "@/lib/words/validation";

type CreateWordRequestBody = {
  text?: unknown;
  locale?: unknown;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CreateWordRequestBody;

    if (typeof body.text !== "string") {
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: "INVALID_REQUEST",
            message: "入力を確認してください。"
          }
        },
        { status: 400 }
      );
    }

    const { sessionHash, ipHash } = await getWordsRequestContext();

    await assertWordsSubmitRateLimit({
      sessionHash,
      ipHash
    });

    const { text, normalizedText } = validateWordText(body.text);

    const moderation = moderateWordText(text);

    if (!moderation.ok) {
      const blockedFragment = await createWordFragment({
        text,
        normalizedText,
        source: "user",
        locale: typeof body.locale === "string" ? body.locale : null,
        moderationState: moderation.moderationState,
        moderationReason: moderation.moderationReason,
        sessionHash,
        ipHash
      });

      return NextResponse.json(
        {
          ok: false,
          error: {
            code: "BLOCKED_CONTENT",
            message: "この言葉はここには置けません。"
          },
          item: toWordFragmentDto(blockedFragment)
        },
        { status: 400 }
      );
    }

    const fragment = await createWordFragment({
      text,
      normalizedText,
      source: "user",
      locale: typeof body.locale === "string" ? body.locale : null,
      moderationState: moderation.moderationState,
      moderationReason: moderation.moderationReason,
      sessionHash,
      ipHash
    });

    return NextResponse.json(
      {
        ok: true,
        item: toWordFragmentDto(fragment)
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof WordValidationError) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: error.code,
            message: error.message
          }
        },
        { status: 400 }
      );
    }

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

    console.error("POST /api/words failed:", error);

    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "SERVER_ERROR",
          message: "うまく置けませんでした。少ししてから試してください。"
        }
      },
      { status: 500 }
    );
  }
}