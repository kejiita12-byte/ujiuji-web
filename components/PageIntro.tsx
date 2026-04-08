import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  lead: ReactNode;
};

export function PageIntro({ eyebrow, title, lead }: PageIntroProps) {
  return (
    <section className="page-intro stack-lg text-shell">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      <div className="lead stack-md">{lead}</div>
    </section>
  );
}
