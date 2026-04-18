import Link from "next/link";
import { articles } from "@/lib/content/articles";

export function EntryList() {
  const entries = articles;

  return (
    <div className="entry-list text-shell" role="list">
      {entries.map((entry) => (
        <Link
          key={entry.slug}
          href={`/read/${entry.slug}`}
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
  );
}