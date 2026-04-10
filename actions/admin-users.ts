"use server";

import { Role } from "@/app/generated/prisma/enums";
import type { ActionResult } from "@/lib/action-result";
import { requireSessionUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function revalidateAfterUserChange() {
  revalidatePath("/");
  revalidatePath("/lounge");
  revalidatePath("/admin");
  revalidatePath("/admin/users");
}

export async function getUsersForAdmin() {
  const sessionUser = await requireSessionUser("/admin/users");
  if (sessionUser.role !== Role.ADMIN) return [];

  return prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      isActive: true,
      isBlocked: true,
      createdAt: true,
      _count: {
        select: {
          ticketsSold: true,
          ticketsBought: true,
          messages: true,
          loungeMessages: true,
        },
      },
    },
  });
}

export async function updateUserModeration(
  userId: string,
  values: { isActive?: boolean; isBlocked?: boolean },
): Promise<ActionResult> {
  const sessionUser = await requireSessionUser("/admin/users");
  if (sessionUser.role !== Role.ADMIN) {
    return { ok: false, error: "Solo administradores." };
  }

  const target = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, role: true },
  });
  if (!target) return { ok: false, error: "Usuario no encontrado." };

  if (target.id === sessionUser.id && values.isActive === false) {
    return { ok: false, error: "No puedes desactivarte a ti mismo." };
  }

  await prisma.user.update({
    where: { id: userId },
    data: {
      isActive: values.isActive,
      isBlocked: values.isBlocked,
    },
  });

  if (values.isBlocked === true || values.isActive === false) {
    await prisma.message.updateMany({
      where: { senderId: userId, isActive: true },
      data: { isActive: false },
    });
    await prisma.loungeMessage.updateMany({
      where: { senderId: userId, isActive: true },
      data: { isActive: false },
    });
  }

  revalidateAfterUserChange();
  return { ok: true };
}
