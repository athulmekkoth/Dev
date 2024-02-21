/*
  Warnings:

  - You are about to drop the column `content` on the `Idea` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Idea` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Idea" DROP COLUMN "content",
DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "RefreshToken" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';

-- CreateTable
CREATE TABLE "ideas" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ideas_pkey" PRIMARY KEY ("id")
);
