import Link from "next/link";
import type { ReactNode } from "react";

type ArticleSection = {
  heading: string;
  body: ReactNode;
};

type RelatedEntry = {
  href: string;
  title: string;
};

type ArticlePageProps = {
  title: string;
  lead: ReactNode;
  sections: ArticleSection[];
  ctaTitle: string;
  ctaBody: ReactNode;
  ctaHref: string;
  ctaLabel: string;
  related: RelatedEntry[];
};

export function ArticlePage({
  title,
  lead,
  sections,
  ctaTitle,
  ctaBody,
  ctaHref,
  ctaLabel,
  related
}: ArticlePageProps) {
  return (
    <article className="article stack-2xl">
      <header className="article-header stack-lg text-shell">
        <p className="eyebrow">読みもの</p>
        <h1>{title}</h1>
        <div className="lead stack-md">{lead}</div>
      </header>

      <div className="article-sections stack-2xl">
        {sections.map((section) => (
          <section key={section.heading} className="article-block stack-md">
            <h2>{section.heading}</h2>
            <div className="body-text stack-md">{section.body}</div>
          </section>
        ))}
      </div>

      <section className="quiet-cta stack-md text-shell">
        <h2>{ctaTitle}</h2>
        <div className="body-text stack-md">{ctaBody}</div>
        <div>
          <Link href={ctaHref} className="text-button">
            {ctaLabel}
          </Link>
        </div>
      </section>

      <aside className="related stack-md text-shell" aria-label="関連ページ">
        <h2 className="related-title">もう少し読むなら</h2>
        <div className="related-links">
          {related.map((item) => (
            <Link key={item.href} href={item.href} className="related-link">
              {item.title}
            </Link>
          ))}
        </div>
      </aside>
    </article>
  );
}
