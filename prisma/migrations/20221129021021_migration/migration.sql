-- CreateTable
CREATE TABLE "todo" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "isfinished" BOOLEAN NOT NULL,

    CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id")
);
-- ALTER TABLE "Todo" RENAME COLUMN "isFinished" TO "isfinished";
