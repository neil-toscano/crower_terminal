-- CreateTable
CREATE TABLE "LoungeMessage" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LoungeMessage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LoungeMessage" ADD CONSTRAINT "LoungeMessage_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
