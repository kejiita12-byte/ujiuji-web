const MAX_WORD_FRAGMENT_LENGTH = 10;

const URL_PATTERN = /(https?:\/\/|www\.|\.com|\.jp|\.net|\.org)/i;
const ONLY_SYMBOLS_PATTERN = /^[\p{P}\p{S}ー〜・…\s]+$/u;

export type WordValidationErrorCode =
  | "INVALID_TEXT_EMPTY"
  | "INVALID_TEXT_TOO_LONG"
  | "INVALID_TEXT_URL"
  | "INVALID_TEXT_SYMBOLS_ONLY";

export class WordValidationError extends Error {
  code: WordValidationErrorCode;

  constructor(code: WordValidationErrorCode, message: string) {
    super(message);
    this.name = "WordValidationError";
    this.code = code;
  }
}

export function normalizeWordInput(value: string) {
  return value.replace(/[\r\n]+/g, "").replace(/\s+/g, " ").trim();
}

export function containsUrl(value: string) {
  return URL_PATTERN.test(value);
}

export function isOnlySymbols(value: string) {
  return ONLY_SYMBOLS_PATTERN.test(value);
}

export function validateWordText(rawValue: string) {
  const text = normalizeWordInput(rawValue);

  if (!text) {
    throw new WordValidationError(
      "INVALID_TEXT_EMPTY",
      "ひとことだけでも大丈夫です。"
    );
  }

  if ([...text].length > MAX_WORD_FRAGMENT_LENGTH) {
    throw new WordValidationError(
      "INVALID_TEXT_TOO_LONG",
      `${MAX_WORD_FRAGMENT_LENGTH}文字までで置けます。`
    );
  }

  if (containsUrl(text)) {
    throw new WordValidationError(
      "INVALID_TEXT_URL",
      "URLは置けません。"
    );
  }

  if (isOnlySymbols(text)) {
    throw new WordValidationError(
      "INVALID_TEXT_SYMBOLS_ONLY",
      "言葉を少しだけ置いてみてください。"
    );
  }

  return {
    text,
    normalizedText: text
  };
}

export { MAX_WORD_FRAGMENT_LENGTH };