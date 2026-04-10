"use server";

import { MessageThread, Role, TicketStatus } from "@/app/generated/prisma/enums";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { ticketMediatePath, ticketPurchasePath, ticketSellerChatPath } from "@/lib/ticket-routes";

export type UnreadTicketChatItem = {
  ticketId: string;
  thread: MessageThread;
  href: string;
  label: string;
  subtitle: string;
};

function mediateHref(ticketId: string, thread: MessageThread) {
  const q = thread === MessageThread.BUYER_SIDE ? "buyer" : "seller";
  return `${ticketMediatePath(ticketId)}?thread=${q}`;
}

function buildItem(
  role: Role,
  ticketId: string,
  code: string,
  title: string,
  thread: MessageThread,
): UnreadTicketChatItem {
  if (role === Role.ADMIN) {
    const label =
      thread === MessageThread.BUYER_SIDE ? `Comprador · ${code}` : `Vendedor · ${code}`;
    return {
      ticketId,
      thread,
      href: mediateHref(ticketId, thread),
      label,
      subtitle: title,
    };
  }
  if (thread === MessageThread.BUYER_SIDE) {
    return {
      ticketId,
      thread,
      href: ticketPurchasePath(ticketId),
      label: `Compra · ${code}`,
      subtitle: title,
    };
  }
  return {
    ticketId,
    thread,
    href: ticketSellerChatPath(ticketId),
    label: `Venta · ${code}`,
    subtitle: title,
  };
}

export async function listUnreadTicketChats(): Promise<UnreadTicketChatItem[]> {
  const session = await auth();
  if (!session?.user?.id) return [];

  const userId = session.user.id;
  const role = session.user.role;

  const reads = await prisma.ticketThreadReadState.findMany({
    where: { userId },
  });
  const readMap = new Map<string, Date>();
  for (const r of reads) {
    readMap.set(`${r.ticketId}|${r.thread}`, r.lastReadAt);
  }

  const groups = await prisma.message.groupBy({
    by: ["ticketId", "thread"],
    _max: { createdAt: true },
    where:
      role === Role.ADMIN
        ? {}
        : {
            OR: [
              {
                thread: MessageThread.BUYER_SIDE,
                ticket: { buyerId: userId, status: { not: TicketStatus.AVAILABLE } },
              },
              {
                thread: MessageThread.SELLER_SIDE,
                ticket: { sellerId: userId },
              },
            ],
          },
  });

  const unread: { ticketId: string; thread: MessageThread; latestAt: Date }[] = [];
  for (const g of groups) {
    const latestAt = g._max.createdAt;
    if (!latestAt) continue;
    const key = `${g.ticketId}|${g.thread}`;
    const lr = readMap.get(key);
    if (!lr || latestAt > lr) {
      unread.push({ ticketId: g.ticketId, thread: g.thread, latestAt });
    }
  }

  unread.sort((a, b) => b.latestAt.getTime() - a.latestAt.getTime());
  const slice = unread.slice(0, 40);

  if (slice.length === 0) return [];

  const tickets = await prisma.ticket.findMany({
    where: { id: { in: slice.map((s) => s.ticketId) } },
    select: { id: true, code: true, title: true },
  });
  const ticketMap = new Map(tickets.map((t) => [t.id, t]));

  return slice
    .map((u) => {
      const t = ticketMap.get(u.ticketId);
      if (!t) return null;
      return buildItem(role, t.id, t.code, t.title, u.thread);
    })
    .filter((x): x is UnreadTicketChatItem => x !== null);
}

export async function markTicketThreadRead(ticketId: string, thread: MessageThread): Promise<void> {
  const session = await auth();
  if (!session?.user?.id) return;

  const userId = session.user.id;
  const role = session.user.role;

  const ticket = await prisma.ticket.findUnique({ where: { id: ticketId } });
  if (!ticket) return;

  if (role === Role.ADMIN) {
    // ok
  } else if (thread === MessageThread.BUYER_SIDE && ticket.buyerId === userId) {
    // ok
  } else if (thread === MessageThread.SELLER_SIDE && ticket.sellerId === userId) {
    // ok
  } else {
    return;
  }

  const latest = await prisma.message.findFirst({
    where: { ticketId, thread },
    orderBy: { createdAt: "desc" },
    select: { createdAt: true },
  });

  const lastReadAt = latest?.createdAt ?? new Date();

  await prisma.ticketThreadReadState.upsert({
    where: {
      userId_ticketId_thread: { userId, ticketId, thread },
    },
    create: { userId, ticketId, thread, lastReadAt },
    update: { lastReadAt },
  });
}
