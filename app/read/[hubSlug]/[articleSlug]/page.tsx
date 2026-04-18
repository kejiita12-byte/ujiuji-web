import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import {
  getAllArticles,
  getArticleBySlugs,
  getRelatedArticles
} from "@/lib/content/helpers";

type PageProps = {
  params: Promise<{
    hubSlug: string;
    articleSlug: string;
  }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    hubSlug: article.hubSlug,
    articleSlug: article.slug
  }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { hubSlug, articleSlug } = await params;
  const article = getArticleBySlugs(hubSlug, articleSlug);

  if (!article) {
    return {
      title: "読む"
    };
  }

  return {
    title: article.title,
    description: article.description
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { hubSlug, articleSlug } = await params;
  const article = getArticleBySlugs(hubSlug, articleSlug);

  if (!article) {
    notFound();
  }

  const ctaSection = article.sections.find(
    (section) => section.type === "cta"
  );

  const contentSections = article.sections
    .filter((section) => section.type !== "cta")
    .map((section) => {
      if (section.type === "paragraphs") {
        return {
          heading: section.heading,
          body: (
            <>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </>
          )
        };
      }

      return {
        heading: section.heading,
        body: (
          <ul className="stack-sm">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )
      };
    });

  const relatedEntries = getRelatedArticles(article, 2).map((entry) => ({
    href: `/read/${entry.hubSlug}/${entry.slug}`,
    title: entry.title,
    summary: entry.description
  }));

  return (
    <div className="page-pad">
      <ArticlePage
        title={article.title}
        lead={
          <>
            {article.lead.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </>
        }
        sections={contentSections}
        ctaTitle={ctaSection?.heading}
        ctaBody={
          ctaSection ? (
            <>
              {ctaSection.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </>
          ) : undefined
        }
        ctaHref={ctaSection?.href}
        ctaLabel={ctaSection?.label}
        related={relatedEntries}
      />
    </div>
  );
}