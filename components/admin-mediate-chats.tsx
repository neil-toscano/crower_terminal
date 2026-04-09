"use client";

import { useState } from "react";

import { ChatBox, type ChatMessageItem } from "@/components/chat-box";
import { MessageThread } from "@/app/generated/prisma/enums";

export function AdminMediateChats({
  ticketId,
  buyerMessages,
  sellerMessages,
  readOnly,
  ticketBuyerId,
  ticketSellerId,
  currentUserId,
  buyerLabel,
}: {
  ticketId: string;
  buyerMessages: ChatMessageItem[];
  sellerMessages: ChatMessageItem[];
  readOnly: boolean;
  ticketBuyerId: string | null;
  ticketSellerId: string;
  currentUserId: string | null;
  buyerLabel: string;
}) {
  const hasBuyer = Boolean(ticketBuyerId);
  const [tab, setTab] = useState<"buyer" | "seller">(hasBuyer ? "buyer" : "seller");

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-1">
        <button
          type="button"
          onClick={() => setTab("seller")}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
            tab === "seller"
              ? "bg-amber-500/20 text-amber-200 ring-1 ring-amber-500/40"
              : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
          }`}
        >
          Con vendedor
        </button>
        <button
          type="button"
          disabled={!hasBuyer}
          onClick={() => setTab("buyer")}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-40 ${
            tab === "buyer"
              ? "bg-sky-500/20 text-sky-200 ring-1 ring-sky-500/40"
              : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
          }`}
        >
          Con comprador
          {!hasBuyer ? " (sin comprador)" : ` · ${buyerLabel}`}
        </button>
      </div>

      {tab === "seller" ? (
        <ChatBox
          ticketId={ticketId}
          thread={MessageThread.SELLER_SIDE}
          initialMessages={sellerMessages}
          readOnly={readOnly}
          ticketBuyerId={ticketBuyerId}
          ticketSellerId={ticketSellerId}
          currentUserId={currentUserId}
          title="Hilo vendedor — coordinación de publicación y soporte"
        />
      ) : hasBuyer ? (
        <ChatBox
          ticketId={ticketId}
          thread={MessageThread.BUYER_SIDE}
          initialMessages={buyerMessages}
          readOnly={readOnly}
          ticketBuyerId={ticketBuyerId}
          ticketSellerId={ticketSellerId}
          currentUserId={currentUserId}
          title="Hilo comprador — pago y escrow (sin QR aquí; el comprador lo ve en su vista)"
        />
      ) : null}
    </div>
  );
}
