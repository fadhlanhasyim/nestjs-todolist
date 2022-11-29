-- AlterTable
ALTER TABLE "user" RENAME CONSTRAINT "User_pkey" TO "user_pkey";
-- ALTER TABLE "user" RENAME COLUMN "userid" TO "userid";
ALTER TABLE "todo" ADD COLUMN "uemail" text;
