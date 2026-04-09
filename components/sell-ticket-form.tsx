"use client";

import { createTicket } from "@/actions/tickets";
import { toast } from "sonner";

export function SellTicketForm() {
  return (
    <form
      action={async (formData) => {
        const result = await createTicket(formData);
        if (!result.ok) toast.error(result.error);
      }}
      className="space-y-4"
    >
      <input type="hidden" name="callbackUrl" value="/sell/new" />
      <div>
        <label htmlFor="title" className="mb-2 block text-sm text-zinc-300">
          Titulo del ticket
        </label>
        <input
          id="title"
          name="title"
          required
          minLength={4}
          placeholder="Ej: Valorant Account Full Skins"
          className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-sm outline-none"
        />
      </div>
      <div>
        <label htmlFor="sellerPhone" className="mb-2 block text-sm text-zinc-300">
          Celular del vendedor
        </label>
        <input
          id="sellerPhone"
          name="sellerPhone"
          required
          minLength={7}
          placeholder="Ej: 999888777"
          className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-sm outline-none"
        />
      </div>
      <button type="submit" className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black">
        Publicar ahora
      </button>
    </form>
  );
}
