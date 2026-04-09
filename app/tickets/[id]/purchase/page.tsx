import { notFound, redirect } from "next/navigation";

import { getTicketById } from "@/actions/ticket/get-ticket-by-id";
import { MessageThread, TicketStatus } from "@/app/generated/prisma/enums";
import { ChatBox } from "@/components/chat-box";
import type { ChatMessageItem } from "@/components/chat-box";
import { FinalizePurchaseForm } from "@/components/ticket-buy-actions";
import { auth } from "@/lib/auth";

import { BackButton } from "@/components/button-back/button-back";

export default async function TicketPurchasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  const ticket = await getTicketById(id);

  if (!ticket) notFound();

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

  return (
    <div className="px-2 py-2 text-white">
      <div className="mx-auto max-w-6xl space-y-4">
        <BackButton label="Volver" />

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5">
          <div className="text-sm text-zinc-400">{ticket.code}</div>
          <h1 className="text-2xl font-semibold">{ticket.title}</h1>
          <p className="mt-1 text-sm text-zinc-400">Aquí puedes chatear con el admin y hacer el pago</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4">
            <div className="flex justify-center mb-4">
              <h3 className="inline-block text-[11px] uppercase tracking-wider font-bold text-[#5C00B2] bg-zinc-200 px-3 py-1 rounded-full shadow-sm">
                Pago seguro - QR YAPE
              </h3>
            </div>
            <div className="rounded-2xl border-none p-4">
              <div className="aspect-square rounded-xl border border-dashed border-zinc-600 bg-zinc-950 text-center text-xs text-zinc-500">
                <img
                  src="https://res.cloudinary.com/dvult5ws1/image/upload/v1775701107/qrcode_localhost_dgyc89.png"
                  alt="QR YAPE"
                  className="h-full w-full object-contain rounded-xl"
                />
              </div>
            </div>
            <p className="mt-3 text-md text-zinc-400 mb-6">
              *Paga el monto acordado con tu comprador y usa el chat para coordinar con el admin.
            </p>
            {ticket.status === TicketStatus.IN_PROGRESS && (
              <div className="flex justify-center">
                <FinalizePurchaseForm ticketId={ticket.id} />
              </div>
            )}
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


      </div>
    </div>
  );
}
