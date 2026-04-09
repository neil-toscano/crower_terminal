"use client";

import { useEffect, useMemo, useState, useTransition } from "react";

import { sendMessage } from "@/actions/messages";
import { MessageThread, Role } from "@/app/generated/prisma/enums";
import { pusherClient } from "@/lib/pusher-client";
import { toast } from "sonner";

export type ChatMessageItem = {
  id: string;
  text: string;
  createdAt: Date;
  isSystem: boolean;
  thread: MessageThread;
  sender: { id: string; name: string | null; email: string; role: Role };
};

function senderLabelClass(
  m: ChatMessageItem,
  ticketBuyerId: string | null,
  ticketSellerId: string,
): string {
  if (m.isSystem) return "text-zinc-500";
  if (m.sender.role === Role.ADMIN) return "text-violet-400";
  if (ticketBuyerId && m.sender.id === ticketBuyerId) return "text-sky-400";
  if (m.sender.id === ticketSellerId) return "text-amber-400";
  return "text-emerald-400";
}

function senderTag(
  m: ChatMessageItem,
  ticketBuyerId: string | null,
  ticketSellerId: string,
): string | null {
  if (m.isSystem) return null;
  if (m.sender.role === Role.ADMIN) return "Admin";
  if (ticketBuyerId && m.sender.id === ticketBuyerId) return "Comprador";
  if (m.sender.id === ticketSellerId) return "Vendedor";
  return "Usuario";
}

export function ChatBox({
  ticketId,
  thread,
  initialMessages,
  readOnly,
  ticketBuyerId,
  ticketSellerId,
  currentUserId,
  title,
}: {
  ticketId: string;
  thread: MessageThread;
  initialMessages: ChatMessageItem[];
  readOnly: boolean;
  ticketBuyerId: string | null;
  ticketSellerId: string;
  currentUserId: string | null;
  /** Encabezado opcional sobre el área de mensajes */
  title?: string;
}) {
  const [messages, setMessages] = useState(initialMessages);
  const [text, setText] = useState("");
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  useEffect(() => {
    const channel = pusherClient.subscribe(`private-ticket-${ticketId}`);
    const handler = (msg: ChatMessageItem) => {
      if (msg.thread !== thread) return;
      setMessages((prev) => [...prev, msg]);
    };
    channel.bind("new-message", handler);

    return () => {
      channel.unbind("new-message", handler);
      pusherClient.unsubscribe(`private-ticket-${ticketId}`);
    };
  }, [ticketId, thread]);

  const canSend = useMemo(() => text.trim().length > 0 && !readOnly && !pending, [text, readOnly, pending]);

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-4 backdrop-blur">
      {title ?
        <>
          <h4 className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-200">{title}</h4>
          <p className="mb-2 text-sm text-emerald-500/90">
            Este es el chat con el admin. Siempre disponible, suele responder entre 10 y 15 minutos.
          </p>
        </> : null}

      <div className="mb-3 h-72 space-y-2 overflow-y-auto rounded-2xl border border-dashed border-zinc-800 p-3 text-sm">
        {messages.map((m) => {
          const tag = senderTag(m, ticketBuyerId, ticketSellerId);
          const isSelf = !m.isSystem && currentUserId && m.sender.id === currentUserId;
          return (
            <div key={m.id} className={m.isSystem ? "text-zinc-400" : "text-zinc-100"}>
              <span className={`mr-2 text-xs font-medium ${senderLabelClass(m, ticketBuyerId, ticketSellerId)}`}>
                {m.sender.name ?? m.sender.email}
                {tag && <span className="ml-1.5 font-normal text-zinc-500">({tag})</span>}
                {isSelf && <span className="ml-1 text-zinc-600">· tú</span>}
              </span>
              <span>{m.text}</span>
            </div>
          );
        })}
      </div>
      <form
        action={() =>
          startTransition(async () => {
            const result = await sendMessage(ticketId, text, thread);
            if (!result.ok) {
              toast.error(result.error);
              return;
            }
            setText("");
          })
        }
        className="flex gap-2"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={readOnly ? "Chat is read-only" : "Write message..."}
          disabled={readOnly || pending}
          className="w-full rounded-xl border border-zinc-700 bg-black px-3 py-2 text-sm outline-none"
        />
        <button
          type="submit"
          disabled={!canSend}
          className="rounded-xl cursor-pointer bg-white px-4 py-2 text-sm text-black disabled:opacity-40 flex items-center justify-center"
        >
          {pending ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-t-transparent border-black rounded-full animate-spin"></div>
              <span>Enviando...</span>
            </div>
          ) : (
            "Enviar"
          )}
        </button>
      </form>
    </div>
  );
}
