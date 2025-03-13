/*
  Warnings:

  - You are about to drop the column `festDetall` on the `fest_tb` table. All the data in the column will be lost.
  - You are about to drop the column `userNam` on the `user_tb` table. All the data in the column will be lost.
  - Added the required column `festDetail` to the `fest_tb` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `user_tb` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `fest_tb` DROP COLUMN `festDetall`,
    ADD COLUMN `festDetail` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user_tb` DROP COLUMN `userNam`,
    ADD COLUMN `userName` VARCHAR(50) NOT NULL;
