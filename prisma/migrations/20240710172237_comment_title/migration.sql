/*
  Warnings:

  - You are about to drop the column `title` on the `Comment` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "text" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "realizationId" INTEGER,
    "articleId" INTEGER,
    CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comment_realizationId_fkey" FOREIGN KEY ("realizationId") REFERENCES "Realization" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Comment_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Comment" ("articleId", "createDate", "id", "likes", "realizationId", "text", "updateDate", "userId") SELECT "articleId", "createDate", "id", "likes", "realizationId", "text", "updateDate", "userId" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
