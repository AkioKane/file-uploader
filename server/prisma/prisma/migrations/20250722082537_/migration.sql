/*
  Warnings:

  - You are about to drop the column `id_file` on the `File` table. All the data in the column will be lost.
  - Added the required column `file_path` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "id_file",
ADD COLUMN     "file_path" INTEGER NOT NULL;
