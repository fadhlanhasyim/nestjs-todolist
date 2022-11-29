-- CreateTable
CREATE TABLE "TodoModel" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "isfinished" BOOLEAN NOT NULL,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "TodoModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);
