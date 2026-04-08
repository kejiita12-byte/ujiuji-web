import Link from "next/link";
import type { ReactNode } from "react";

type QuietCTAProps = {
  title: string;
  description: ReactNode;
  href: string;
  label: string;
  pill?: boolean;
};

export function QuietCTA({ title, description, href, label, pill = false }: QuietCTAProps) {
  return (
    <section className="quiet-cta stack-md text-shell">
      <h2>{title}</h2>
      <div className="body-text stack-md">{description}</div>
      <div>
        <Link href={href} className={pill ? "mist-button" : "text-button"}>
          {label}
        </Link>
      </div>
    </section>
  );
}
