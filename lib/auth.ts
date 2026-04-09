import { Role } from "@/app/generated/prisma/enums";
import prisma from "@/lib/prisma";
import { safeCallbackUrl } from "@/lib/callback-url";
import { getServerSession, type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "demo",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "demo",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      await prisma.user.upsert({
        where: { email: user.email },
        update: {
          name: user.name ?? undefined,
          image: user.image ?? undefined,
        },
        create: {
          email: user.email,
          name: user.name ?? "User",
          image: user.image,
          role: Role.USER,
        },
      });

      return true;
    },
    async session({ session }) {
      if (!session.user?.email) return session;
      const dbUser = await prisma.user.findUnique({
        where: { email: session.user.email },
        select: { id: true, role: true, name: true, image: true },
      });

      if (dbUser && session.user) {
        session.user.id = dbUser.id;
        session.user.role = dbUser.role;
        session.user.name = dbUser.name ?? session.user.name;
        session.user.image = dbUser.image ?? session.user.image;
      }

      return session;
    },
  },
};

export function auth() {
  return getServerSession(authOptions);
}

export async function requireSessionUser(callbackUrl = "/") {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    const safe = safeCallbackUrl(callbackUrl, "/");
    redirect(`/login?callbackUrl=${encodeURIComponent(safe)}`);
  }
  return user;
}
