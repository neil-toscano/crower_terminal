import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { getTicketById } from "@/actions/ticket/get-ticket-by-id";
import { MessageThread, TicketStatus } from "@/app/generated/prisma/enums";
import { ChatBox, type ChatMessageItem } from "@/components/chat-box";
import { auth } from "@/lib/auth";
import { ticketSellerChatPath } from "@/lib/ticket-routes";

export default async function TicketSellerChatPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  const ticket = await getTicketById(id);

  if (!ticket) notFound();

  const detailHref = `/tickets/${ticket.id}`;

  if (!session?.user) {
    redirect(`/login?callbackUrl=${encodeURIComponent(ticketSellerChatPath(ticket.id))}`);
  }

  const isSeller = session.user.id === ticket.sellerId;

  if (!isSeller) {
    redirect(detailHref);
  }

  const readOnly = ticket.status === TicketStatus.COMPLETED;
  const sellerMessages = ticket.messages.filter((m) => m.thread === MessageThread.SELLER_SIDE) as ChatMessageItem[];

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
            Chat con el administrador sobre tu publicación. El chat del comprador (pago) es aparte.
          </p>
        </div>

        <ChatBox
          ticketId={ticket.id}
          thread={MessageThread.SELLER_SIDE}
          initialMessages={sellerMessages}
          readOnly={readOnly}
          ticketBuyerId={ticket.buyerId}
          ticketSellerId={ticket.sellerId}
          currentUserId={session?.user?.id ?? null}
        />
      </div>
    </div>
  );
}
