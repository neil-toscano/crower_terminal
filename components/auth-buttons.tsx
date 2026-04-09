"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

import { Role } from "@/app/generated/prisma/enums";
import { Button } from "@/components/ui/button";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
} from "@/components/ui/menubar";

// Hugel Icons
import { HugeiconsIcon } from "@hugeicons/react";
import { UserIcon } from "@hugeicons/core-free-icons";

export function AuthButtons() {
  const { data: session } = useSession();

  if (!session?.user) {
    return (
      <>
        <Button
          className="rounded-2xl ml-auto cursor-pointer bg-gradient-to-r from-emerald-500 via-emerald-500/40 to-sky-400/20 text-white font-semibold text-[0.95rem] shadow-md hover:opacity-90 transition-all"
          onClick={() => signIn("google")}
        >
          Iniciar sesión
        </Button>
      </>

    );
  }

  const { user } = session;
  const displayName = user.name?.trim() || user.email || "Usuario";
  const isAdmin = user.role === Role.ADMIN;

  return (
    <div className="flex items-center gap-3 ml-auto">
      {/* MENUBAR */}
      <Menubar className="border-none bg-transparent p-0">
        <MenubarMenu>
          {/* ICONO COMO TRIGGER */}
          <MenubarTrigger className="p-0 bg-transparent hover:bg-transparent focus:bg-transparent">
            <div className="flex items-center justify-center rounded-2xl border border-white/[0.08] bg-black/35 p-2 ring-1 ring-white/[0.04] cursor-pointer">
              <HugeiconsIcon
                icon={UserIcon}
                className="h-5 w-5 text-zinc-300"
              />
            </div>
          </MenubarTrigger>

          {/* CONTENIDO (TU DISEÑO ORIGINAL) */}
          <MenubarContent className="p-0 border-none bg-transparent shadow-none">
            <div className="flex min-w-0 items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-black/90 py-1.5 pl-1.5 pr-3 ring-1 ring-white/[0.04] backdrop-blur-xl shadow-xl">
              {user.image ? (
                <Image
                  src={user.image}
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-emerald-500/25"
                />
              ) : (
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-teal-800 text-sm font-semibold text-white ring-2 ring-white/10">
                  {displayName.slice(0, 1).toUpperCase()}
                </div>
              )}
              <div className="min-w-0 text-left">
                <div className="truncate text-[0.9375rem] font-medium text-zinc-100">
                  {displayName}
                </div>
                {user.email && user.name ? (
                  <div className="truncate text-xs text-zinc-500">
                    {user.email}
                  </div>
                ) : null}
                <div className="mt-0.5 flex flex-wrap items-center gap-1.5">
                  <span
                    className={`inline-flex rounded-md px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide ${isAdmin
                      ? "bg-violet-500/20 text-violet-200 ring-1 ring-violet-500/30"
                      : "bg-zinc-700/50 text-zinc-300 ring-1 ring-white/5"
                      }`}
                  >
                    {isAdmin ? "Admin" : "Usuario"}
                  </span>
                </div>
              </div>
            </div>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      {/* BOTÓN SALIR (igual) */}
      <Button
        className="shrink-0 cursor-pointer ml-auto rounded-2xl bg-gradient-to-r from-rose-500 via-red-400/40 to-transparent bg-[length:200%_100%] bg-left hover:bg-right text-white text-[0.9375rem] font-semibold shadow-[0_0_10px_rgba(244,63,94,0.4)] transition-all duration-500"
        onClick={() => signOut()}
      >
        Cerrar sesión
      </Button>
    </div>
  );
}