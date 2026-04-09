"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

import { safeCallbackUrl } from "@/lib/callback-url";
import { Button } from "@/components/ui/button";

export function LoginForm({ initialCallbackUrl }: { initialCallbackUrl: string }) {
  const callbackUrl = safeCallbackUrl(initialCallbackUrl, "/");

  return (
    <div className="mx-auto w-full max-w-md space-y-6 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 text-white backdrop-blur">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Iniciar sesión</h1>
        <p className="text-sm text-zinc-400">Usa tu cuenta de Google para comprar o vender tickets.</p>
      </div>

      <Button
        type="button"
        className="w-full cursor-pointer rounded-2xl bg-white py-6 text-base font-medium text-black hover:bg-zinc-100"
        onClick={() => signIn("google", { callbackUrl })}
      >
        Continuar con Google
      </Button>

      <p className="text-center text-xs text-zinc-500">
        Al continuar, aceptas el uso de tu cuenta según las políticas de Google.
      </p>

      <div className="text-center">
        <Link href="/" className="text-sm text-zinc-400 underline-offset-4 hover:text-white hover:underline">
          Volver al marketplace
        </Link>
      </div>
    </div>
  );
}
