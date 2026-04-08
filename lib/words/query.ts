import type { Prisma, WordSource } from "@prisma/client";
import { prisma } from "@/lib/db/prisma";

type CreateWordFragmentInput = {
  text: string;
  normalizedText: string;
  source: WordSource;
  locale?: string | null;
  moderationState?: "clean" | "blocked";
  moderationReason?: string | null;
  sessionHash?: string | null;
  ipHash?: string | null;
};

export async function createWordFragment(input: CreateWordFragmentInput) {
  return prisma.wordFragment.create({
    data: {
      text: input.text,
      normalizedText: input.normalizedText,
      source: input.source,
      status: input.moderationState === "blocked" ? "rejected" : "visible",
      locale: input.locale ?? null,
      moderationState: input.moderationState ?? "clean",
      moderationReason: input.moderationReason ?? null,
      sessionHash: input.sessionHash ?? null,
      ipHash: input.ipHash ?? null
    }
  });
}

export async function getVisibleWordPool(params?: {
  limit?: number;
  seedRatio?: number;
}) {
  const limit = Math.min(Math.max(params?.limit ?? 60, 1), 100);
  const seedRatio = Math.min(Math.max(params?.seedRatio ?? 0.6, 0), 1);

  const seedLimit = Math.round(limit * seedRatio);
  const userLimit = Math.max(0, limit - seedLimit);

  const visibleWhere: Prisma.WordFragmentWhereInput = {
    status: "visible",
    hiddenAt: null,
    deletedAt: null,
    moderationState: "clean"
  };

  const [seedItems, userItems] = await Promise.all([
    prisma.wordFragment.findMany({
      where: {
        ...visibleWhere,
        source: "seed"
      },
      orderBy: {
        createdAt: "desc"
      },
      take: seedLimit
    }),
    prisma.wordFragment.findMany({
      where: {
        ...visibleWhere,
        source: "user"
      },
      orderBy: {
        createdAt: "desc"
      },
      take: userLimit
    })
  ]);

  const merged = shuffleArray([...seedItems, ...userItems]);

  return dedupeByNormalizedText(merged).slice(0, limit);
}

function dedupeByNormalizedText<T extends { normalizedText: string }>(items: T[]) {
  const seen = new Set<string>();
  const result: T[] = [];

  for (const item of items) {
    if (seen.has(item.normalizedText)) {
      continue;
    }

    seen.add(item.normalizedText);
    result.push(item);
  }

  return result;
}

function shuffleArray<T>(items: T[]) {
  const array = [...items];

  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}