"use client";

import { useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { HugeiconsIcon } from '@hugeicons/react';
import { Payment01FreeIcons } from '@hugeicons/core-free-icons';
import { PaymentQR } from "./payment-qr";

export function FloatingPayButton() {
    const [dismissed, setDismissed] = useState(false);
    const [open, setOpen] = useState(false);
    const [iconHidden, setIconHidden] = useState(false);

    if (dismissed) return null;

    return (
        <div className="fixed bottom-6 right-6 md:hidden z-50">
            <Sheet open={open} onOpenChange={setOpen}>
                <div className="relative">
                    <button
                        onClick={() => setIconHidden(true)}
                        className="absolute -top-2 -right-1 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-700 text-white text-[10px] hover:bg-zinc-600"
                    >
                        ✕
                    </button>

                    <SheetTrigger asChild>
                        <button className={`flex flex-col items-center justify-center rounded-full bg-[#5C00B2] text-white shadow-lg shadow-purple-900/20 hover:scale-105 transition-all active:scale-95 ${iconHidden ? "h-10 w-10" : "h-20 w-14"
                            }`}>
                            {!iconHidden && (
                                <HugeiconsIcon icon={Payment01FreeIcons} size={18} color="currentColor" strokeWidth={1.5} />
                            )}
                            <span className="text-xs">Pagar</span>
                        </button>
                    </SheetTrigger>
                </div>

                <SheetContent showCloseButton={false} side="bottom" className="bg-zinc-950 border-zinc-800 rounded-t-[32px] p-6 h-auto">
                    <SheetHeader>

                        <div className="relative flex items-center justify-center mb-4">
                            <div className="h-1.5 w-12 rounded-full bg-zinc-700" />
                            <SheetClose asChild>
                                <button className="absolute right-0 text-white text-xl p-2">✕</button>
                            </SheetClose>
                        </div>
                        <SheetTitle className="text-xl font-bold mb-4 text-center text-white">Escanea para pagar</SheetTitle>
                    </SheetHeader>

                    <PaymentQR />
                </SheetContent>
            </Sheet>
        </div>
    );
}