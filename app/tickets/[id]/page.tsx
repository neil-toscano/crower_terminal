import Link from "next/link";
import { notFound } from "next/navigation";

import { getTicketById } from "@/actions/ticket/get-ticket-by-id";
import { Role, TicketStatus } from "@/app/generated/prisma/enums";
import { auth } from "@/lib/auth";
import { ticketMediatePath, ticketPurchasePath, ticketSellerChatPath } from "@/lib/ticket-routes";

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
        <Link href="/" className="inline-block text-sm text-zinc-400">
          ← Back
        </Link>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5">
          <div className="text-sm text-zinc-400">{ticket.code}</div>
          <h1 className="text-2xl font-semibold">{ticket.title}</h1>
          <p className="mt-1 text-sm text-zinc-400">Status: {ticket.status}</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
          <section className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4">
            <h3 className="mb-2 text-sm font-medium">Detalle del ticket</h3>
            <div className="space-y-2 text-sm text-zinc-300">
              <p>
                <span className="text-zinc-400">Estado:</span> {ticket.status}
              </p>
              <p>
                <span className="text-zinc-400">Vendedor:</span> {ticket.seller?.name ?? "Sin nombre"}
              </p>
              {ticket.status === TicketStatus.AVAILABLE && (
                <p>
                  <span className="text-zinc-400">Celular:</span> {ticket.sellerPhone ?? "No definido"}
                </p>
              )}
              <p className="pt-2 text-xs text-zinc-400">
                Esta vista solo muestra información del ticket. Comprador: pago (QR) y chat en &quot;mi compra&quot;.
                Vendedor: chat con admin en &quot;soporte&quot;. Admin: panel de mediación con ambos hilos.
              </p>
            </div>
          </section>

          <aside className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4">
            <h3 className="mb-3 text-sm font-medium">Acciones</h3>
            <div className="space-y-2">
              <Link href="/" className="block rounded-xl border border-zinc-700 px-3 py-2 text-center text-xs">
                Volver al marketplace
              </Link>

              {ticket.status === TicketStatus.AVAILABLE && (
                <p className="text-xs text-zinc-400">Para comprar usa el boton BUY desde la lista principal.</p>
              )}

              {ticket.status !== TicketStatus.AVAILABLE && isBuyer && (
                <Link
                  href={ticketPurchasePath(ticket.id)}
                  className="block rounded-xl bg-white px-3 py-2 text-center text-xs text-black"
                >
                  Ir a mi compra (pago y chat)
                </Link>
              )}

              {isSeller && (
                <Link
                  href={ticketSellerChatPath(ticket.id)}
                  className="block rounded-xl border border-amber-500/40 bg-amber-950/30 px-3 py-2 text-center text-xs text-amber-100"
                >
                  Chat con soporte (admin)
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
