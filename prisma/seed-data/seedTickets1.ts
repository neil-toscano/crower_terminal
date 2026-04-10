import { PrismaClient, TicketStatus } from "@/app/generated/prisma/client";

// Helper: random date between two dates
function rndDate(from: Date, to: Date) {
    return new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
}

export async function seedTickets1(
    prisma: PrismaClient,
    users: Record<string, { id: string; email: string }>
) {
    const tickets = [
        // --- Pedro Alonso vendiendo cuentas de Valorant ---
        {
            code: "#T001",
            title: "Valorant - Rango Diamond 2, skins raras incluidas",
            description: "Cuenta con más de 30 skins incluyendo Prime Vandal y Reaver Operator. Rango Diamond 2 acumulado. Nivel 180. Región LAS. Nunca baneada.",
            sellerPhone: "+51987001001",
            sellerId: users["pedro.alonso@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-02T10:30:00Z"),
        },
        {
            code: "#T002",
            title: "Valorant - Immortal 1, agentes desbloqueados",
            description: "Todos los agentes desbloqueados. Skin bundle Champions 2025. Email cambiable. Rango Immortal 1 episodio pasado.",
            sellerPhone: "+51987001001",
            sellerId: users["pedro.alonso@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-03T11:00:00Z"),
        },
        {
            code: "#T003",
            title: "Valorant - Cuenta fresh Plat 3, sin historial de ban",
            description: "Cuenta limpia, nunca baneada ni en advertencia. Plat 3. Buen KDA en Jett y Reyna.",
            sellerPhone: "+51987001001",
            sellerId: users["pedro.alonso@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-04T09:00:00Z"),
        },

        // --- Carlos Rivas vendiendo Free Fire ---
        {
            code: "#T004",
            title: "Free Fire - FF Max, diamantes guardados, mascotas legendarias",
            description: "Cuenta Free Fire MAX con 4500 diamantes almacenados, mascota Falco y Detective Panda nivel 7. Anillo Heroico. Nunca hackeada.",
            sellerPhone: "+51987002001",
            sellerId: users["carlos.rivas@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-02T12:00:00Z"),
        },
        {
            code: "#T005",
            title: "Free Fire - Nivel 80, skins exclusivas de Rampage",
            description: "Skins temporada Rampage y colaboración One Punch Man. Nivel 80. Pase de batalla completado.",
            sellerPhone: "+51987002001",
            sellerId: users["carlos.rivas@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-03T14:00:00Z"),
        },
        {
            code: "#T006",
            title: "Free Fire - Cuenta Guild Oro, ID personalizado",
            description: "ID especial de 7 dígitos, guild nivel Oro, outfit completo Skyler legendario.",
            sellerPhone: "+51987002001",
            sellerId: users["carlos.rivas@inc.com"]?.id,
            status: TicketStatus.IN_PROGRESS,
            createdAt: new Date("2026-03-05T10:00:00Z"),
        },

        // --- Miguel Torres vendiendo League of Legends ---
        {
            code: "#T007",
            title: "LoL - Grandmaster EUW, 300+ skins",
            description: "Cuenta EUW Grandmaster peak. Más de 300 skins incluyendo Ultimate Elementalist Lux y Spirit Guard Udyr. 150+ campeones.",
            sellerPhone: "+51987003001",
            sellerId: users["miguel.torres@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-03T09:30:00Z"),
        },
        {
            code: "#T008",
            title: "LoL - Platinum LAS, 100 campeones, cuenta con RP",
            description: "Cuenta LAS Platinum 1. Tiene 2000 RP sin gastar. Buen historial de skins de pase de batalla.",
            sellerPhone: "+51987003001",
            sellerId: users["miguel.torres@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-04T11:00:00Z"),
        },
        {
            code: "#T009",
            title: "LoL - Unranked, nivel 30 listo para rankeds, NA",
            description: "Cuenta NA nueva nivel 30. Todos los campeones básicos comprados. Lista para empezar ranked.",
            sellerPhone: "+51987003001",
            sellerId: users["miguel.torres@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-05T08:00:00Z"),
        },

        // --- Lucia Mendez vendiendo Minecraft ---
        {
            code: "#T010",
            title: "Minecraft Java - Hypixel Network Level 200",
            description: "Cuenta Java con nivel Hypixel 200+. Buenas estadísticas en BedWars y SkyWars. Nunca baneada. Email original incluido.",
            sellerPhone: "+51987004001",
            sellerId: users["lucia.mendez@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-03T15:00:00Z"),
        },
        {
            code: "#T011",
            title: "Minecraft Java + Bedrock - cuenta Microsoft premium",
            description: "Cuenta con ambas ediciones Java y Bedrock. Skin personalizado. Nombre de usuario disponible para cambio.",
            sellerPhone: "+51987004001",
            sellerId: users["lucia.mendez@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-04T16:30:00Z"),
        },

        // --- Andres Vega vendiendo Fortnite ---
        {
            code: "#T012",
            title: "Fortnite - 200+ skins incluyendo OG Black Knight",
            description: "Cuenta OG con Black Knight, Renegade Raider y más de 200 skins. Nivel 500+ pase de batalla. Muy cotizada.",
            sellerPhone: "+51987005001",
            sellerId: users["andres.vega@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-04T09:00:00Z"),
        },
        {
            code: "#T013",
            title: "Fortnite - Skins Anime + Star Wars bundle",
            description: "Cuenta con todo el bundle Naruto, Dragon Ball y skins de Star Wars. Pickaxe Infinity Gauntlet incluida.",
            sellerPhone: "+51987005001",
            sellerId: users["andres.vega@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-06T10:00:00Z"),
        },
        {
            code: "#T014",
            title: "Fortnite - Crew Pack activo, VBucks guardados",
            description: "Crew pack activo, 5000 VBucks disponibles, 80 skins en total.",
            sellerPhone: "+51987005001",
            sellerId: users["andres.vega@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-07T14:00:00Z"),
        },

        // --- Sofia Guerra vendiendo CS:GO / CS2 ---
        {
            code: "#T015",
            title: "CS2 - Global Elite, AK-47 Redline FN incluido",
            description: "Cuenta faceit nivel 8. Rank Global Elite en CS2. AK-47 Redline Factory New y AWP Asiimov FT. Sin ban VAC.",
            sellerPhone: "+51987006001",
            sellerId: users["sofia.guerra@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-04T11:30:00Z"),
        },
        {
            code: "#T016",
            title: "CS2 - Supreme, inventario $200 en skins",
            description: "Rango Supreme. Inventario con skins valorado en $200+. M4A4 Howl MW incluido. Medalla veterano.",
            sellerPhone: "+51987006001",
            sellerId: users["sofia.guerra@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-06T09:00:00Z"),
        },

        // --- Diego Paredes vendiendo Apex Legends ---
        {
            code: "#T017",
            title: "Apex Legends - 10 Heirlooms, Predator Season 20",
            description: "Cuenta rara con 10 heirlooms desbloqueados. Predator Season 20. Badges Apex Predator múltiples temporadas.",
            sellerPhone: "+51987007001",
            sellerId: users["diego.paredes@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-05T10:30:00Z"),
        },
        {
            code: "#T018",
            title: "Apex Legends - Diamond PC, cuentas con 500+ packs abiertos",
            description: "Diamond 4 esta temporada. Más de 500 packs abiertos en historial. Buenos cosméticos de Wraith.",
            sellerPhone: "+51987007001",
            sellerId: users["diego.paredes@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-07T08:30:00Z"),
        },

        // --- Valentina Rios vendiendo PUBG ---
        {
            code: "#T019",
            title: "PUBG - Cuenta Steam con trajes exclusivos colección",
            description: "Colección completa de trajes Season 1-5. Cuenta Steam con 2000 horas. Nunca baneada.",
            sellerPhone: "+51987008001",
            sellerId: users["valentina.rios@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-05T12:00:00Z"),
        },
        {
            code: "#T020",
            title: "PUBG Mobile - Conqueror Season 29, M416 Glacier incluido",
            description: "Rango Conqueror S29. Skin M416 Glacier y traje Pharaoh. Nivel 90 BP.",
            sellerPhone: "+51987008001",
            sellerId: users["valentina.rios@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-06T13:00:00Z"),
        },

        // --- Sebastian Mora vendiendo GTA V ---
        {
            code: "#T021",
            title: "GTA V Online - $2 Billones en banco, Rank 500",
            description: "Cuenta con 2 billones en efectivo en GTA Online. Rank 500. Todos los negocios desbloqueados. CEO, MC y bunker.",
            sellerPhone: "+51987009001",
            sellerId: users["sebastian.mora@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-06T09:30:00Z"),
        },
        {
            code: "#T022",
            title: "GTA V Online - Rank 200, Kosatka y Terrorbyte",
            description: "Cuenta con Kosatka, Terrorbyte y Arcade. Rank 200. Apartments en Rockford Hills.",
            sellerPhone: "+51987009001",
            sellerId: users["sebastian.mora@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-08T10:00:00Z"),
        },

        // --- Camila Rojas vendiendo FIFA ---
        {
            code: "#T023",
            title: "EA FC 25 - Ultimate Team Squad valor 5M monedas",
            description: "Squad valorado en 5 millones de monedas. Jugadores: Mbappe TOTY, Messi EVO 94. Acceso a cuenta EA completa.",
            sellerPhone: "+51987010001",
            sellerId: users["camila.rojas@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-06T14:00:00Z"),
        },
        {
            code: "#T024",
            title: "EA FC 25 - Rango Elite FUT Champions, recompensas guardadas",
            description: "Rango Elite en FUT Champions. Recompensas de 3 semanas guardadas sin abrir. Squad decente para WL.",
            sellerPhone: "+51987010001",
            sellerId: users["camila.rojas@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-07T11:00:00Z"),
        },

        // --- Javier Luna vendiendo Resident Evil Village ---
        {
            code: "#T025",
            title: "Resident Evil Village - Steam, todos los DLC incluidos",
            description: "Cuenta Steam con RE Village + Winters Expansion DLC. 100% logros. RE7 incluido en la misma cuenta.",
            sellerPhone: "+51987011001",
            sellerId: users["javier.luna@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-07T09:00:00Z"),
        },
        {
            code: "#T026",
            title: "Resident Evil 4 Remake - Steam, DLC Separate Ways",
            description: "RE4 Remake + DLC Ada. Steam. Completado en Profesional. Outfit clásico desbloqueado.",
            sellerPhone: "+51987011001",
            sellerId: users["javier.luna@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-08T14:30:00Z"),
        },

        // --- Natalia Figueroa vendiendo Genshin Impact ---
        {
            code: "#T027",
            title: "Genshin Impact AR58 - Nahida C6, Hu Tao C1, 50+ 5 estrellas",
            description: "AR58 servidor América. Nahida C6 y Hu Tao C1 con sus armas 5 estrellas. Más de 50 personajes 5 estrellas. Primo gems guardadas.",
            sellerPhone: "+51987012001",
            sellerId: users["natalia.figueroa@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-07T15:30:00Z"),
        },
        {
            code: "#T028",
            title: "Genshin Impact AR55 - Raiden C2, Kazuha C1",
            description: "Cuenta América AR55. Raiden Shogun C2 y Kazuha C1. Buen equipo para Spiral Abyss 36 estrellas.",
            sellerPhone: "+51987012001",
            sellerId: users["natalia.figueroa@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-09T10:00:00Z"),
        },

        // --- Roberto Salinas vendiendo Roblox ---
        {
            code: "#T029",
            title: "Roblox - Premium activo, Robux guardados 8000",
            description: "Cuenta Roblox con Robux 8000 almacenados. Premium activo. Accesorios limitados del 2018 incluidos. 500+ amigos.",
            sellerPhone: "+51987013001",
            sellerId: users["roberto.salinas@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-08T11:00:00Z"),
        },
        {
            code: "#T030",
            title: "Roblox - Avatar items limitados, cuenta 2017",
            description: "Cuenta creada en 2017 con items limitados valorados. Korblox Deathspeaker incluido.",
            sellerPhone: "+51987013001",
            sellerId: users["roberto.salinas@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-09T14:00:00Z"),
        },

        // --- Mariana Castro vendiendo Overwatch 2 ---
        {
            code: "#T031",
            title: "Overwatch 2 - Top 500 Tank, Genji Dragon skin",
            description: "Top 500 en Tank. Skin Genji Legendary Dragon incluida. Reaper Plague Doctor. Battle Pass completo.",
            sellerPhone: "+51987014001",
            sellerId: users["mariana.castro@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-08T13:00:00Z"),
        },
        {
            code: "#T032",
            title: "Overwatch 2 - Diamond DPS, 200+ cosméticos",
            description: "Diamond DPS esta temporada. Más de 200 cosméticos incluyendo skins OWL.",
            sellerPhone: "+51987014001",
            sellerId: users["mariana.castro@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-10T09:30:00Z"),
        },

        // --- Felipe Navarro vendiendo Clash of Clans ---
        {
            code: "#T033",
            title: "Clash of Clans - TH16 maxeado, Builder TH10",
            description: "TH16 completamente maxeado. Builder base TH10. Tropas legendarias. 6000+ trofeos en legends. Clan Warleague Cristal.",
            sellerPhone: "+51987015001",
            sellerId: users["felipe.navarro@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-09T09:00:00Z"),
        },
        {
            code: "#T034",
            title: "Clash Royale - Arena 15, mazo 2800 trofeos",
            description: "Arena 15. Mazo completo de cartas legendarias. Más de 2800 trofeos.",
            sellerPhone: "+51987015001",
            sellerId: users["felipe.navarro@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-10T11:00:00Z"),
        },

        // --- Daniela Soto vendiendo Mobile Legends ---
        {
            code: "#T035",
            title: "Mobile Legends - Mythical Glory, 80 heroes desbloqueados",
            description: "Rango Mythical Glory. 80 heroes desbloqueados incluyendo todos los META. Skins Zodiac y Collector.",
            sellerPhone: "+51987016001",
            sellerId: users["daniela.soto@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-09T12:00:00Z"),
        },
        {
            code: "#T036",
            title: "Mobile Legends - Epic + skins collector Fanny",
            description: "Rango Épico. Skin Collector Fanny. Cuenta con 3000 diamonds guardados.",
            sellerPhone: "+51987016001",
            sellerId: users["daniela.soto@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-11T10:00:00Z"),
        },

        // --- Mateo Herrera vendiendo Diablo IV ---
        {
            code: "#T037",
            title: "Diablo IV - Hardcore Necromancer S3, gear top",
            description: "Personaje Hardcore Necromancer vivo temporada 3. Gear completo tier 4. Montura especial.",
            sellerPhone: "+51987017001",
            sellerId: users["mateo.herrera@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-10T08:30:00Z"),
        },
        {
            code: "#T038",
            title: "Diablo IV - Battle Pass completo, skins premium",
            description: "Pase completo con todas las recompensas cosméticas de la temporada. Acceso Battle Pass eterno.",
            sellerPhone: "+51987017001",
            sellerId: users["mateo.herrera@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-11T14:00:00Z"),
        },

        // --- Isabella Ramirez vendiendo Steam general ---
        {
            code: "#T039",
            title: "Steam - 500+ juegos incluyendo AAA completos",
            description: "Cuenta Steam con más de 500 juegos. Cyberpunk 2077, RDR2, Elden Ring, Hogwarts Legacy entre otros. Nivel Steam 80.",
            sellerPhone: "+51987018001",
            sellerId: users["isabella.ramirez@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-10T12:00:00Z"),
        },
        {
            code: "#T040",
            title: "Steam - Colección indie + 50 juegos, nivel 30",
            description: "50 juegos indie y AAA menores. Stardew Valley, Hades, Hollow Knight, Dead Cells. Nivel Steam 30.",
            sellerPhone: "+51987018001",
            sellerId: users["isabella.ramirez@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-12T09:00:00Z"),
        },
    ];

    let count = 0;
    for (const t of tickets) {
        if (!t.sellerId) {
            console.warn(`⚠️  Skipping ticket ${t.code} - seller not found`);
            continue;
        }
        await prisma.ticket.upsert({
            where: { code: t.code },
            update: {},
            create: {
                code: t.code,
                title: t.title,
                description: t.description,
                sellerPhone: t.sellerPhone,
                sellerId: t.sellerId,
                status: t.status,
                createdAt: t.createdAt,
            },
        });
        count++;
    }

    console.log(`✅ seedTickets1: ${count} tickets upserted`);
}