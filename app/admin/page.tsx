import Link from "next/link";
import { redirect } from "next/navigation";

import { getTicketsForAdmin } from "@/actions/ticket/get-tickets-admin";
import { Role, TicketStatus } from "@/app/generated/prisma/enums";
import { auth } from "@/lib/auth";
import { ticketMediatePath } from "@/lib/ticket-routes";

function badgeClass(status: TicketStatus) {
  if (status === TicketStatus.AVAILABLE) return "bg-emerald-500/20 text-emerald-300";
  if (status === TicketStatus.IN_PROGRESS) return "animate-pulse bg-orange-500/20 text-orange-300";
  return "bg-zinc-600/30 text-zinc-300";
}

export default async function AdminPage() {
  const session = await auth();
  if (!session?.user) {
    redirect(`/login?callbackUrl=${encodeURIComponent("/admin")}`);
  }
  if (session.user.role !== Role.ADMIN) {
    redirect("/");
  }

  const tickets = await getTicketsForAdmin();

  return (
    <div className="space-y-6 text-white">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
        <h1 className="text-2xl font-semibold">Panel admin</h1>
        <p className="mt-2 text-sm text-zinc-400">
          Vista solo para administradores: revisa tickets, entra al detalle o al chat de compra para mediar pagos.
        </p>
        <p className="mt-2 text-xs text-zinc-500">
          El rol se asigna en base de datos (<code className="rounded bg-zinc-800 px-1">User.role = ADMIN</code>). El
          marketplace público sigue en{" "}
          <Link href="/" className="text-zinc-300 underline underline-offset-2 hover:text-white">
            Marketplace
          </Link>
          .
        </p>
        <div className="mt-4">
          <Link
            href="/admin/users"
            className="inline-flex rounded-xl border border-zinc-700 px-3 py-2 text-xs hover:bg-zinc-800"
          >
            Gestionar usuarios
          </Link>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40">
        <div className="border-b border-zinc-800 px-4 py-3 text-sm font-medium text-zinc-300">
          Tickets ({tickets.length})
        </div>
        <div className="divide-y divide-zinc-800">
          {tickets.map((t) => (
            <div key={t.id} className="flex flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
              <div className="min-w-0 space-y-1">
                <p className="text-sm text-zinc-400">{t.code}</p>
                <p className="font-medium">{t.title}</p>
                <p className="text-xs text-zinc-500">
                  Vendedor: {t.seller.email}
                  {t.buyer && ` · Comprador: ${t.buyer.email}`}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-3 py-1 text-xs ${badgeClass(t.status)}`}>{t.status}</span>
                <Link
                  href={`/tickets/${t.id}`}
                  className="rounded-xl border border-zinc-700 px-3 py-2 text-xs hover:bg-zinc-800"
                >
                  Detalle
                </Link>
                <Link
                  href={ticketMediatePath(t.id)}
                  className="rounded-xl bg-white px-3 py-2 text-xs text-black hover:bg-zinc-200"
                >
                  {t.status === TicketStatus.AVAILABLE ? "Chat vendedor" : "Mediar chats"}
                </Link>
              </div>
            </div>
          ))}
          {tickets.length === 0 && (
            <p className="px-4 py-8 text-center text-sm text-zinc-400">No hay tickets todavía.</p>
          )}
        </div>
      </div>
    </div>
  );
}
