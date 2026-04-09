"use server";

import prisma from "@/lib/prisma";

export async function getTicketById(id: string) {
  return prisma.ticket.findUnique({
    where: { id },
    include: {
      messages: {
        orderBy: { createdAt: "asc" },
        include: { sender: true },
      },
      seller: true,
      buyer: true,
    },
  });
}
