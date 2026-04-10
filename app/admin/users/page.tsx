import Link from "next/link";
import { redirect } from "next/navigation";

import { getUsersForAdmin } from "@/actions/admin-users";
import { Role } from "@/app/generated/prisma/enums";
import { AdminUserTable } from "@/components/admin-user-table";
import { auth } from "@/lib/auth";

export default async function AdminUsersPage() {
  const session = await auth();
  if (!session?.user) {
    redirect(`/login?callbackUrl=${encodeURIComponent("/admin/users")}`);
  }
  if (session.user.role !== Role.ADMIN) {
    redirect("/");
  }

  const users = await getUsersForAdmin();

  return (
    <div className="space-y-6 text-white">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
        <h1 className="text-2xl font-semibold">Gestionar usuarios</h1>
        <p className="mt-2 text-sm text-zinc-400">
          Desde aquí puedes bloquear o desactivar usuarios. Si bloqueas o desactivas, sus mensajes se ocultan del chat.
        </p>
        <div className="mt-4">
          <Link href="/admin" className="inline-flex rounded-xl border border-zinc-700 px-3 py-2 text-xs hover:bg-zinc-800">
            Volver al panel admin
          </Link>
        </div>
      </div>

      <AdminUserTable users={users} />
    </div>
  );
}
