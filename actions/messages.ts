"use server";

import { MessageThread, Role, TicketStatus } from "@/app/generated/prisma/enums";
import type { ActionResult } from "@/lib/action-result";
import { requireSessionUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";
import { revalidateTicketViews } from "@/lib/ticket-routes";

export async function sendMessage(
  ticketId: string,
  text: string,
  thread: MessageThread,
): Promise<ActionResult> {
  const user = await requireSessionUser(`/tickets/${ticketId}`);

  const clean = text.trim();
  if (!clean) return { ok: true };

  const ticket = await prisma.ticket.findUnique({ where: { id: ticketId } });
  if (!ticket) return { ok: false, error: "Ticket no encontrado." };
  if (ticket.status === TicketStatus.COMPLETED) return { ok: false, error: "El chat está cerrado." };

  const isAdmin = user.role === Role.ADMIN;
  const isSeller = user.id === ticket.sellerId;
  const isBuyer = ticket.buyerId !== null && user.id === ticket.buyerId;

  if (isAdmin) {
    if (thread === MessageThread.BUYER_SIDE && !ticket.buyerId) {
      return { ok: false, error: "Aún no hay comprador en este ticket." };
    }
  } else if (isBuyer) {
    if (thread !== MessageThread.BUYER_SIDE) {
      return { ok: false, error: "Solo puedes escribir en el chat de compra." };
    }
    if (ticket.status === TicketStatus.AVAILABLE) {
      return { ok: false, error: "No tienes permiso para escribir aquí." };
    }
  } else if (isSeller) {
    if (thread !== MessageThread.SELLER_SIDE) {
      return { ok: false, error: "Solo puedes escribir en el chat con soporte." };
    }
  } else {
    return { ok: false, error: "No tienes permiso para escribir aquí." };
  }

  const message = await prisma.message.create({
    data: {
      text: clean,
      senderId: user.id,
      ticketId,
      thread,
    },
    include: { sender: true },
  });

  await pusherServer.trigger(`private-ticket-${ticketId}`, "new-message", message);
  revalidateTicketViews(ticketId);
  return { ok: true };
}
