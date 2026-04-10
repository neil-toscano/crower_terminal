"use server";

import type { ActionResult } from "@/lib/action-result";
import { requireSessionUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";
import { enforceRateLimit } from "@/lib/rate-limit";

const MAX_LEN = 350;
const LOUNGE_RATE_LIMIT_MAX_HITS = 6;
const LOUNGE_RATE_LIMIT_WINDOW_MS = 10_000;

export async function sendLoungeMessage(text: string): Promise<ActionResult> {
  const sessionUser = await requireSessionUser("/lounge");
  const dbUser = await prisma.user.findUnique({
    where: { id: sessionUser.id },
    select: { isActive: true, isBlocked: true },
  });
  if (!dbUser || !dbUser.isActive || dbUser.isBlocked) {
    return { ok: false, error: "Tu cuenta está bloqueada o desactivada." };
  }

  const clean = text.trim();
  if (!clean) return { ok: true };
  if (clean.length > MAX_LEN) {
    return { ok: false, error: `Máximo ${MAX_LEN} caracteres.` };
  }

  const rateLimit = await enforceRateLimit({
    maxHits: LOUNGE_RATE_LIMIT_MAX_HITS,
    windowMs: LOUNGE_RATE_LIMIT_WINDOW_MS,
    countHitsSince: (since) =>
      prisma.loungeMessage.count({
        where: {
          senderId: sessionUser.id,
          createdAt: { gte: since },
        },
      }),
    message: "Estás enviando mensajes muy rápido. Intenta nuevamente en unos segundos.",
  });
  if (!rateLimit.ok) {
    return { ok: false, error: rateLimit.error };
  }

  const message = await prisma.loungeMessage.create({
    data: { text: clean, senderId: sessionUser.id },
    include: { sender: true },
  });

  const user = message.sender;
  await pusherServer.trigger("lounge", "new-message", {
    id: message.id,
    text: message.text,
    createdAt: message.createdAt.toISOString(),
    sender: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });

  return { ok: true };
}
