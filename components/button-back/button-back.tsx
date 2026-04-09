"use client";

import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft } from "@hugeicons/core-free-icons";

interface BackButtonProps {
    label?: string;
}

export function BackButton({ label = "Volver" }: BackButtonProps) {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="inline-flex items-center px-3 py-1 rounded-md bg-zinc-700/30 text-zinc-200 hover:bg-zinc-700/50 transition-colors cursor-pointer border-none"
            aria-label={label}
        >
            <HugeiconsIcon icon={ArrowLeft} className="h-6 w-6 mr-2" />
            <span>{label}</span>
        </button>
    );
}