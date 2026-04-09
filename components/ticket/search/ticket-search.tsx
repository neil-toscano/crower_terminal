"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

import { TicketStatus } from "@/app/generated/prisma/enums";
import { BuyTicketForm } from "@/components/buy-ticket-form";

function badgeClass(status: TicketStatus) {
    if (status === TicketStatus.AVAILABLE) return "bg-emerald-500/20 text-emerald-300";
    if (status === TicketStatus.IN_PROGRESS) return "bg-orange-500/20 text-orange-300 relative";  // Añadido `relative` para el punto
    return "bg-zinc-600/30 text-zinc-300";
}

export default function TicketSearch({ tickets }: any) {
    const [search, setSearch] = useState("");

    const filteredTickets = useMemo(() => {
        return tickets.filter((ticket: any) =>
            ticket.code.toLowerCase().includes(search.toLowerCase()) ||
            ticket.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, tickets]);

    return (
        <>
            {/* SEARCH */}
            <div className="mb-8 mt-8 relative w-full max-w-sm">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar (#A51 o nombre)"
                    className="w-full border-2 rounded-xl bg-zinc-900/60 px-4 py-2.5 pr-10 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:ring-1 focus:ring-zinc-600 transition-all"
                />

                {search && (
                    <button
                        onClick={() => setSearch("")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-1.5 py-0.5 text-xs text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                        ✕
                    </button>
                )}
            </div>

            {/* LIST */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredTickets.map((ticket: any) => (
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
                            {ticket.status}

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
        </>
    );
}