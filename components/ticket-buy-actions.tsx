"use client";

import { adminTicketAction, finalizePurchase } from "@/actions/tickets";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function FinalizePurchaseForm({ ticketId }: { ticketId: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Estado para controlar el loading

  const handleFinalize = async () => {
    setLoading(true); // Activa el loading al empezar el proceso
    const result = await finalizePurchase(ticketId, new FormData());
    if (!result.ok) {
      toast.error(result.error);
      setLoading(false); // Desactiva el loading si hubo error
      return;
    }
    toast.success("Compra marcada como finalizada.");
    router.refresh();
    setOpen(false);
    setLoading(false); // Desactiva el loading cuando la compra es finalizada
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="shrink-0 cursor-pointer rounded-2xl 
             bg-gradient-to-r from-rose-500 via-red-400/40 to-transparent 
             bg-[length:200%_100%] bg-left hover:bg-right 
             text-white text-[0.9375rem] font-semibold 
             shadow-[0_0_10px_rgba(244,63,94,0.4)] 
             transition-all duration-500 px-4 py-2"
          disabled={loading} // Desactiva el botón cuando está cargando
        >
          {loading ? (
            <span className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
              <span>Finalizando...</span>
            </span>
          ) : (
            "Dar por finalizada la compra"
          )}
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-zinc-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Confirmar finalización</DialogTitle>
          <DialogDescription className="text-base text-gray-700 mt-1">
            ¿Confirmas que todo está correcto y la compra puede darse por finalizada?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex gap-2 justify-end">
          <Button className="cursor-pointer" variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button className="cursor-pointer" onClick={handleFinalize} disabled={loading}>
            Sí, finalizar compra
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

type AdminAction = "validate" | "release" | "forceFinalize" | "closeChat";

const adminLabels: Record<AdminAction, string> = {
  validate: "Validate Payment",
  release: "Release Ticket",
  forceFinalize: "Force Finalize",
  closeChat: "Close Chat",
};

export function AdminTicketActions({ ticketId }: { ticketId: string }) {
  const router = useRouter();

  return (
    <div className="grid gap-2 md:grid-cols-2">
      {(Object.keys(adminLabels) as AdminAction[]).map((action) => (
        <form
          key={action}
          action={async (formData) => {
            const result = await adminTicketAction(ticketId, action, formData);
            if (!result.ok) {
              toast.error(result.error);
              return;
            }
            toast.success("Acción aplicada.");
            router.refresh();
          }}
        >
          <button
            type="submit"
            className="w-full rounded-xl border border-zinc-700 px-3 py-2 text-sm"
          >
            {adminLabels[action]}
          </button>
        </form>
      ))}
    </div>
  );
}