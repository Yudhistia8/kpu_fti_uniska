-- CreateTable
CREATE TABLE `Pemilih` (
    `id` VARCHAR(191) NOT NULL,
    `npm` VARCHAR(191) NULL,
    `nama` VARCHAR(191) NULL,
    `Prodi` VARCHAR(191) NULL,
    `role` VARCHAR(191) NULL,
    `status_hmp` BOOLEAN NOT NULL DEFAULT false,
    `status_bem` BOOLEAN NOT NULL DEFAULT false,
    `refresh_token` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Calon` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `visi` VARCHAR(191) NOT NULL,
    `misi` VARCHAR(191) NOT NULL,
    `prodi` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NOT NULL,
    `angkatan` INTEGER NOT NULL,
    `tgl_lahir` DATETIME(3) NOT NULL,
    `no_urut` INTEGER NOT NULL,
    `type` ENUM('TI', 'SI', 'BEM') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VotingCalon` (
    `calon_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`calon_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `VotingCalon` ADD CONSTRAINT `VotingCalon_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Pemilih`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VotingCalon` ADD CONSTRAINT `VotingCalon_calon_id_fkey` FOREIGN KEY (`calon_id`) REFERENCES `Calon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
