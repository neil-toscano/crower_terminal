"use server";

import type { ActionResult } from "@/lib/action-result";
import { requireSessionUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";

const MAX_LEN = 350;

export async function sendLoungeMessage(text: string): Promise<ActionResult> {
  const sessionUser = await requireSessionUser("/lounge");

  const clean = text.trim();
  if (!clean) return { ok: true };
  if (clean.length > MAX_LEN) {
    return { ok: false, error: `Máximo ${MAX_LEN} caracteres.` };
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
