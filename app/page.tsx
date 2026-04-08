import { QuietCTA } from "@/components/QuietCTA";

const homeFragments = [
  "うまく言えない",
  "今日は少し重い",
  "ただ外に出したい",
  "返事はいらない",
  "まだ相談にはならない"
] as const;

export default function HomePage() {
  return (
    <div className="stack-2xl page-pad">
      <section className="hero stack-lg text-shell">
        <p className="eyebrow">UjiUji</p>
        <div className="hero-copy stack-lg">
          <h1>返事はいらない。でも、ひとりにはしない場所</h1>
          <div className="lead stack-md">
            <p>まだうまく言えない気持ちも、ここに置いていい。</p>
            <p>ちゃんと説明できなくても、きれいに整理できなくても大丈夫です。</p>
            <p>言葉になる前のしんどさに、そっと触れられる場所です。</p>
          </div>
        </div>

        <div className="home-fragments" aria-hidden="true">
          {homeFragments.map((fragment) => (
            <span key={fragment}>{fragment}</span>
          ))}
        </div>
      </section>

      <section className="section-copy stack-lg text-shell">
        <div className="section-heading stack-sm">
          <p className="eyebrow">UjiUjiとは</p>
          <h2>弱音をそのまま置いていける、感情の避難所です</h2>
        </div>
        <div className="section-note stack-sm">
          <p>うまく書けなくてもいい。前向きな結論がなくてもいい。</p>
          <p>
            誰かに伝わる形になっていなくても、そのときの気持ちに少し触れられたら、
            それで十分な日があります。
          </p>
          <p>
            UjiUjiは、そういう気持ちを静かに受け止めるためにあります。
          </p>
        </div>
      </section>

      <QuietCTA
        title="今の気持ちに近い読みものにふれる"
        description={
          <>
            <p>ただ気持ちを吐き出したい日、うまく言えないけどしんどい日。</p>
            <p>今の自分に近いページを探してみてください。</p>
          </>
        }
        href="/read"
        label="読みものを見る"
      />

      <QuietCTA
        title="まだまとまっていなくても、少しだけ言葉にしてみる"
        description={
          <>
            <p>今の気持ちに近い言葉を探したり、少しだけ吐き出す場所です。</p>
            <p>答えを出すためではなく、ただ少し輪郭に触れるためのページです。</p>
          </>
        }
        href="/words"
        label="気持ちを言葉にしてみる"
      />

      <QuietCTA
        title="しんどいときに、UjiUjiができること"
        description={
          <>
            <p>どう話したらいいかわからない。</p>
            <p>でも気持ちを吐き出したいとき、そっと置いていける場所です。</p>
          </>
        }
        href="/app"
        label="UjiUjiアプリを見る"
      />
    </div>
  );
}