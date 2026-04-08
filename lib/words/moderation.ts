export type WordModerationDecision =
  | {
      ok: true;
      moderationState: "clean";
      moderationReason: null;
    }
  | {
      ok: false;
      moderationState: "blocked";
      moderationReason: string;
    };

const BLOCKED_EXACT_WORDS = [
  "死ね",
  "殺す",
  "殺したい",
  "ころす",
  "しね"
] as const;

const BLOCKED_PARTIAL_PATTERNS = [
  /死ね/u,
  /殺す/u,
  /殺したい/u,
  /ころす/u,
  /spam/i,
  /宣伝/u,
  /副業/u,
  /稼げる/u,
  /フォローして/u,
  /dmして/i,
  /line追加/i,
  /discord/i,
  /bitcoin/i,
  /casino/i
];

export function moderateWordText(text: string): WordModerationDecision {
  const normalized = text.trim().toLowerCase();

  if (BLOCKED_EXACT_WORDS.includes(normalized as (typeof BLOCKED_EXACT_WORDS)[number])) {
    return {
      ok: false,
      moderationState: "blocked",
      moderationReason: "blocked_word_exact"
    };
  }

  for (const pattern of BLOCKED_PARTIAL_PATTERNS) {
    if (pattern.test(text)) {
      return {
        ok: false,
        moderationState: "blocked",
        moderationReason: "blocked_word_partial"
      };
    }
  }

  return {
    ok: true,
    moderationState: "clean",
    moderationReason: null
  };
}