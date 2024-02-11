-- CreateTable
CREATE TABLE "_like" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_like_A_fkey" FOREIGN KEY ("A") REFERENCES "Comment" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_like_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_dislike" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_dislike_A_fkey" FOREIGN KEY ("A") REFERENCES "Comment" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_dislike_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_like_AB_unique" ON "_like"("A", "B");

-- CreateIndex
CREATE INDEX "_like_B_index" ON "_like"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_dislike_AB_unique" ON "_dislike"("A", "B");

-- CreateIndex
CREATE INDEX "_dislike_B_index" ON "_dislike"("B");
