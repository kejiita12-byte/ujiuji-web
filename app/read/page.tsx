import type { Metadata } from "next";
import Link from "next/link";
import {
  getAllArticles,
  getAllHubs
} from "@/lib/content/helpers";

export const metadata: Metadata = {
  title: "読む",
  description:
    "今の気持ちに近いページから読めます。親や家庭のこと、見た目のこと、うまく言えないしんどさに触れるページをまとめています。"
};

export default function ReadIndexPage() {
  const hubs = getAllHubs();
  const articles = getAllArticles();

  return (
    <div className="stack-2xl page-pad">
      <section className="stack-lg text-shell read-intro">
        <p className="eyebrow">読む</p>
        <h1>ujiuji 読みもの</h1>
        <div className="read-support">
          <p>今の気持ちに近いものから読めます。どこから読んでも大丈夫です。</p>
        </div>
      </section>

      <section className="stack-lg text-shell read-group" aria-labelledby="hub-list">
  <h2 id="hub-list" className="read-section-label">近いテーマから</h2>
  <div className="entry-list" role="list">
    {hubs.map((hub) => (
      <Link
        key={hub.slug}
        href={`/read/${hub.slug}`}
        className="entry-link"
        role="listitem"
      >
        <span className="entry-title">{hub.title}</span>
        <span className="entry-summary">{hub.description}</span>
      </Link>
    ))}
  </div>
</section>

<section className="stack-lg text-shell read-group" aria-labelledby="article-list">
  <h2 id="article-list" className="read-section-label">ページ一覧</h2>
  <div className="entry-list" role="list">
    {articles.map((article) => {
      const hub = hubs.find((item) => item.slug === article.hubSlug);

      return (
        <Link
          key={`${article.hubSlug}/${article.slug}`}
          href={`/read/${article.hubSlug}/${article.slug}`}
          className="entry-link"
          role="listitem"
        >
          <span className="entry-title">{article.title}</span>
          <span className="entry-summary">
            {article.listSummary ?? article.description}
          </span>
        </Link>
      );
    })}
  </div>
</section>
    </div>
  );
}