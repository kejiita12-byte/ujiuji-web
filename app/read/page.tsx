import type { Metadata } from "next";
import { EntryList } from "@/components/EntryList";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "うまく言えない気持ちの読みもの",
  description:
    "ただ気持ちを吐き出したい、匿名で置きたい、うまく言えないけどしんどい。今の気持ちに近い受け止めページから静かに読めます。"
};

export default function ReadIndexPage() {
  return (
    <div className="stack-2xl page-pad">
      <PageIntro
        eyebrow="読みもの"
        title="読みもの"
        lead={
          <>
            <p>今の気持ちに近いものから、静かに読めます。</p>
            <p>最後まで読まなくても大丈夫です。</p>
          </>
        }
      />

      <section className="text-shell read-list-wrap">
        <EntryList />
      </section>
    </div>
  );
}