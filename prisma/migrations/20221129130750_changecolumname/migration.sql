/*
  Warnings:

  - Made the column `uemail` on table `todo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "todo" ALTER COLUMN "uemail" SET NOT NULL;
