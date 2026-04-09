import { redirect } from "next/navigation";

import { SellTicketForm } from "@/components/sell-ticket-form";
import { auth } from "@/lib/auth";

export default async function NewTicketPage() {
  const session = await auth();
  if (!session?.user) redirect(`/login?callbackUrl=${encodeURIComponent("/sell/new")}`);

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur">
      <h2 className="mb-2 text-2xl font-semibold">Describe la cuenta que venderas</h2>
      <p className="mb-6 text-sm text-zinc-400">Ej: Cuenta Valorant con skins / cuenta Free Fire nivel alto</p>

      <SellTicketForm />
    </div>
  );
}
