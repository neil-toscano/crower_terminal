"use client";

import { createTicket } from "@/actions/tickets";
import { toast } from "sonner";
import { useTransition } from "react";

export function SellTicketForm() {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={(formData) => {
        startTransition(async () => {
          const result = await createTicket(formData);
          if (!result.ok) toast.error(result.error);
        });
      }}
      className="space-y-4"
    >
      <input type="hidden" name="callbackUrl" value="/sell/new" />
      <div>
        <label htmlFor="title" className="mb-2 block text-sm text-zinc-300">
          Describe lo que vas a vender*
        </label>
        <input
          id="title"
          name="title"
          required
          minLength={4}
          placeholder="Ej: Cuenta Valorant con skins"
          className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-sm outline-none"
        />
      </div>
      <div>
        <label htmlFor="description" className="mb-2 block text-sm text-zinc-300">
          Descripción (opcional)
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          placeholder="Agrega más detalles si deseas..."
          className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-sm outline-none resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black disabled:opacity-60"
      >
        {isPending ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
            Publicando...
          </>
        ) : (
          "Publicar ahora"
        )}
      </button>
    </form>
  );
}