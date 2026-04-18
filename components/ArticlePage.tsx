import Link from "next/link";
import { ReactNode } from "react";

type RelatedEntry = {
  href: string;
  title: string;
  summary: string;
};

export type ArticlePageSection = {
  heading?: string;
  body: ReactNode;
};

type Props = {
  title: string;
  lead: ReactNode;
  sections: ArticlePageSection[];
  ctaBody?: ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
  ctaTitle?: string;
  related?: RelatedEntry[];
  relatedTitle?: string;
  headingGuideLabel?: string;
};

const DEFAULT_CTA_TITLE = "ただ置いていける場所がほしいなら";
const DEFAULT_CTA_LABEL = "気持ちを置ける場所を見る";
const DEFAULT_RELATED_TITLE = "近いページ";
const DEFAULT_HEADING_GUIDE_LABEL = "ここに書かれていること";

export function ArticlePage({
  title,
  lead,
  sections,
  ctaBody,
  ctaHref,
  ctaLabel,
  ctaTitle,
  related = [],
  relatedTitle = DEFAULT_RELATED_TITLE,
  headingGuideLabel = DEFAULT_HEADING_GUIDE_LABEL
}: Props) {
  const hasCta = Boolean(ctaBody || ctaHref);
  const visibleRelated = related.slice(0, 2);
  const resolvedCtaTitle = ctaTitle ?? DEFAULT_CTA_TITLE;
  const resolvedCtaLabel = ctaLabel ?? DEFAULT_CTA_LABEL;

  const sectionHeadings = sections
    .map((section) => section.heading?.trim())
    .filter((heading): heading is string => Boolean(heading));

  return (
    <article className="article-page stack-3xl">
      <header className="article-header stack-lg text-shell">
        <h1>{title}</h1>

        <div className="article-lead section-copy stack-md">{lead}</div>
      </header>

      <div className="article-body stack-3xl">
        {sections.map((section, index) => (
          <section
            key={`${section.heading ?? "section"}-${index}`}
            className="article-section stack-md text-shell"
          >
            {section.heading ? <h2>{section.heading}</h2> : null}
            <div className="article-section-body section-copy stack-md">
              {section.body}
            </div>
          </section>
        ))}
      </div>

      {hasCta ? (
        <section className="article-cta stack-md text-shell">
          <h2>{resolvedCtaTitle}</h2>
          {ctaBody ? (
            <div className="article-section-body section-copy stack-md">
              {ctaBody}
            </div>
          ) : null}
          {ctaHref ? (
            <div className="article-cta-action">
              <Link href={ctaHref} className="inline-cta">
                {resolvedCtaLabel}
              </Link>
            </div>
          ) : null}
        </section>
      ) : null}

      {visibleRelated.length > 0 ? (
        <section
          className="article-related stack-lg text-shell"
          aria-labelledby="related-pages"
        >
          <h2 id="related-pages">{relatedTitle}</h2>
          <div className="entry-list" role="list">
            {visibleRelated.map((entry) => (
              <Link
                key={entry.href}
                href={entry.href}
                className="entry-link"
                role="listitem"
              >
                <span className="entry-title">{entry.title}</span>
                <span className="entry-summary">{entry.summary}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
