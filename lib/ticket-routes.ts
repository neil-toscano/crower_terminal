import { revalidatePath } from "next/cache";

/** Vista del comprador: pago (QR) + chat + finalizar compra. */
export function ticketPurchasePath(ticketId: string) {
  return `/tickets/${ticketId}/purchase`;
}

/** Vista del administrador: chat + acciones (sin datos de pago del comprador). */
export function ticketMediatePath(ticketId: string) {
  return `/tickets/${ticketId}/mediate`;
}

/** Vista del vendedor: chat con admin (publicación, coordinación). */
export function ticketSellerChatPath(ticketId: string) {
  return `/tickets/${ticketId}/seller`;
}

/** Ruta antigua: redirige según rol; mantener revalidación por bookmarks. */
export function ticketBuyLegacyPath(ticketId: string) {
  return `/tickets/${ticketId}/buy`;
}

export function revalidateTicketViews(ticketId: string) {
  revalidatePath("/");
  revalidatePath(`/tickets/${ticketId}`);
  revalidatePath(ticketPurchasePath(ticketId));
  revalidatePath(ticketMediatePath(ticketId));
  revalidatePath(ticketSellerChatPath(ticketId));
  revalidatePath(ticketBuyLegacyPath(ticketId));
  revalidatePath("/admin");
}
