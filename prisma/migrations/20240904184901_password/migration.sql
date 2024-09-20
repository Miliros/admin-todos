-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "refresh_token_expires_in" INTEGER;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password" TEXT;
