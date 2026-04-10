"use server";



import { MessageThread, Role, TicketStatus } from "@/app/generated/prisma/enums";

import type { ActionResult } from "@/lib/action-result";

import { requireSessionUser } from "@/lib/auth";

import prisma from "@/lib/prisma";

import { pusherServer } from "@/lib/pusher";

import { revalidateTicketViews, ticketMediatePath, ticketPurchasePath } from "@/lib/ticket-routes";

import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";



export async function buyTicket(ticketId: string, formData: FormData): Promise<ActionResult> {

  const callback = String(formData.get("callbackUrl") ?? "").trim() || ticketPurchasePath(ticketId);

  const user = await requireSessionUser(callback);

  const currentUser = await prisma.user.findUnique({
    where: { id: user.id },
    select: { isActive: true, isBlocked: true },
  });
  if (!currentUser || !currentUser.isActive || currentUser.isBlocked) {
    return { ok: false, error: "Tu cuenta está bloqueada o desactivada." };
  }



  const current = await prisma.ticket.findUnique({ where: { id: ticketId } });

  if (!current) return { ok: false, error: "No encontramos ese ticket." };
  if (!current.isActive) return { ok: false, error: "Este ticket ya no está disponible." };

  if (current.status !== TicketStatus.AVAILABLE) {

    return { ok: false, error: "Este ticket ya no está disponible." };

  }

  if (current.sellerId === user.id) {

    return { ok: false, error: "No puedes comprar tu propio ticket." };

  }



  const updated = await prisma.ticket.updateMany({

    where: {

      id: ticketId,

      status: TicketStatus.AVAILABLE,

      sellerId: { not: user.id },

    },

    data: { status: TicketStatus.IN_PROGRESS, buyerId: user.id },

  });



  if (updated.count === 0) {

    const again = await prisma.ticket.findUnique({ where: { id: ticketId } });

    if (!again) return { ok: false, error: "No encontramos ese ticket." };

    if (again.sellerId === user.id) {

      return { ok: false, error: "No puedes comprar tu propio ticket." };

    }

    return { ok: false, error: "Este ticket ya no está disponible. Intenta de nuevo." };

  }



  await prisma.message.create({

    data: {

      text: "Sistema: ¡Compra iniciada! Gracias por tu interés. El ticket ahora está en proceso. No dudes en preguntarme cualquier duda o consulta por aquí, estoy para ayudarte.",

      isSystem: true,

      thread: MessageThread.BUYER_SIDE,

      senderId: current.sellerId,

      ticketId,

    },

  });



  revalidateTicketViews(ticketId);

  // return redirect(ticketPurchasePath(ticketId));

  return { ok: true }; // Devuelve éxito
}



export async function createTicket(formData: FormData): Promise<ActionResult> {

  const callback = String(formData.get("callbackUrl") ?? "").trim() || "/sell/new";

  const user = await requireSessionUser(callback);
  const currentUser = await prisma.user.findUnique({
    where: { id: user.id },
    select: { isActive: true, isBlocked: true },
  });
  if (!currentUser || !currentUser.isActive || currentUser.isBlocked) {
    return { ok: false, error: "Tu cuenta está bloqueada o desactivada." };
  }

  const title = String(formData.get("title") ?? "").trim();

  const description = String(formData.get("description") ?? "").trim();



  if (title.length < 4) {
    return { ok: false, error: "El título es demasiado corto (mín. 4 caracteres)." };
  }

  if (title.length > 120) {
    return { ok: false, error: "El título no puede superar los 100 caracteres." };
  }

  if (description.length > 180) {
    return { ok: false, error: "La descripción no puede superar los 120 caracteres." };
  }


  const code = await generateSequentialCode();

  const ticket = await prisma.ticket.create({

    data: {
      code,
      title,
      description: description || "",
      sellerId: user.id,
      status: TicketStatus.AVAILABLE,

    },

  });



  await prisma.message.create({

    data: {

      text: "System: Publicación lista. Usa «Chat con soporte» para hablar con el administrador.",

      isSystem: true,

      thread: MessageThread.SELLER_SIDE,

      senderId: user.id,

      ticketId: ticket.id,

    },

  });



  revalidateTicketViews(ticket.id);

  revalidatePath("/");

  revalidatePath("/my/sales");

  return redirect(`/tickets/${ticket.id}`);

}



