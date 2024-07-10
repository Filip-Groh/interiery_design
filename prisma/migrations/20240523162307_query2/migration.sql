/*
  Warnings:

  - Added the required column `isArchivated` to the `Query` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Query" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "isArchivated" BOOLEAN NOT NULL
);
INSERT INTO "new_Query" ("createDate", "email", "id", "name", "query", "updateDate") SELECT "createDate", "email", "id", "name", "query", "updateDate" FROM "Query";
DROP TABLE "Query";
ALTER TABLE "new_Query" RENAME TO "Query";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
