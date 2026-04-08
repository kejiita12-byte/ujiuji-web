import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { WORD_SEED_TEXTS } from "../lib/words/seed-data";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set.");
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});

const prisma = new PrismaClient({ adapter });

function normalizeWordInput(value: string) {
  return value.replace(/[\r\n]+/g, "").replace(/\s+/g, " ").trim();
}

async function main() {
  for (const text of WORD_SEED_TEXTS) {
    const normalizedText = normalizeWordInput(text);

    const existing = await prisma.wordFragment.findFirst({
      where: {
        source: "seed",
        normalizedText
      },
      select: {
        id: true
      }
    });

    if (existing) {
      continue;
    }

    await prisma.wordFragment.create({
      data: {
        text,
        normalizedText,
        source: "seed",
        status: "visible",
        moderationState: "clean",
        moderationReason: null
      }
    });
  }

  console.log(`Seeded ${WORD_SEED_TEXTS.length} word fragments.`);
}

main()
  .catch((error) => {
    console.error("Failed to seed word fragments:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });