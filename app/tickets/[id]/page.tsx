import Link from "next/link";
import { notFound } from "next/navigation";

import { getTicketById } from "@/actions/ticket/get-ticket-by-id";
import { Role, TicketStatus } from "@/app/generated/prisma/enums";
import { auth } from "@/lib/auth";
import { ticketMediatePath, ticketPurchasePath, ticketSellerChatPath } from "@/lib/ticket-routes";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft } from "@hugeicons/core-free-icons";
import { TicketStatusES } from "@/const";

export default async function TicketPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  const ticket = await getTicketById(id);

  if (!ticket) notFound();

  const isBuyer = session?.user?.id === ticket.buyerId;
  const isSeller = session?.user?.id === ticket.sellerId;
  const isAdmin = session?.user?.role === Role.ADMIN;

  return (
    <div className="px-2 py-2 text-white">
      <div className="mx-auto max-w-6xl space-y-4">
        <Link
          href="/"
          className="inline-flex items-center px-3 py-1 rounded-md bg-zinc-700/30 text-zinc-200 hover:bg-zinc-700/50 transition-colors"
          aria-label="Volver al detalle"
        >
          <HugeiconsIcon icon={ArrowLeft} className="h-6 w-6 mr-2" />
          <span>Volver</span>
        </Link>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5">
          <div className="text-sm text-zinc-400">
            Código:

            <span className="ml-1 inline-block rounded px-1 py-0.5 text-emerald-400 text-sm font-mono">
              {ticket.code}
            </span>
          </div>

          <h1 className="text-2xl font-semibold">{ticket.title}</h1>
          <p className="mt-1 text-sm text-zinc-400">Status: {TicketStatusES[ticket.status]}</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
          <section className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4">
            <h3 className="mb-2 text-sm font-medium">Detalle del ticket</h3>
            <div className="space-y-2 text-sm text-zinc-300">
              <p>
                <span className="text-zinc-400">Estado:</span> {TicketStatusES[ticket.status]}
              </p>
              <p>
                <span className="text-zinc-400">Vendedor:</span> {ticket.seller?.name ?? "Sin nombre"}
              </p>
              <p className="pt-2 text-xs text-zinc-400">
                Esta vista solo muestra información del ticket. Si quieres comprarlo, hazlo en el <strong>Marketplace</strong>.
              </p>
            </div>
          </section>

          <aside className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4">
            <h3 className="mb-3 text-sm font-medium">Acciones</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="flex items-center justify-center rounded-xl border border-zinc-700 px-3 py-2 text-sm"
              >
                <HugeiconsIcon icon={ArrowLeft} className="h-6 w-6 mr-2" />
                Volver al marketplace
              </Link>

              {ticket.status === TicketStatus.AVAILABLE && (
                <p className="text-xs text-zinc-400">Para comprar usa el boton ADQUIRIR desde la lista principal.</p>
              )}

              {ticket.status !== TicketStatus.AVAILABLE && isBuyer && (
                <Link
                  href={ticketPurchasePath(ticket.id)}
                  className="block rounded-xl bg-white px-3 py-2 text-center text-xs text-black"
                >
                  Ver mi compra y chatear
                </Link>
              )}

              {isSeller && (
                <Link
                  href={ticketSellerChatPath(ticket.id)}
                  className="block rounded-xl border border-amber-500/40 bg-amber-950/30 px-3 py-2 text-center text-xs text-amber-100"
                >
                  Chatear con admin
                </Link>
              )}

              {isAdmin && (
                <Link
                  href={ticketMediatePath(ticket.id)}
                  className="block rounded-xl border border-violet-500/50 bg-violet-950/40 px-3 py-2 text-center text-xs text-violet-200"
                >
                  Panel admin — mediar chats
                </Link>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
