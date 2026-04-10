"use client";

import { useEffect, useMemo, useRef, useState, useTransition } from "react";

import { sendLoungeMessage } from "@/actions/lounge";
import { loungeNameColorClass } from "@/lib/lounge-name-color";
import { pusherClient } from "@/lib/pusher-client";
import { toast } from "sonner";
import { Role } from "@/app/generated/prisma/enums";

export type LoungeMessageItem = {
  id: string;
  text: string;
  createdAt: Date | string;
  sender: { id: string; name: string | null; role: Role };
};

export function LoungeChatBox({
  initialMessages,
  readOnly,
  currentUserId,
}: {
  initialMessages: LoungeMessageItem[];
  readOnly: boolean;
  currentUserId: string | null;
}) {
  const [messages, setMessages] = useState(initialMessages);
  const [text, setText] = useState("");
  const [pending, startTransition] = useTransition();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const channel = pusherClient.subscribe("lounge");
    const handler = (msg: LoungeMessageItem) => {
      setMessages((prev) => {
        if (prev.some((m) => m.id === msg.id)) return prev;
        return [...prev, msg];
      });
    };
    channel.bind("new-message", handler);

    return () => {
      channel.unbind("new-message", handler);
      pusherClient.unsubscribe("lounge");
    };
  }, []);

  const canSend = useMemo(() => text.trim().length > 0 && !readOnly && !pending, [text, readOnly, pending]);

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-4 backdrop-blur">
      <div className="mb-3 h-72 space-y-2 overflow-y-auto rounded-2xl border border-dashed border-zinc-800 p-3 text-sm">
        {messages.length === 0 ? (
          <p className="text-center text-sm text-zinc-500">Aún no hay mensajes. ¡Saluda a la comunidad!</p>
        ) : (
          messages.map((m) => {
            const isSelf = currentUserId && m.sender.id === currentUserId;
            const labelClass = loungeNameColorClass(m.sender.id);
            const date = new Date(m.createdAt);
            const formatted = date.toLocaleString("es-PE", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            });
            return (
              <div key={m.id} className="text-zinc-100">
                <span className={`mr-2 inline-block ${labelClass}`}>
                  <span className="block text-xs font-medium">
                    {m.sender.name ?? m.sender.id}
                    {isSelf && <span className="ml-1 text-zinc-600">· tú</span>}
                  </span>
                  <span className="block text-[10px] text-zinc-500 -mt-0.5">
                    {formatted}
                  </span>
                </span>

                <span>{m.text}</span>
              </div>
            );
          })
        )}
        <div ref={bottomRef} aria-hidden />
      </div>
      <form
        action={() =>
          startTransition(async () => {
            const result = await sendLoungeMessage(text);
            if (!result.ok) {
              toast.error(result.error);
              return;
            }
            setText("");
          })
        }
        className="flex flex-col gap-2 sm:flex-row"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={readOnly ? "Inicia sesión para escribir" : "Escribe un mensaje…"}
          disabled={readOnly || pending}
          className="w-full rounded-xl border border-zinc-700 bg-black px-3 py-2 text-sm outline-none placeholder:text-zinc-600 disabled:cursor-not-allowed disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={!canSend}
          className="shrink-0 rounded-xl cursor-pointer bg-white px-4 py-2 text-sm text-black disabled:opacity-40 flex items-center justify-center"
        >
          {pending ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-t-transparent border-black rounded-full animate-spin" />
              <span>Enviando…</span>
            </div>
          ) : (
            "Enviar"
          )}
        </button>
      </form>
    </div>
  );
}
