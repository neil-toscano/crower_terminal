import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { seedUsers1 } from "./seed-data/seedUsers1";
import { seedUsers2 } from "./seed-data/seedUsers2";
import { seedTickets1 } from "./seed-data/seedTickets1";
import { seedTickets2 } from "./seed-data/seedTickets2";
import { seedLoungeMessages } from "./seed-data/seedLoungeMessages";


const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Starting seed...\n");

  // ── 1. Users ──────────────────────────────────────────────────────────────
  console.log("👤 Seeding users (batch 1)...");
  const users1 = await seedUsers1(prisma);

  console.log("👤 Seeding users (batch 2)...");
  const users2 = await seedUsers2(prisma);

  // Merge both user maps
  const allUsers = { ...users1, ...users2 };

  // ── 2. Tickets ────────────────────────────────────────────────────────────
  console.log("\n🎫 Seeding tickets (batch 1 - Mar 2–12)...");
  await seedTickets1(prisma, allUsers);

  console.log("🎫 Seeding tickets (batch 2 - Mar 13–Apr 3)...");
  await seedTickets2(prisma, allUsers);

  // ── 3. Lounge chat ────────────────────────────────────────────────────────
  console.log("\n💬 Seeding lounge messages...");
  await seedLoungeMessages(prisma, allUsers);

  console.log("\n✅ All seed complete!");
  console.log(`   Users:    ${Object.keys(allUsers).length}`);
  console.log(`   Tickets:  125 (aprox)`);
  console.log(`   Lounge:   ~120 messages`);
}

main()
  .catch((error) => {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });