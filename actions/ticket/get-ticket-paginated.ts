"use server";

import prisma from "@/lib/prisma";

export async function getTickets() {
    try {
        const tickets = await prisma.ticket.findMany({
            orderBy: { createdAt: "desc" },
        });

        return tickets;
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching tickets");
    }
}