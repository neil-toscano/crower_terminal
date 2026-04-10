"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

import type { Ticket } from "@/app/generated/prisma/client";
import { getTicketsPage } from "@/actions";
import { TicketStatus } from "@/app/generated/prisma/enums";
import { BuyTicketForm } from "@/components/buy-ticket-form";
import { TicketStatusES } from "@/const";

function badgeClass(status: TicketStatus) {
    if (status === TicketStatus.AVAILABLE) return "bg-emerald-500/20 text-emerald-300";
    if (status === TicketStatus.IN_PROGRESS) return "bg-orange-500/20 text-orange-300 relative";
    return "bg-zinc-600/30 text-zinc-300";
}

type Props = {
    initialTickets: Ticket[];
    initialNextCursor: string | null;
};

export default function TicketSearch({ initialTickets, initialNextCursor }: Props) {
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
    const [nextCursor, setNextCursor] = useState<string | null>(initialNextCursor);
    const [loadingMore, setLoadingMore] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const sentinelRef = useRef<HTMLDivElement | null>(null);
    const skipFirstEmptySearchEffect = useRef(true);

    useEffect(() => {
        const t = setTimeout(() => setDebouncedSearch(search.trim()), 350);
        return () => clearTimeout(t);
    }, [search]);

    useEffect(() => {
        if (skipFirstEmptySearchEffect.current && debouncedSearch === "") {
            skipFirstEmptySearchEffect.current = false;
            return;
        }
        skipFirstEmptySearchEffect.current = false;

        let cancelled = false;
        (async () => {
            setRefreshing(true);
            try {
                const { tickets: rows, nextCursor: cursor } = await getTicketsPage({
                    search: debouncedSearch || undefined,
                });
                if (!cancelled) {
                    setTickets(rows);
                    setNextCursor(cursor);
                }
            } finally {
                if (!cancelled) setRefreshing(false);
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [debouncedSearch]);

    const loadMore = useCallback(async () => {
        if (!nextCursor || loadingMore || refreshing) return;
        setLoadingMore(true);
        try {
            const { tickets: rows, nextCursor: cursor } = await getTicketsPage({
                cursorId: nextCursor,
                search: debouncedSearch || undefined,
            });
            setTickets((prev) => [...prev, ...rows]);
            setNextCursor(cursor);
        } finally {
            setLoadingMore(false);
        }
    }, [nextCursor, loadingMore, refreshing, debouncedSearch]);

    const loadMoreRef = useRef(loadMore);
    loadMoreRef.current = loadMore;

    useEffect(() => {
        const el = sentinelRef.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting) void loadMoreRef.current();
            },
            { root: null, rootMargin: "240px", threshold: 0 }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [debouncedSearch, nextCursor]);

    return (
        <>
            <div className="mb-8 mt-8 relative w-full max-w-sm">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar por código (#VAL-001) o nombre.."
                    className="w-full border-2 rounded-xl bg-zinc-900/60 px-4 py-2.5 pr-10 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:ring-1 focus:ring-zinc-600 transition-all"
                />

                {search && (
                    <button
                        type="button"
                        onClick={() => setSearch("")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-1.5 py-0.5 text-xs text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                        X
                    </button>
                )}
            </div>

            <div className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3 ${refreshing ? "opacity-60 pointer-events-none" : ""}`}>
                {tickets.map((ticket) => (
                    <div
                        key={ticket.id}
                        className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4 backdrop-blur"
                    >
                        <div className="mb-2 flex items-center justify-between text-sm text-zinc-400">
                            <span>{ticket.code}</span>
                            <span className="text-xs text-zinc-500">
                                {new Date(ticket.createdAt).toLocaleString("es-PE", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </span>
                        </div>
                        <div className="mb-3 text-lg font-medium">{ticket.title}</div>
                        <span className={`rounded-full px-3 py-1 text-xs ${badgeClass(ticket.status)}`}>
                            {TicketStatusES[ticket.status as TicketStatus]}

                            {ticket.status === TicketStatus.IN_PROGRESS && (
                                <span className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-orange-500 animate-ping"></span>
                            )}
                        </span>
                        <div className="mt-4 flex gap-2">
                            <BuyTicketForm ticketId={ticket.id} status={ticket.status} />
                            <Link
                                href={`/tickets/${ticket.id}`}
                                className="rounded-xl border border-zinc-700 px-3 py-2 text-xs"
                            >
                                Ver detalle
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {refreshing && (
                <p className="mt-6 text-center text-sm text-zinc-500">Actualizando resultados…</p>
            )}

            {!refreshing && tickets.length === 0 && (
                <p className="mt-6 text-center text-sm text-zinc-400">No hay tickets que coincidan.</p>
            )}

            <div ref={sentinelRef} className="h-4 w-full shrink-0" aria-hidden />

            {loadingMore && (
                <p className="mt-4 text-center text-sm text-zinc-500">Cargando más…</p>
            )}

            {!nextCursor && !refreshing && tickets.length > 0 && (
                <p className="mt-4 text-center text-xs text-zinc-600">No hay más publicaciones.</p>
            )}
        </>
    );
}
