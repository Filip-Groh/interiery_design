/*
  Warnings:

  - You are about to drop the column `articleId` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `realizationId` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `articleId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `previewId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `realizationId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `realizationId` on the `Preview` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_RealizationToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_RealizationToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Realization" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RealizationToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ArticleToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ArticleToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Article" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ArticleToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ArticleToImage" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ArticleToImage_A_fkey" FOREIGN KEY ("A") REFERENCES "Article" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ArticleToImage_B_fkey" FOREIGN KEY ("B") REFERENCES "Image" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PreviewToRealization" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PreviewToRealization_A_fkey" FOREIGN KEY ("A") REFERENCES "Preview" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PreviewToRealization_B_fkey" FOREIGN KEY ("B") REFERENCES "Realization" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ImageToRealization" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ImageToRealization_A_fkey" FOREIGN KEY ("A") REFERENCES "Image" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ImageToRealization_B_fkey" FOREIGN KEY ("B") REFERENCES "Realization" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ImageToPreview" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ImageToPreview_A_fkey" FOREIGN KEY ("A") REFERENCES "Image" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ImageToPreview_B_fkey" FOREIGN KEY ("B") REFERENCES "Preview" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Tag" ("createDate", "id", "name", "updateDate") SELECT "createDate", "id", "name", "updateDate" FROM "Tag";
DROP TABLE "Tag";
ALTER TABLE "new_Tag" RENAME TO "Tag";
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");
CREATE TABLE "new_Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "path" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Image" ("createDate", "description", "id", "path", "updateDate", "userId") SELECT "createDate", "description", "id", "path", "updateDate", "userId" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
CREATE UNIQUE INDEX "Image_userId_key" ON "Image"("userId");
CREATE TABLE "new_Preview" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "title" TEXT NOT NULL
);
INSERT INTO "new_Preview" ("createDate", "id", "title", "updateDate") SELECT "createDate", "id", "title", "updateDate" FROM "Preview";
DROP TABLE "Preview";
ALTER TABLE "new_Preview" RENAME TO "Preview";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_RealizationToTag_AB_unique" ON "_RealizationToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_RealizationToTag_B_index" ON "_RealizationToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ArticleToTag_AB_unique" ON "_ArticleToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ArticleToTag_B_index" ON "_ArticleToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ArticleToImage_AB_unique" ON "_ArticleToImage"("A", "B");

-- CreateIndex
CREATE INDEX "_ArticleToImage_B_index" ON "_ArticleToImage"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PreviewToRealization_AB_unique" ON "_PreviewToRealization"("A", "B");

-- CreateIndex
CREATE INDEX "_PreviewToRealization_B_index" ON "_PreviewToRealization"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ImageToRealization_AB_unique" ON "_ImageToRealization"("A", "B");

-- CreateIndex
CREATE INDEX "_ImageToRealization_B_index" ON "_ImageToRealization"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ImageToPreview_AB_unique" ON "_ImageToPreview"("A", "B");

-- CreateIndex
CREATE INDEX "_ImageToPreview_B_index" ON "_ImageToPreview"("B");
