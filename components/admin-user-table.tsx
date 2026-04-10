"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

import { updateUserModeration } from "@/actions/admin-users";
import { Role } from "@/app/generated/prisma/enums";

type AdminUserItem = {
  id: string;
  email: string;
  name: string | null;
  role: Role;
  isActive: boolean;
  isBlocked: boolean;
  createdAt: Date;
  _count: {
    ticketsSold: number;
    ticketsBought: number;
    messages: number;
    loungeMessages: number;
  };
};

export function AdminUserTable({ users }: { users: AdminUserItem[] }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onToggleBlocked = (userId: string, value: boolean) => {
    startTransition(async () => {
      const result = await updateUserModeration(userId, { isBlocked: value });
      if (!result.ok) {
        toast.error(result.error);
        return;
      }
      toast.success(value ? "Usuario bloqueado." : "Usuario desbloqueado.");
      router.refresh();
    });
  };

  const onToggleActive = (userId: string, value: boolean) => {
    startTransition(async () => {
      const result = await updateUserModeration(userId, { isActive: value });
      if (!result.ok) {
        toast.error(result.error);
        return;
      }
      toast.success(value ? "Usuario activado." : "Usuario desactivado.");
      router.refresh();
    });
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40">
      <div className="border-b border-zinc-800 px-4 py-3 text-sm font-medium text-zinc-300">
        Usuarios ({users.length})
      </div>

      <div className="divide-y divide-zinc-800">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0 space-y-1">
              <p className="truncate font-medium text-zinc-100">{user.name || "Sin nombre"}</p>
              <p className="truncate text-xs text-zinc-500">{user.email}</p>
              <p className="text-xs text-zinc-500">
                Rol: {user.role} · Tickets: {user._count.ticketsSold} · Compras: {user._count.ticketsBought}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  user.isActive ? "bg-emerald-500/20 text-emerald-300" : "bg-zinc-600/30 text-zinc-300"
                }`}
              >
                {user.isActive ? "Activo" : "Desactivado"}
              </span>

              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  user.isBlocked ? "bg-red-500/20 text-red-300" : "bg-zinc-600/30 text-zinc-300"
                }`}
              >
                {user.isBlocked ? "Bloqueado" : "No bloqueado"}
              </span>

              <button
                type="button"
                disabled={pending}
                onClick={() => onToggleBlocked(user.id, !user.isBlocked)}
                className="rounded-xl border border-zinc-700 px-3 py-2 text-xs hover:bg-zinc-800 disabled:opacity-50"
              >
                {user.isBlocked ? "Desbloquear" : "Bloquear"}
              </button>

              <button
                type="button"
                disabled={pending}
                onClick={() => onToggleActive(user.id, !user.isActive)}
                className="rounded-xl border border-zinc-700 px-3 py-2 text-xs hover:bg-zinc-800 disabled:opacity-50"
              >
                {user.isActive ? "Desactivar" : "Activar"}
              </button>
            </div>
          </div>
        ))}

        {users.length === 0 && <p className="px-4 py-8 text-center text-sm text-zinc-400">No hay usuarios.</p>}
      </div>
    </div>
  );
}
