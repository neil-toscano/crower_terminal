"use client";

import Link from "next/link";
import { useTransition } from "react";

export function ChatLink({ href }: { href: string }) {
    const [isPending, startTransition] = useTransition();

    return (
        <Link
            href={href}
            onClick={() => startTransition(() => { })}
            className="flex items-center gap-1.5 rounded-xl border border-zinc-700 px-3 py-2 text-xs disabled:opacity-60"
        >
            {isPending ? (
                <>
                    <span className="h-3 w-3 animate-spin rounded-full border-2 border-zinc-400 border-t-transparent" />
                    Cargando...
                </>
            ) : (
                "Chat"
            )}
        </Link>
    );
}