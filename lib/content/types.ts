export type ArticleSection =
  | {
      type: "paragraphs";
      heading?: string;
      paragraphs: string[];
    }
  | {
      type: "list";
      heading?: string;
      items: string[];
    }
  | {
      type: "cta";
      heading?: string;
      body: string[];
      href: string;
      label: string;
    };

export type ArticleEntry = {
  hubSlug: string;
  slug: string;
  title: string;
  description: string;
  listSummary?: string;
  lead: string[];
  relatedSlugs?: string[];
  sections: ArticleSection[];
};

export type HubEntry = {
  slug: string;
  title: string;
  description: string;
  intro: string[];
  wordsCta?: {
    body: string[];
    href: string;
    label: string;
  };
  appCta?: {
    body: string[];
    href: string;
    label: string;
  };
};