/*
  Warnings:

  - You are about to drop the column `userEmail` on the `TodoModel` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `user` table. All the data in the column will be lost.
  - Added the required column `useremail` to the `TodoModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userid` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TodoModel" DROP COLUMN "userEmail",
ADD COLUMN     "useremail" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "userId",
ADD COLUMN     "userid" TEXT NOT NULL;
