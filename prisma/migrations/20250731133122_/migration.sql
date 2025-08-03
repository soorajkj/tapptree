/*
  Warnings:

  - You are about to drop the column `img` on the `user` table. All the data in the column will be lost.
  - Made the column `username` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."socialLink" DROP CONSTRAINT "socialLink_platformId_fkey";

-- DropForeignKey
ALTER TABLE "public"."socialLink" DROP CONSTRAINT "socialLink_userId_fkey";

-- AlterTable
ALTER TABLE "public"."socialPlatform" ADD COLUMN     "archive" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "public"."user" DROP COLUMN "img",
ADD COLUMN     "avatarUrl" TEXT,
ALTER COLUMN "username" SET NOT NULL;

-- CreateTable
CREATE TABLE "public"."Profile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "bio" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "website" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "public"."Profile"("userId");

-- CreateIndex
CREATE INDEX "Profile_userId_idx" ON "public"."Profile"("userId");

-- CreateIndex
CREATE INDEX "socialLink_userId_order_idx" ON "public"."socialLink"("userId", "order");

-- AddForeignKey
ALTER TABLE "public"."Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."socialLink" ADD CONSTRAINT "socialLink_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "public"."socialPlatform"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."socialLink" ADD CONSTRAINT "socialLink_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
