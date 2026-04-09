import { notFound, redirect } from "next/navigation";

import { getTicketById } from "@/actions/ticket/get-ticket-by-id";
import { MessageThread, TicketStatus } from "@/app/generated/prisma/enums";
import { ChatBox } from "@/components/chat-box";
import type { ChatMessageItem } from "@/components/chat-box";
import { FinalizePurchaseForm } from "@/components/ticket-buy-actions";
import { auth } from "@/lib/auth";

import { BackButton } from "@/components/button-back/button-back";
import { PaymentQR } from "./ui/payment-qr";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { HugeiconsIcon } from '@hugeicons/react';
import { Payment01FreeIcons } from '@hugeicons/core-free-icons'


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
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#5C00B2] text-white shadow-lg shadow-purple-900/20 hover:scale-105 transition-transform active:scale-95">
              <HugeiconsIcon
                icon={Payment01FreeIcons}
                size={24}
                color="currentColor"
                strokeWidth={1.5}
              />
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="bg-zinc-950 border-zinc-800 rounded-t-[32px] p-6 h-auto">
            <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-zinc-700" />
            <h2 className="text-xl font-bold mb-4 text-center">Escanea para pagar</h2>
            <PaymentQR />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
