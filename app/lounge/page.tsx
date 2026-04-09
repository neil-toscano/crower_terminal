import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

import { LoungeChatBox, type LoungeMessageItem } from "@/components/lounge-chat-box";

export default async function LoungePage() {
  const session = await auth();

  const rows = await prisma.loungeMessage.findMany({
    orderBy: { createdAt: "asc" },
    take: 200,
    include: {
      sender: { select: { id: true, name: true, email: true, role: true } },
    },
  });

  const initialMessages: LoungeMessageItem[] = rows.map((m) => ({
    id: m.id,
    text: m.text,
    createdAt: m.createdAt,
    sender: m.sender,
  }));

  return (
    <div className="px-2 py-2 text-white mb-10">
      <div className="mx-auto max-w-3xl space-y-4">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5">
          <h1 className="text-2xl font-semibold">Chat general</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Espacio abierto para la comunidad. Puedes leer libremente; para participar, inicia sesión.
            Mantengamos un ambiente respetuoso y agradable para todos.
          </p>
        </div>

        <LoungeChatBox
          initialMessages={initialMessages}
          readOnly={!session?.user}
          currentUserId={session?.user?.id ?? null}
        />
      </div>
    </div>
  );
}
