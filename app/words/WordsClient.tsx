"use client";

import { PageIntro } from "@/components/PageIntro";
import { QuietCTA } from "@/components/QuietCTA";
import { useWordAquarium } from "@/hooks/useWordAquarium";
import { WordAquarium } from "./_components/WordAquarium";
import { WordComposer } from "./_components/WordComposer";

export function WordsClient() {
  const { visibleItems, shuffle, insertFragment, isLoading } = useWordAquarium();

  return (
    <div className="stack-lg page-pad">
      <PageIntro
        eyebrow="気持ちを言葉にする"
        title="気持ちを、少しだけ言葉にする"
        lead={
          <>
            <p>
              ここは、まだまとまっていない気持ちを、
              ひとことだけ置いてみるためのページです。
            </p>
          </>
        }
      />

      <WordComposer onSubmit={insertFragment} />

      <WordAquarium
        items={visibleItems}
        onShuffle={shuffle}
        isLoading={isLoading}
      />
    </div>
  );
}