export async function finalizePurchase(ticketId: string, _formData?: FormData): Promise<ActionResult> {

  const user = await requireSessionUser(ticketPurchasePath(ticketId));
  const currentUser = await prisma.user.findUnique({
    where: { id: user.id },
    select: { isActive: true, isBlocked: true },
  });
  if (!currentUser || !currentUser.isActive || currentUser.isBlocked) {
    return { ok: false, error: "Tu cuenta está bloqueada o desactivada." };
  }

  const ticket = await prisma.ticket.findUnique({ where: { id: ticketId } });

  if (!ticket || !ticket.isActive || ticket.buyerId !== user.id) {

    return { ok: false, error: "No tienes permiso para finalizar esta compra." };

  }



  await prisma.ticket.update({

    where: { id: ticketId },

    data: { status: TicketStatus.COMPLETED },

  });



  const message = await prisma.message.create({

    data: {

      text: "System: Purchase finalized by buyer.",

      isSystem: true,

      thread: MessageThread.BUYER_SIDE,

      senderId: user.id,

      ticketId,

    },

    include: { sender: true },

  });



  await pusherServer.trigger(`private-ticket-${ticketId}`, "new-message", message);

  revalidateTicketViews(ticketId);

  return { ok: true };

}



export async function adminTicketAction(

  ticketId: string,

  action: "validate" | "release" | "forceFinalize" | "closeChat" | "deactivate",

  _formData?: FormData,

): Promise<ActionResult> {

  const user = await requireSessionUser(ticketMediatePath(ticketId));

  if (user.role !== Role.ADMIN) {

    return { ok: false, error: "Solo administradores pueden usar esta acción." };

  }



  const ticket = await prisma.ticket.findUnique({ where: { id: ticketId } });

  if (!ticket) return { ok: false, error: "Ticket no encontrado." };



  if (action === "release" || action === "closeChat") {

    await prisma.ticket.update({

      where: { id: ticketId },

      data: { status: TicketStatus.AVAILABLE, buyerId: null },

    });

  }



  if (action === "forceFinalize") {

    await prisma.ticket.update({

      where: { id: ticketId },

      data: { status: TicketStatus.COMPLETED },

    });

  }

  if (action === "deactivate") {
    await prisma.ticket.update({
      where: { id: ticketId },
      data: { isActive: false },
    });
    await prisma.message.updateMany({
      where: { ticketId, isActive: true },
      data: { isActive: false },
    });
  }



  const label: Record<typeof action, string> = {

    validate: "Admin validated payment.",

    release: "Admin released ticket and reset to AVAILABLE.",

    forceFinalize: "Admin forced ticket COMPLETED.",

    closeChat: "Admin closed chat and reset ticket.",
    deactivate: "Admin deactivated ticket (soft delete).",

  };



  const message = await prisma.message.create({

    data: {

      text: `System: ${label[action]}`,

      isSystem: true,

      thread: MessageThread.BUYER_SIDE,

      senderId: user.id,

      ticketId,

    },

    include: { sender: true },

  });



  await pusherServer.trigger(`private-ticket-${ticketId}`, "new-message", message);

  revalidateTicketViews(ticketId);

  return { ok: true };

}

async function generateSequentialCode() {
  const last = await prisma.ticket.findFirst({
    orderBy: { createdAt: "desc" },
    select: { code: true },
  });

  let nextNumber = 1;

  if (last?.code) {
    const lastNumber = parseInt(last.code.replace("#VAL-", ""), 10);
    nextNumber = lastNumber + 1;
  }

  return `#VAL-${String(nextNumber).padStart(5, "0")}`;
}