import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllHubs,
  getArticlesByHubSlug,
  getHubBySlug
} from "@/lib/content/helpers";

type PageProps = {
  params: Promise<{
    hubSlug: string;
  }>;
};

export function generateStaticParams() {
  return getAllHubs().map((hub) => ({
    hubSlug: hub.slug
  }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { hubSlug } = await params;
  const hub = getHubBySlug(hubSlug);

  if (!hub) {
    return {
      title: "読む"
    };
  }

  return {
    title: hub.title,
    description: hub.description
  };
}

export default async function HubPage({ params }: PageProps) {
  const { hubSlug } = await params;
  const hub = getHubBySlug(hubSlug);

  if (!hub) {
    notFound();
  }

  const entries = getArticlesByHubSlug(hub.slug);

  return (
    <div className="stack-2xl page-pad">
      <section className="stack-lg text-shell read-intro">
        <p className="eyebrow">読む</p>
        <h1>{hub.title}</h1>
        <div className="read-support">
          {hub.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section
        className="stack-lg text-shell read-group"
        aria-labelledby="hub-entries"
      >
        <h2 id="hub-entries" className="read-section-label">
          このテーマの読みもの
        </h2>

        <div className="entry-list" role="list">
          {entries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/read/${hub.slug}/${entry.slug}`}
              className="entry-link"
              role="listitem"
            >
              <span className="entry-title">{entry.title}</span>
              <span className="entry-summary">
                {entry.listSummary ?? entry.description}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}