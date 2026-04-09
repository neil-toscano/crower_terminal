"use server";

import prisma from "@/lib/prisma";

export async function getTicketsForAdmin() {
  return prisma.ticket.findMany({
    orderBy: { updatedAt: "desc" },
    include: {
      seller: { select: { email: true, name: true } },
      buyer: { select: { email: true, name: true } },
    },
  });
}
