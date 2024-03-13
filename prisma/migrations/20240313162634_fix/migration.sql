-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Designer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobil" TEXT NOT NULL,
    "imageId" INTEGER NOT NULL,
    CONSTRAINT "Designer_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Designer" ("createDate", "email", "id", "imageId", "mobil", "name", "role", "updateDate") SELECT "createDate", "email", "id", "imageId", "mobil", "name", "role", "updateDate" FROM "Designer";
DROP TABLE "Designer";
ALTER TABLE "new_Designer" RENAME TO "Designer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
