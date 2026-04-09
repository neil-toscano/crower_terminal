import { notFound, redirect } from "next/navigation";

import { getTicketById } from "@/actions/ticket/get-ticket-by-id";
import { Role, TicketStatus } from "@/app/generated/prisma/enums";
import { auth } from "@/lib/auth";
import { ticketMediatePath, ticketPurchasePath, ticketSellerChatPath } from "@/lib/ticket-routes";

/**
 * Ruta legada: redirige a la vista correcta según rol.
 * Usa /purchase (comprador) o /mediate (admin).
 */
export default async function TicketBuyRedirectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  const ticket = await getTicketById(id);

  if (!ticket) notFound();

  const detailHref = `/tickets/${ticket.id}`;

  if (session?.user?.role === Role.ADMIN) {
    redirect(ticketMediatePath(ticket.id));
  }

  if (ticket.status === TicketStatus.AVAILABLE) {
    if (session?.user?.id === ticket.sellerId) {
      redirect(ticketSellerChatPath(ticket.id));
    }
    redirect(detailHref);
  }

  if (session?.user?.id === ticket.buyerId) {
    redirect(ticketPurchasePath(ticket.id));
  }

  if (session?.user?.id === ticket.sellerId) {
    redirect(ticketSellerChatPath(ticket.id));
  }

  redirect(detailHref);
}
