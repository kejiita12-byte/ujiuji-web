import Link from "next/link";
import { getPublishedArticles } from "@/lib/content/articles";

export function EntryList() {
  const entries = getPublishedArticles();

  return (
    <nav aria-label="読みもの一覧" className="related-links text-shell">
      {entries.map((entry) => (
        <Link key={entry.href} href={entry.href} className="related-link">
          {entry.title}
        </Link>
      ))}
    </nav>
  );
}