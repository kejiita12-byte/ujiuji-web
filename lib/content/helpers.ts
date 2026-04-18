import { articles } from "./articles";
import { hubs } from "./hubs";
import type { ArticleEntry, HubEntry } from "./types";

export function getAllHubs(): HubEntry[] {
  return hubs;
}

export function getAllArticles(): ArticleEntry[] {
  return articles;
}

export function getHubBySlug(hubSlug: string): HubEntry | undefined {
  return hubs.find((hub) => hub.slug === hubSlug);
}

export function getArticleBySlugs(
  hubSlug: string,
  articleSlug: string
): ArticleEntry | undefined {
  return articles.find(
    (article) =>
      article.hubSlug === hubSlug && article.slug === articleSlug
  );
}

export function getArticlesByHubSlug(hubSlug: string): ArticleEntry[] {
  return articles.filter((article) => article.hubSlug === hubSlug);
}

export function getRelatedArticles(
  article: ArticleEntry,
  limit = 2
): ArticleEntry[] {
  const explicitRelated = (article.relatedSlugs ?? [])
    .map((slug) => articles.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is ArticleEntry => Boolean(candidate));

  if (explicitRelated.length >= limit) {
    return explicitRelated.slice(0, limit);
  }

  const fallbackRelated = articles.filter(
    (candidate) =>
      candidate.slug !== article.slug &&
      candidate.hubSlug === article.hubSlug &&
      !explicitRelated.some((related) => related.slug === candidate.slug)
  );

  return [...explicitRelated, ...fallbackRelated].slice(0, limit);
}