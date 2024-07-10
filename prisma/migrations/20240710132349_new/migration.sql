/*
  Warnings:

  - You are about to drop the column `isArchivated` on the `Query` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "QandA" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Query" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "query" TEXT NOT NULL
);
INSERT INTO "new_Query" ("createDate", "email", "id", "name", "query", "updateDate") SELECT "createDate", "email", "id", "name", "query", "updateDate" FROM "Query";
DROP TABLE "Query";
ALTER TABLE "new_Query" RENAME TO "Query";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
