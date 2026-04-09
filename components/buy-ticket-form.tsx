"use client";

import { buyTicket } from "@/actions/tickets";
import { TicketStatus } from "@/app/generated/prisma/enums";
import { toast } from "sonner";

export function BuyTicketForm({ ticketId, status }: { ticketId: string; status: TicketStatus }) {
  const available = status === TicketStatus.AVAILABLE;

  return (
    <form
      action={async (formData) => {
        const result = await buyTicket(ticketId, formData);
        if (!result.ok) toast.error(result.error);
      }}
    >
      <input type="hidden" name="callbackUrl" value={`/tickets/${ticketId}/purchase`} />
      <button
        type="submit"
        disabled={!available}
        className="rounded-xl cursor-pointer bg-white px-3 py-2 text-xs text-black disabled:opacity-40"
      >
        BUY
      </button>
    </form>
  );
}
