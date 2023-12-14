/*
  Warnings:

  - You are about to drop the column `imageId` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "path" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "articleId" INTEGER,
    "userId" INTEGER,
    "designId" INTEGER,
    "previewId" INTEGER,
    CONSTRAINT "Image_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Image_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Image_previewId_fkey" FOREIGN KEY ("previewId") REFERENCES "Preview" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Image" ("articleId", "createDate", "description", "designId", "id", "path", "previewId", "updateDate") SELECT "articleId", "createDate", "description", "designId", "id", "path", "previewId", "updateDate" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
CREATE UNIQUE INDEX "Image_userId_key" ON "Image"("userId");
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_User" ("createDate", "id", "name", "updateDate") SELECT "createDate", "id", "name", "updateDate" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
