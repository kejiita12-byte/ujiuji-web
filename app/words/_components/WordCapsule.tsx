"use client";

import type { CapsuleLayout, WordFragment } from "@/lib/words/types";

type WordCapsuleProps = {
  fragment: WordFragment;
  layout: CapsuleLayout;
};

export function WordCapsule({ fragment, layout }: WordCapsuleProps) {
  const className = [
    "word-capsule",
    fragment.isOptimistic ? "is-optimistic" : "",
    fragment.isNewArrival ? "is-new-arrival" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={className}
      style={{
        left: `${layout.xPx}px`,
        top: `${layout.yPx}px`,
        width: `${layout.widthPx}px`,
        minHeight: `${layout.heightPx}px`,
        transform: `rotate(${layout.rotate}deg) scale(${layout.scale})`,
        opacity: layout.opacity,
        zIndex: layout.zIndex
      }}
      title={fragment.text}
    >
      <span className="word-capsule-highlight" aria-hidden="true" />
      <span className="word-capsule-text">{fragment.text}</span>
    </span>
  );
}