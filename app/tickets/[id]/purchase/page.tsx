import { notFound, redirect } from "next/navigation";

import { getTicketById } from "@/actions/ticket/get-ticket-by-id";
import { markTicketThreadRead } from "@/actions/ticket-read";
import { MessageThread, TicketStatus } from "@/app/generated/prisma/enums";
import { ChatBox } from "@/components/chat-box";
import type { ChatMessageItem } from "@/components/chat-box";
import { FinalizePurchaseForm } from "@/components/ticket-buy-actions";
import { auth } from "@/lib/auth";

import { BackButton } from "@/components/button-back/button-back";
import { PaymentQR } from "./ui/payment-qr";

import { FloatingPayButton } from "./ui/floating-payment-button";


export default async function TicketPurchasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  const ticket = await getTicketById(id);
  console.log(ticket, 'ticket');

  if (!ticket || !ticket.isActive || !ticket.seller.isActive || ticket.seller.isBlocked) notFound();

  const isBuyer = session?.user?.id === ticket.buyerId;
  const detailHref = `/tickets/${ticket.id}`;

  if (ticket.status === TicketStatus.AVAILABLE) {
    redirect(detailHref);
  }

  if (!isBuyer) {
    redirect(detailHref);
  }

  const readOnly = ticket.status === TicketStatus.COMPLETED;
  const buyerMessages = ticket.messages.filter((m) => m.thread === MessageThread.BUYER_SIDE) as ChatMessageItem[];

  await markTicketThreadRead(ticket.id, MessageThread.BUYER_SIDE);

  return (
    <div className="px-2 py-2 text-white mb-10">
      <div className="mx-auto max-w-6xl space-y-4">
        <BackButton label="Volver" />

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5">
          <div className="text-sm text-zinc-400">{ticket.code}</div>
          <h1 className="text-2xl font-semibold">{ticket.title}</h1>
          <p className="mt-1 text-sm text-zinc-400">Aquí puedes chatear con el admin y hacer el pago</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
          <aside className="hidden md:block">
            <PaymentQR />
          </aside>

          <div>
            <ChatBox
              ticketId={ticket.id}
              thread={MessageThread.BUYER_SIDE}
              initialMessages={buyerMessages}
              readOnly={readOnly}
              ticketBuyerId={ticket.buyerId}
              ticketSellerId={ticket.sellerId}
              currentUserId={session?.user?.id ?? null}
              title="Chat con admin — pago y confirmación"
            />
          </div>
        </div>
        {ticket.status === TicketStatus.IN_PROGRESS && (
          <div className="flex justify-center">
            <FinalizePurchaseForm ticketId={ticket.id} />
          </div>
        )}


      </div>
      <FloatingPayButton />

    </div>
  );
}
