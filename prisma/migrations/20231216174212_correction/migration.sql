/*
  Warnings:

  - You are about to drop the `Design` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `designId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Preview` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Design";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "path" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "realizationId" INTEGER,
    "articleId" INTEGER,
    "userId" INTEGER,
    "previewId" INTEGER,
    CONSTRAINT "Image_realizationId_fkey" FOREIGN KEY ("realizationId") REFERENCES "Realization" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Image_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Image_previewId_fkey" FOREIGN KEY ("previewId") REFERENCES "Preview" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Image" ("articleId", "createDate", "description", "id", "path", "previewId", "updateDate", "userId") SELECT "articleId", "createDate", "description", "id", "path", "previewId", "updateDate", "userId" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
CREATE UNIQUE INDEX "Image_userId_key" ON "Image"("userId");
CREATE TABLE "new_Preview" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "realizationId" INTEGER,
    CONSTRAINT "Preview_realizationId_fkey" FOREIGN KEY ("realizationId") REFERENCES "Realization" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Preview" ("createDate", "id", "realizationId", "title", "updateDate") SELECT "createDate", "id", "realizationId", "title", "updateDate" FROM "Preview";
DROP TABLE "Preview";
ALTER TABLE "new_Preview" RENAME TO "Preview";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
