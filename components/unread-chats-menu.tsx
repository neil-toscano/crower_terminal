"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { listUnreadTicketChats, type UnreadTicketChatItem } from "@/actions/ticket-read";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function UnreadChatsMenu() {
  const pathname = usePathname();
  const [items, setItems] = useState<UnreadTicketChatItem[]>([]);

  const load = useCallback(() => {
    void listUnreadTicketChats().then(setItems);
  }, []);

  useEffect(() => {
    load();
  }, [load, pathname]);

  const count = items.length;
  const badge =
    count === 0 ? null : count > 99 ? "99+" : String(count);

  return (
    <Menubar className="border-none bg-transparent p-0">
      <MenubarMenu>
        <MenubarTrigger
          aria-label="Chats con mensajes nuevos"
          className="p-0 bg-transparent hover:bg-transparent focus:bg-transparent"
        >
          <div className="relative flex items-center justify-center rounded-2xl border border-white/[0.08] bg-black/35 p-2 ring-1 ring-white/[0.04] cursor-pointer">
            <svg
              className="h-5 w-5 text-zinc-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            {badge ? (
              <span className="absolute -right-1 -top-1 flex min-h-[1rem] min-w-[1rem] items-center justify-center rounded-full bg-rose-500 px-1 text-[0.65rem] font-semibold leading-none text-white">
                {badge}
              </span>
            ) : null}
          </div>
        </MenubarTrigger>

        <MenubarContent
          align="end"
          className="max-h-[min(70vh,24rem)] min-w-[240px] max-w-[min(92vw,20rem)] overflow-y-auto border border-white/[0.08] bg-black/90 p-1 text-zinc-100 shadow-xl ring-1 ring-white/[0.06] backdrop-blur-xl"
        >
          <MenubarLabel className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Chats con mensajes nuevos
          </MenubarLabel>
          <MenubarSeparator />
          {items.length === 0 ? (
            <MenubarItem disabled className="text-zinc-500">
              No hay conversaciones pendientes
            </MenubarItem>
          ) : (
            items.map((item) => (
              <MenubarItem key={`${item.ticketId}-${item.thread}`} asChild>
                <Link
                  href={item.href}
                  className="flex cursor-pointer flex-col items-start gap-0.5 rounded-md px-2 py-2"
                >
                  <span className="w-full truncate text-sm font-medium text-zinc-100">{item.label}</span>
                  <span className="w-full truncate text-xs text-zinc-500">{item.subtitle}</span>
                </Link>
              </MenubarItem>
            ))
          )}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
