"use client";

import { buyTicket } from "@/actions/tickets";
import { TicketStatus } from "@/app/generated/prisma/enums";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export function BuyTicketForm({ ticketId, status }: { ticketId: string; status: TicketStatus }) {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  const available = status === TicketStatus.AVAILABLE;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleTriggerClick() {
    console.log(session, 'sesion');
    if (sessionStatus === "loading") return;
    if (!session?.user) {
      router.push(`/login?callbackUrl=/`);
      return;
    }
    setOpen(true);
  }

  async function handleConfirm() {
    setLoading(true);
    const formData = new FormData();
    formData.append("callbackUrl", `/tickets/${ticketId}/purchase`);

    const result = await buyTicket(ticketId, formData);

    if (!result.ok) {
      setLoading(false);
      toast.error(result.error);
    } else {
      toast.success("¡Listo! El chat ya está disponible para concretar tu adquisición.", {
        duration: 7000,
      });
      setOpen(false);
      router.push(`/tickets/${ticketId}/purchase`);
      router.refresh();
    }
  }

  return (
    <>
      <button
        type="button"
        disabled={!available}
        onClick={handleTriggerClick}
        className="rounded-xl cursor-pointer bg-white px-3 py-2 text-xs text-black disabled:opacity-40"
      >
        ADQUIRIR
      </button>

      <Dialog open={open} onOpenChange={(val) => !loading && setOpen(val)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>¿Seguro que deseas adquirir este ticket?</DialogTitle>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" disabled={loading}>Cancelar</Button>
            </DialogClose>
            <Button onClick={handleConfirm} disabled={loading}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Procesando...
                </span>
              ) : (
                "Confirmar"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}