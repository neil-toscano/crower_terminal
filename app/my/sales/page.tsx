import Link from "next/link";
import { redirect } from "next/navigation";

import { getTicketsBySellerId } from "@/actions/ticket/get-tickets-by-seller-id";
import { auth } from "@/lib/auth";
import { ticketSellerChatPath } from "@/lib/ticket-routes";

export default async function MySalesPage() {
  const session = await auth();
  if (!session?.user) redirect(`/login?callbackUrl=${encodeURIComponent("/my/sales")}`);

  const tickets = await getTicketsBySellerId(session.user.id);

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
      <h2 className="mb-4 text-2xl font-semibold">Mis tickets publicados</h2>
      <div className="space-y-3">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="flex items-center justify-between rounded-2xl border border-zinc-800 p-3">
            <div>
              <p className="text-sm text-zinc-400">{ticket.code}</p>
              <p>{ticket.title}</p>
              <p className="text-xs text-zinc-500">Estado: {ticket.status}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href={`/tickets/${ticket.id}`} className="rounded-xl border border-zinc-700 px-3 py-2 text-xs">
                Ver detalle
              </Link>
              <Link
                href={ticketSellerChatPath(ticket.id)}
                className="rounded-xl border border-amber-600/40 bg-amber-950/25 px-3 py-2 text-xs text-amber-100"
              >
                Chat
              </Link>
            </div>
          </div>
        ))}
        {tickets.length === 0 && <p className="text-sm text-zinc-400">No has publicado tickets aun.</p>}
      </div>
    </div>
  );
}
