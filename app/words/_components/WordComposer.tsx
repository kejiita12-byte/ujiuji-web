"use client";

import { useMemo, useState } from "react";
import {
  MAX_WORD_FRAGMENT_LENGTH,
  WORD_COMPOSER_PLACEHOLDER
} from "@/lib/words/constants";

type WordComposerProps = {
  onSubmit: (text: string) => Promise<void> | void;
};

function normalizeInput(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function isOnlySymbols(value: string) {
  return /^[\p{P}\p{S}ー〜・…\s]+$/u.test(value);
}

function containsUrl(value: string) {
  return /(https?:\/\/|www\.|\.com|\.jp|\.net|\.org)/i.test(value);
}

export function WordComposer({ onSubmit }: WordComposerProps) {
  const [draft, setDraft] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentLength = [...draft].length;

  const canSubmit = useMemo(() => {
    const trimmed = normalizeInput(draft);
    return (
      trimmed.length > 0 &&
      [...trimmed].length <= MAX_WORD_FRAGMENT_LENGTH &&
      !isSubmitting
    );
  }, [draft, isSubmitting]);

  const handleDraftChange = (value: string) => {
    const singleLine = value.replace(/[\r\n]+/g, "");
    const sliced = [...singleLine].slice(0, MAX_WORD_FRAGMENT_LENGTH).join("");

    setDraft(sliced);

    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = async () => {
    const trimmed = normalizeInput(draft);

    if (!trimmed) {
      setErrorMessage("ひとことだけでも大丈夫です。");
      return;
    }

    if ([...trimmed].length > MAX_WORD_FRAGMENT_LENGTH) {
      setErrorMessage(`${MAX_WORD_FRAGMENT_LENGTH}文字までで置けます。`);
      return;
    }

    if (containsUrl(trimmed)) {
      setErrorMessage("URLは置けません。");
      return;
    }

    if (isOnlySymbols(trimmed)) {
      setErrorMessage("言葉を少しだけ置いてみてください。");
      return;
    }

    try {
      setIsSubmitting(true);
      await onSubmit(trimmed);
      setDraft("");
      setErrorMessage(null);
    } catch {
      setErrorMessage("うまく置けませんでした。少ししてから試してください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="stack-md section-copy text-shell">
      <div className="words-compose">

        <div className="words-input-row">
          <input
            id="word-fragment-input"
            type="text"
            inputMode="text"
            value={draft}
            onChange={(event) => handleDraftChange(event.target.value)}
            placeholder={WORD_COMPOSER_PLACEHOLDER}
            maxLength={MAX_WORD_FRAGMENT_LENGTH}
            className="words-input"
            aria-describedby="word-fragment-help word-fragment-count"
            disabled={isSubmitting}
          />

          <button
            type="button"
            className="words-submit"
            onClick={handleSubmit}
            disabled={!canSubmit}
          >
            {isSubmitting ? "置いています" : "ここに置く"}
          </button>
        </div>

        <div className="words-compose-meta">
          <p id="word-fragment-count" className="words-count" aria-live="polite">
            {currentLength} / {MAX_WORD_FRAGMENT_LENGTH}
          </p>
        </div>

        {errorMessage ? (
          <p className="words-error" role="status">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </section>
  );
}