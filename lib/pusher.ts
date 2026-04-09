import Pusher from "pusher";

export const pusherServer = new Pusher({
  appId: process.env.PUSHER_APP_ID ?? "demo",
  key: process.env.PUSHER_KEY ?? "demo",
  secret: process.env.PUSHER_SECRET ?? "demo",
  cluster: process.env.PUSHER_CLUSTER ?? "us2",
  useTLS: true,
});
