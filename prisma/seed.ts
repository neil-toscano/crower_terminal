import { PrismaClient, Role, TicketStatus } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  // Admin fijo
  const admin = await prisma.user.upsert({
    where: { email: "admin@escrow.local" },
    update: { role: Role.ADMIN },
    create: {
      email: "admin@escrow.local",
      name: "Escrow Admin",
      role: Role.ADMIN,
    },
  });

  console.log("Admin created:", admin.email);

  // --- BORRAR datos antiguos de los 4 sellers ---
  const sellerEmails = ["seller1@escrow.local", "seller2@escrow.local", "seller3@escrow.local", "seller4@escrow.local"];

  // Borrar tickets de esos sellers primero
  await prisma.ticket.deleteMany({
    where: {
      seller: { email: { in: sellerEmails } }
    }
  });

  // Borrar los usuarios vendedores antiguos
  await prisma.user.deleteMany({
    where: {
      email: { in: sellerEmails }
    }
  });

  console.log("Old sellers and their tickets deleted");

  // Crear 4 vendedores nuevos
  const sellers: { id: string; email: string }[] = [];
  for (let i = 1; i <= 4; i++) {
    const email = `seller${i}@escrow.local`;
    const seller = await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        email,
        name: `Seller ${i}`,
        role: Role.USER,
      },
    });
    sellers.push(seller);
  }

  console.log("4 new sellers created");

  // Lista de juegos variados
  const games = [
    "Valorant", "Free Fire", "League of Legends", "Minecraft",
    "Fortnite", "CS:GO", "Apex Legends", "PUBG", "GTA V", "FIFA 23"
  ];

  function getRandomGame() {
    return games[Math.floor(Math.random() * games.length)];
  }

  // Crear 10 tickets para cada vendedor
  let ticketCounter = 1;
  for (const seller of sellers) {
    for (let j = 1; j <= 10; j++) {
      const game = getRandomGame();
      const code = `#T${ticketCounter.toString().padStart(3, "0")}`;
      await prisma.ticket.upsert({
        where: { code },
        update: {},
        create: {
          code,
          title: `${game} Account ${ticketCounter}`,
          sellerId: seller.id,
          status: TicketStatus.AVAILABLE,
        },
      });
      ticketCounter++;
    }
  }

  console.log("10 tickets created for each seller with different games");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });