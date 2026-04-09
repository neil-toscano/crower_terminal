import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.formData();
  const socketId = body.get("socket_id")?.toString();
  const channelName = body.get("channel_name")?.toString();

  if (!socketId || !channelName) {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }

  const ticketId = channelName.replace("private-ticket-", "");
  const ticket = await prisma.ticket.findUnique({ where: { id: ticketId } });
  if (!ticket) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const isSeller = ticket.sellerId === session.user.id;
  const isBuyer = ticket.buyerId !== null && ticket.buyerId === session.user.id;

  const canJoin =
    session.user.role === "ADMIN" ||
    isSeller ||
    (isBuyer && ticket.status !== "AVAILABLE");
  if (!canJoin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const authResponse = pusherServer.authorizeChannel(socketId, channelName, {
    user_id: session.user.id,
    user_info: { role: session.user.role },
  });

  return NextResponse.json(authResponse);
}
