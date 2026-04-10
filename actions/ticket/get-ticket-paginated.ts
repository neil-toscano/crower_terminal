"use server";

import prisma from "@/lib/prisma";

const PAGE_SIZE = 20;

export type GetTicketsPageInput = {
    cursorId?: string | null;
    search?: string;
};

export async function getTicketsPage(input: GetTicketsPageInput = {}) {
    try {
        const take = PAGE_SIZE + 1;
        const q = input.search?.trim();

        const tickets = await prisma.ticket.findMany({
            where: {
                isActive: true,
                seller: { isActive: true, isBlocked: false },
                ...(q
                    ? {
                          OR: [
                              { title: { contains: q, mode: "insensitive" } },
                              { code: { contains: q, mode: "insensitive" } },
                          ],
                      }
                    : {}),
            },
            orderBy: [{ createdAt: "desc" }, { id: "desc" }],
            take,
            ...(input.cursorId ? { skip: 1, cursor: { id: input.cursorId } } : {}),
        });

        const hasMore = tickets.length > PAGE_SIZE;
        const items = hasMore ? tickets.slice(0, PAGE_SIZE) : tickets;
        const nextCursor = hasMore && items.length > 0 ? items[items.length - 1]!.id : null;

        return { tickets: items, nextCursor };
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching tickets");
    }
}