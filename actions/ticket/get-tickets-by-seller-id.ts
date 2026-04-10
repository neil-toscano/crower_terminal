"use server";

import prisma from "@/lib/prisma";

export async function getTicketsBySellerId(sellerId: string) {
  return prisma.ticket.findMany({
    where: { sellerId, isActive: true },
    orderBy: { createdAt: "desc" },
  });
}
