import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { QuietCTA } from "@/components/QuietCTA";

export const metadata: Metadata = {
  title: "UjiUjiについて",
  description:
    "UjiUjiは、返事のいらない感情の避難所です。どんな場所で、どんな日に向いているのかを静かに伝えるページです。"
};

export default function UjiujiPage() {
  return (
    <div className="stack-2xl page-pad">
      <PageIntro
        eyebrow="UjiUjiについて"
        title="UjiUjiは、返事のいらない感情の避難所です"
        lead={
          <>
            <p>
              誰にも言えない気持ちを、きれいに整理しないまま置いていける場所として作っています。
            </p>
            <p>
              相談の形にしなくてもいい。うまく書けなくてもいい。返事を待たなくてもいい。そういう場です。
            </p>
          </>
        }
      />

      <section className="stack-lg text-shell section-copy">
        <div className="fragment-list" aria-hidden="true">
          <span>返事を待たなくていい</span>
          <span>整理されていなくていい</span>
          <span>うまく書けなくていい</span>
          <span>少しだけ置いて離れていい</span>
          <span>だれにも説明しなくていい</span>
        </div>
      </section>

      <section className="stack-md text-shell section-copy">
        <h2>こういう場所です</h2>
        <div className="body-text stack-md">
          <p>
            気持ちがあるのに、言葉にしようとすると急に遠くなる日があります。
            説明しようとすると違う気がしたり、誰かに返されることを想像するだけで少し疲れたりすることもあります。
          </p>
          <p>
            UjiUjiは、そういうときに、まだまとまっていない気持ちのまま置いていける場所です。
            誰かに分かりやすく伝えることより、まず自分の中にある重さを少し外へ出すことを大事にしています。
          </p>
        </div>
      </section>

      <section className="stack-md text-shell section-copy">
        <h2>返事がいらないのには理由があります</h2>
        <div className="body-text stack-md">
          <p>
            しんどいときほど、人からの反応が重く感じる日があります。
            やさしい言葉でも返さなきゃと思ってしまったり、期待に応えられないことが負担になったりします。
          </p>
          <p>
            だからUjiUjiでは、強い会話ややりとりを前提にしていません。
            触れてくれたことだけが、静かに伝わるくらいの距離感を大切にしています。
          </p>
        </div>
      </section>

      <section className="stack-md text-shell section-copy">
        <h2>向いているかもしれない人</h2>
        <div className="body-text stack-md">
          <p>
            誰にも話したくないわけではないけれど、まだ相談の形にはしたくない人。
            ただ置きたいだけで、答えや助言までは求めていない人。
          </p>
          <p>
            匿名でいたい人。返事を待ちたくない人。
            うまく言えないままでも、どこかに気持ちを置いていけたら少し楽かもしれないと思う人に向いています。
          </p>
        </div>
      </section>

      <section className="stack-md text-shell section-copy">
        <h2>向いていないかもしれません</h2>
        <div className="body-text stack-md">
          <p>
            すぐに具体的な助言がほしいときや、活発なやりとりを求めているときには、少し物足りなく感じるかもしれません。
          </p>
          <p>
            UjiUjiは、強いコミュニティや即時の解決を目指す場所ではなく、まずは気持ちを置いていいと思える静かな入口を目指しています。
          </p>
        </div>
      </section>

      <section className="stack-md text-shell section-copy">
        <h2>境界線について</h2>
        <div className="body-text stack-md">
          <p>
            UjiUjiは、医療や診断の代わりになるものではありません。
            ここでできるのは、気持ちを静かに置けることまでです。
          </p>
          <p>
            もし深刻な危機があるときや、すぐに専門的な支援が必要だと感じるときは、外の支援につながることも大切です。
          </p>
        </div>
      </section>

      <QuietCTA
        title="書いて置いていける場所として"
        description={
          <>
            <p>返事を前提にしないまま、まだまとまっていない気持ちを置いていくことができます。</p>
          </>
        }
        href="/app"
        label="アプリについて見る"
      />
    </div>
  );
}
