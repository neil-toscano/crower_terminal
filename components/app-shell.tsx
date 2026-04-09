"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import { Role } from "@/app/generated/prisma/enums";
import { AuthButtons } from "@/components/auth-buttons";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const userNavLinks: { href: string; label: string }[] = [
  { href: "/sell/new", label: "Publicar aviso" },
  { href: "/my/purchases", label: "Mis compras" },
  { href: "/my/sales", label: "Ver mis publicaciones" },
];

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block rounded-xl border px-3.5 py-2.5 text-[0.9375rem] font-medium leading-snug tracking-tight backdrop-blur-md transition ${active
        ? "border-emerald-400/35 bg-emerald-500/[0.12] text-emerald-50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(16,185,129,0.15)]"
        : "border-white/[0.06] bg-white/[0.03] text-zinc-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] hover:border-white/[0.1] hover:bg-white/[0.07] hover:text-white"
        }`}
    >
      {label}
    </Link>
  );
}

function NavLinkLocked({ label }: { label: string }) {
  return (
    <div
      aria-disabled="true"
      title="Inicia sesión para usar esta acción"
      className="flex cursor-not-allowed items-center gap-2.5 rounded-xl border border-white/[0.1] bg-white/[0.04] px-3.5 py-2.5 text-[0.9375rem] font-medium leading-snug tracking-tight text-zinc-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md select-none"
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-white/10 bg-black/20 text-zinc-500">
        <svg
          className="h-3 w-3 opacity-70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </span>
      <span className="min-w-0">{label}</span>
    </div>
  );
}

function SidebarContent({
  session,
  pathname,
  onNavigate,
}: {
  session: ReturnType<typeof useSession>["data"];
  pathname: string;
  onNavigate?: () => void;
}) {
  const isAdmin = session?.user?.role === Role.ADMIN;
  const marketplaceActive = pathname === "/";

  return (
    <>
      <div className="mb-8 flex flex-col items-center justify-center">
        <p className="text-[1rem] font-semibold uppercase tracking-[0.2em] text-emerald-500/90">ZEROX I.N.C</p>
        <h1 className="mt-0.5 bg-gradient-to-r from-zinc-100 via-white to-zinc-400 bg-clip-text text-center text-lg font-semibold leading-none tracking-tight text-transparent">
          Intercambio seguro para gamers
        </h1>
      </div>

      <nav className="space-y-1.5">
        <NavLink href="/" label="Marketplace" active={marketplaceActive} onClick={onNavigate} />
      </nav>

      <div className="my-5 flex flex-col items-center">
        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-zinc-600/50 to-transparent"
          role="separator"
          aria-hidden
        />
        <span className="mt-1 text-[0.875rem] font-medium text-zinc-400">
          Inicia sesión
        </span>
      </div>

      <div className="min-h-0 flex-1">
        <div className="space-y-1.5">
          {session?.user ? (
            <>
              {isAdmin && (
                <NavLink href="/admin" label="Panel admin" active={pathname === "/admin"} onClick={onNavigate} />
              )}
              {userNavLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={pathname === link.href}
                  onClick={onNavigate}
                />
              ))}
            </>
          ) : (
            <>
              {userNavLinks.map((link) => (
                <NavLinkLocked key={link.href} label={link.label} />
              ))}
            </>
          )}
        </div>
      </div>

      <div
        className="mt-auto border-t border-white/[0.06] pt-4"
        role="region"
        aria-label="Cuenta"
      >
        <p className="mb-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-600">Cuenta</p>
        {session?.user ? (
          <div className="flex gap-2.5 rounded-xl border border-white/[0.06] bg-black/30 p-2.5">
            {session.user.image ? (
              <Image
                src={session.user.image}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-emerald-500/20"
              />
            ) : (
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600/90 to-teal-800 text-sm font-bold text-white ring-2 ring-white/10">
                {(session.user.name?.trim() || session.user.email || "?").slice(0, 1).toUpperCase()}
              </div>
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate text-[0.9375rem] font-medium text-zinc-100">
                {session.user.name?.trim() || "Sin nombre"}
              </p>
              <p className="truncate text-xs text-zinc-500">{session.user.email}</p>
              <span
                className={`mt-1 inline-block rounded-md px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide ${session.user.role === Role.ADMIN
                  ? "bg-violet-500/20 text-violet-200 ring-1 ring-violet-500/30"
                  : "bg-zinc-700/50 text-zinc-300 ring-1 ring-white/5"
                  }`}
              >
                {session.user.role === Role.ADMIN ? "Admin" : "Usuario"}
              </span>
            </div>
          </div>
        ) : (
          <p className="text-[0.8125rem] text-zinc-500">Sin sesión activa</p>
        )}
      </div>
    </>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#09090b] text-zinc-100">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(16,185,129,0.09),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_70%_45%_at_100%_100%,rgba(99,102,241,0.06),transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-3 py-4 md:grid-cols-[272px_1fr] md:items-start">
        <aside className="hidden min-h-[calc(100dvh-2rem)] flex-col rounded-2xl border border-white/[0.07] bg-zinc-950/75 p-4 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.04] backdrop-blur-xl md:sticky md:top-4 md:flex">
          <SidebarContent session={session} pathname={pathname} />
        </aside>

        <main className="min-w-0">
          <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/[0.07] bg-zinc-950/60 px-4 py-3 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.04] backdrop-blur-md">
            <Dialog open={mobileSidebarOpen} onOpenChange={setMobileSidebarOpen}>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 rounded-2xl border border-white/[0.08] bg-black/35 text-zinc-200 ring-1 ring-white/[0.04] hover:bg-black/60 md:hidden"
                  aria-label="Abrir menú lateral"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </Button>
              </DialogTrigger>
              <DialogContent
                showCloseButton={false}
                className="left-0 top-0 h-dvh w-[86vw] max-w-[320px] translate-x-0 translate-y-0 rounded-none border-r border-white/[0.1] bg-zinc-950 p-4 text-zinc-100 ring-0 data-open:zoom-in-100 data-closed:zoom-out-100 md:hidden"
              >
                <button
                  type="button"
                  onClick={() => setMobileSidebarOpen(false)}
                  className="absolute mt-1 mr-1 right-4 top-4 z-20 rounded-lg bg-zinc-800/70 px-3 py-1 text-lg font-bold text-zinc-200 hover:bg-zinc-800/90"
                  aria-label="Cerrar menú lateral"
                >
                  X
                </button>
                <DialogTitle className="sr-only">Menú de navegación</DialogTitle>
                <aside className="flex h-full min-h-0 flex-col rounded-2xl border border-white/[0.07] bg-zinc-950/75 p-4 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.04] backdrop-blur-xl">
                  <SidebarContent session={session} pathname={pathname} onNavigate={() => setMobileSidebarOpen(false)} />
                </aside>
              </DialogContent>
            </Dialog>
            <AuthButtons />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
