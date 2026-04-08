import Link from "next/link";
import { featuredEntries } from "@/lib/site";

export function EntryList() {
  return (
    <div className="entry-list text-shell" role="list">
      {featuredEntries.map((entry) => (
        <Link key={entry.href} href={entry.href} className="entry-link" role="listitem">
          <span className="entry-title">{entry.title}</span>
          <span className="entry-summary">{entry.summary}</span>
        </Link>
      ))}
    </div>
  );
}