-- AlterTable
ALTER TABLE `Pemilih` ADD COLUMN `status_akun` ENUM('Pelaksana', 'Mahasiswa') NOT NULL DEFAULT 'Mahasiswa';
