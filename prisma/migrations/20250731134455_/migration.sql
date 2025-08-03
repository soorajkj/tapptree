/*
  Warnings:

  - You are about to drop the column `email` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Profile" DROP COLUMN "email",
ADD COLUMN     "contactEmail" TEXT;
