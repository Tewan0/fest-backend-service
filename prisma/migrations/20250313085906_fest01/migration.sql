-- CreateTable
CREATE TABLE `user_tb` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `userFullname` VARCHAR(100) NOT NULL,
    `userNam` VARCHAR(50) NOT NULL,
    `userPassword` VARCHAR(50) NOT NULL,
    `userImage` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fest_tb` (
    `festId` INTEGER NOT NULL AUTO_INCREMENT,
    `festName` VARCHAR(150) NOT NULL,
    `festDetall` VARCHAR(191) NOT NULL,
    `festState` VARCHAR(191) NOT NULL,
    `festNumDate` INTEGER NOT NULL,
    `festCost` DOUBLE NOT NULL,
    `userId` INTEGER NOT NULL,
    `festImage` VARCHAR(150) NOT NULL,

    PRIMARY KEY (`festId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
