-- CreateTable
CREATE TABLE "TicketThreadReadState" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "thread" "MessageThread" NOT NULL,
    "lastReadAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TicketThreadReadState_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TicketThreadReadState_userId_idx" ON "TicketThreadReadState"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "TicketThreadReadState_userId_ticketId_thread_key" ON "TicketThreadReadState"("userId", "ticketId", "thread");

-- AddForeignKey
ALTER TABLE "TicketThreadReadState" ADD CONSTRAINT "TicketThreadReadState_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketThreadReadState" ADD CONSTRAINT "TicketThreadReadState_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE CASCADE ON UPDATE CASCADE;
