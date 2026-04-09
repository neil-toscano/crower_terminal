import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { getTicketById } from "@/actions/ticket/get-ticket-by-id";
import { MessageThread, Role, TicketStatus } from "@/app/generated/prisma/enums";
import { AdminMediateChats } from "@/components/admin-mediate-chats";
import { AdminTicketActions } from "@/components/ticket-buy-actions";
import type { ChatMessageItem } from "@/components/chat-box";
import { auth } from "@/lib/auth";
import { ticketMediatePath } from "@/lib/ticket-routes";

export default async function TicketMediatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  const ticket = await getTicketById(id);

  if (!ticket) notFound();

  const detailHref = `/tickets/${ticket.id}`;

  if (!session?.user) {
    redirect(`/login?callbackUrl=${encodeURIComponent(ticketMediatePath(ticket.id))}`);
  }

  const isAdmin = session.user.role === Role.ADMIN;

  if (!isAdmin) {
    redirect(detailHref);
  }

  const readOnly = ticket.status === TicketStatus.COMPLETED;

  const buyerMessages = ticket.messages.filter((m) => m.thread === MessageThread.BUYER_SIDE) as ChatMessageItem[];
  const sellerMessages = ticket.messages.filter((m) => m.thread === MessageThread.SELLER_SIDE) as ChatMessageItem[];

  const buyerLabel = ticket.buyer?.name?.trim() || ticket.buyer?.email || "Comprador";

  return (
    <div className="px-2 py-2 text-white">
      <div className="mx-auto max-w-6xl space-y-4">
        <Link href={detailHref} className="inline-block text-sm text-zinc-400">
          ← Volver al detalle
        </Link>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5">
          <div className="text-sm text-zinc-400">{ticket.code}</div>
          <h1 className="text-2xl font-semibold">{ticket.title}</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Mediación — elige el hilo: vendedor (publicación / soporte) o comprador (pago y escrow). El QR solo lo ve
            el comprador en su vista.
          </p>
          <p className="mt-2 text-xs text-zinc-500">
            Estado: <span className="text-zinc-300">{ticket.status}</span>
            {ticket.buyer && (
              <>
                {" "}
                · Comprador: {ticket.buyer.name ?? ticket.buyer.email}
              </>
            )}
          </p>
        </div>

        <AdminMediateChats
          ticketId={ticket.id}
          buyerMessages={buyerMessages}
          sellerMessages={sellerMessages}
          readOnly={readOnly}
          ticketBuyerId={ticket.buyerId}
          ticketSellerId={ticket.sellerId}
          currentUserId={session?.user?.id ?? null}
          buyerLabel={buyerLabel}
        />

        <AdminTicketActions ticketId={ticket.id} />
      </div>
    </div>
  );
}
