"use server";

import prisma from "@/lib/prisma";

export async function getTicketById(id: string) {
  return prisma.ticket.findUnique({
    where: { id },
    include: {
      messages: {
        where: {
          isActive: true,
          sender: { isActive: true, isBlocked: false },
        },
        orderBy: { createdAt: "asc" },
        include: {
          sender: {
            select: {
              id: true,
              name: true,
              image: true,
              role: true,
            }
          }
        },
      },
      // seller: true,
      seller: {
        select: {
          id: true,
          role: true,
          name: true,
          image: true,
          isActive: true,
          isBlocked: true,
        }
      },
      buyer: true,
    },
  });
}
