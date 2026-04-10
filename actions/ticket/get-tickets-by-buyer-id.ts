"use server";

import prisma from "@/lib/prisma";

export async function getTicketsByBuyerId(buyerId: string) {
  return prisma.ticket.findMany({
    where: { buyerId, isActive: true },
    orderBy: { updatedAt: "desc" },
  });
}
