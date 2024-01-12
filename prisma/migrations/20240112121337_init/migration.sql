-- CreateTable
CREATE TABLE `character` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `skinColor` VARCHAR(191) NOT NULL,
    `hair` VARCHAR(191) NOT NULL,
    `hairColor` VARCHAR(191) NOT NULL,
    `eyes` VARCHAR(191) NOT NULL,
    `facialHair` BOOLEAN NOT NULL DEFAULT false,
    `mustache` BOOLEAN NOT NULL DEFAULT false,
    `beard` BOOLEAN NOT NULL DEFAULT false,
    `hat` BOOLEAN NOT NULL DEFAULT false,
    `glasses` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `character_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
