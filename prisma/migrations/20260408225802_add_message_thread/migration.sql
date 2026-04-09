-- CreateEnum
CREATE TYPE "MessageThread" AS ENUM ('BUYER_SIDE', 'SELLER_SIDE');

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "thread" "MessageThread" NOT NULL DEFAULT 'BUYER_SIDE';
