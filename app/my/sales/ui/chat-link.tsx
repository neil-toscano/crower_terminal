"use client";

import Link from "next/link";
import { useTransition } from "react";

type Variant = "default" | "amber";

const styles: Record<Variant, string> = {
    default: "border-zinc-700 text-zinc-100",
    amber: "border-amber-600/40 bg-amber-950/25 text-amber-100",
};

export function ChatLink({ href, variant = "default", label = "Chat" }: { href: string; variant?: Variant, label?: string }) {
    const [isPending, startTransition] = useTransition();

    return (
        <Link
            href={href}
            onClick={() => startTransition(() => { })}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs ${styles[variant]}`}
        >
            {isPending ? (
                <>
                    <span className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Cargando...
                </>
            ) : (
                label
            )}
        </Link>
    );
}