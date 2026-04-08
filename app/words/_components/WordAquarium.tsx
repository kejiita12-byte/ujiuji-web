"use client";

import type { AquariumVisibleItem } from "@/lib/words/types";
import { WordCapsule } from "./WordCapsule";

type WordAquariumProps = {
  items: AquariumVisibleItem[];
  onShuffle: () => void | Promise<void>;
  isLoading?: boolean;
};

export function WordAquarium({
  items,
  onShuffle,
  isLoading = false
}: WordAquariumProps) {
  return (
    <section className="stack-md section-copy text-shell">
      <div className="word-aquarium" aria-label="言葉の水槽">
        <div className="word-aquarium-surface" aria-hidden="true" />

        {items.map((item) => (
          <WordCapsule
            key={item.fragment.id}
            fragment={item.fragment}
            layout={item.layout}
          />
        ))}

        {isLoading ? (
          <p className="word-aquarium-loading" aria-live="polite">
            ことばをあつめています
          </p>
        ) : null}
      </div>
    </section>
  );
}