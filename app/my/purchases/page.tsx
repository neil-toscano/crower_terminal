import Link from "next/link";
import { redirect } from "next/navigation";

import { getTicketsByBuyerId } from "@/actions/ticket/get-tickets-by-buyer-id";
import { auth } from "@/lib/auth";
import { ticketPurchasePath } from "@/lib/ticket-routes";

export default async function MyPurchasesPage() {
  const session = await auth();
  if (!session?.user) redirect(`/login?callbackUrl=${encodeURIComponent("/my/purchases")}`);

  const tickets = await getTicketsByBuyerId(session.user.id);

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
      <h2 className="mb-4 text-2xl font-semibold">Mis compras</h2>
      <div className="space-y-3">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="flex items-center justify-between rounded-2xl border border-zinc-800 p-3">
            <div>
              <p className="text-sm text-zinc-400">{ticket.code}</p>
              <p>{ticket.title}</p>
            </div>
            <Link
              href={ticketPurchasePath(ticket.id)}
              className="rounded-xl border border-zinc-700 px-3 py-2 text-xs"
            >
              Ver chat
            </Link>
          </div>
        ))}
        {tickets.length === 0 && <p className="text-sm text-zinc-400">Aun no tienes compras.</p>}
      </div>
    </div>
  );
}
