-- CreateEnum
CREATE TYPE "WordSource" AS ENUM ('user', 'seed');

-- CreateEnum
CREATE TYPE "WordStatus" AS ENUM ('visible', 'hidden', 'rejected');

-- CreateEnum
CREATE TYPE "ModerationState" AS ENUM ('clean', 'blocked');

-- CreateTable
CREATE TABLE "WordFragment" (
    "id" TEXT NOT NULL,
    "text" VARCHAR(32) NOT NULL,
    "normalizedText" VARCHAR(32) NOT NULL,
    "source" "WordSource" NOT NULL,
    "status" "WordStatus" NOT NULL DEFAULT 'visible',
    "locale" VARCHAR(16),
    "moderationState" "ModerationState" NOT NULL DEFAULT 'clean',
    "moderationReason" VARCHAR(64),
    "sessionHash" VARCHAR(128),
    "ipHash" VARCHAR(128),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "hiddenAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "WordFragment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "WordFragment_status_createdAt_idx" ON "WordFragment"("status", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "WordFragment_source_status_createdAt_idx" ON "WordFragment"("source", "status", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "WordFragment_normalizedText_idx" ON "WordFragment"("normalizedText");

-- CreateIndex
CREATE INDEX "WordFragment_ipHash_createdAt_idx" ON "WordFragment"("ipHash", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "WordFragment_sessionHash_createdAt_idx" ON "WordFragment"("sessionHash", "createdAt" DESC);
