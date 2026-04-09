import { getTickets } from "@/actions";
import TicketSearch from "@/components/ticket/search/ticket-search";

export default async function Page() {
  const tickets = await getTickets();

  return (
    <div className="px-1 py-1 text-white">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-4">
          <h2 className="text-xl font-semibold text-zinc-100">
            Marketplace de Tickets
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Compra segura por código. Sin precios públicos.
          </p>
        </header>

        <TicketSearch tickets={tickets} />
      </div>
    </div>
  );
}