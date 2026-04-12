import { QuietCTA } from "@/components/QuietCTA";
// Next.jsのMetadata API（layout.tsxやpage.tsxで定義する場合）
// SEOにおいてタイトルとディスクリプションは最重要です。
export const metadata = {
  title: "UjiUji Web | 言葉にならない「しんどさ」を置いていける感情の避難所",
  description: "うまく言えない、整理できない。そんな気持ちをそのまま置いていい場所です。返事はいらない、でもひとりにはしない。あなたのための静かな空間です。",
};

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
      {/* 1. <section>にaria-labelledbyを追加。
        検索エンジンに「このセクションは～について書かれている」と明確に伝えます。
      */}
      <section className="hero stack-lg text-shell" aria-labelledby="hero-title">
        <p className="eyebrow">UjiUji</p>
        <div className="hero-copy stack-lg">
          {/* h1はページに1つ。サイトの核心を突くコピーにします */}
          <h1 id="hero-title">返事はいらない。<br />でも、ひとりにはしない場所</h1>
          <div className="lead stack-md">
            <p>まだうまく言えない気持ちも、ここに置いていい。</p>
            <p>ちゃんと説明できなくても、きれいに整理できなくても大丈夫です。</p>
            {/* 「しんどさ」などの重要なワードを<strong>で囲み、強調（強調しすぎないデザインならOK） */}
            <p>言葉になる前の<strong>しんどさ</strong>に、そっと触れられる場所です。</p>
          </div>
        </div>

        {/* 2. aria-hidden="true" を削除。
          これらの言葉は、悩んでいる人が検索しうる「共起語」として非常に価値があります。
          デザイン上はそのままに、検索エンジンにはインデックスさせます。
        */}
        <div className="home-fragments">
          {homeFragments.map((fragment) => (
            <span key={fragment} className="fragment-item">{fragment}</span>
          ))}
        </div>
      </section>

      {/* 3. 「UjiUjiとは」をセカンドキーワードの柱にする */}
      <section className="section-copy stack-lg text-shell" aria-labelledby="about-title">
        <div className="section-heading stack-sm">
          <p className="eyebrow">About</p>
          <h2 id="about-title">弱音をそのまま置いていける、感情の避難所です</h2>
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

      {/* 4. QuietCTA内のタイトルが内部的に何タグかによりますが、
        理想は <h3> でマークアップされていることです。
      */}
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