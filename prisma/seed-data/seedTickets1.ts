import { PrismaClient, TicketStatus } from "@/app/generated/prisma/client";

// Helper: genera una fecha aleatoria entre dos fechas dadas
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
            code: "#VAL-001",
            title: "Valorant - Rango Diamond 2, skins raras incluidas",
            description: "Cuenta con más de 30 skins incluyendo Prime Vandal y Reaver Operator. Rango Diamond 2 acumulado. Nivel 180. Región LAS. Nunca baneada.",
            sellerId: users["pedro.alonso@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-02T14:30:00Z"), // 2:30 PM
        },
        {
            code: "#VAL-002",
            title: "Valorant - Immortal 1, agentes desbloqueados",
            description: "Todos los agentes desbloqueados. Skin bundle Champions 2025. Email cambiable. Rango Immortal 1 episodio pasado.",
            sellerId: users["pedro.alonso@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-03T18:00:00Z"), // 6:00 PM
        },
        {
            code: "#VAL-003",
            title: "Valorant - Cuenta fresh Plat 3, sin historial de ban",
            description: "Cuenta limpia, nunca baneada ni en advertencia. Plat 3. Buen KDA en Jett y Reyna.",
            sellerId: users["pedro.alonso@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-04T21:15:00Z"), // 9:15 PM
        },

        // --- Carlos Rivas vendiendo Free Fire ---
        {
            code: "#VAL-004",
            title: "Free Fire - FF Max, diamantes guardados, mascotas legendarias",
            description: "Cuenta Free Fire MAX con 4500 diamantes almacenados, mascota Falco y Detective Panda nivel 7. Anillo Heroico. Nunca hackeada.",
            sellerId: users["carlos.rivas@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-02T12:00:00Z"), // 12:00 PM
        },
        {
            code: "#VAL-005",
            title: "Free Fire - Nivel 80, skins exclusivas de Rampage",
            description: "Skins temporada Rampage y colaboración One Punch Man. Nivel 80. Pase de batalla completado.",
            sellerId: users["carlos.rivas@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-03T16:45:00Z"), // 4:45 PM
        },
        {
            code: "#VAL-006",
            title: "Free Fire - Cuenta Guild Oro, ID personalizado",
            description: "ID especial de 7 dígitos, guild nivel Oro, outfit completo Skyler legendario.",
            sellerId: users["carlos.rivas@inc.com"]?.id,
            status: TicketStatus.IN_PROGRESS,
            createdAt: new Date("2026-03-05T23:30:00Z"), // 11:30 PM
        },

        // --- Miguel Torres vendiendo League of Legends ---
        {
            code: "#VAL-007",
            title: "LoL - Grandmaster EUW, 300+ skins",
            description: "Cuenta EUW Grandmaster peak. Más de 300 skins incluyendo Ultimate Elementalist Lux y Spirit Guard Udyr. 150+ campeones.",
            sellerId: users["miguel.torres@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-03T15:20:00Z"), // 3:20 PM
        },
        {
            code: "#VAL-008",
            title: "LoL - Platinum LAS, 100 campeones, cuenta con RP",
            description: "Cuenta LAS Platinum 1. Tiene 2000 RP sin gastar. Buen historial de skins de pase de batalla.",
            sellerId: users["miguel.torres@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-04T19:00:00Z"), // 7:00 PM
        },
        {
            code: "#VAL-009",
            title: "LoL - Unranked, nivel 30 listo para rankeds, NA",
            description: "Cuenta NA nueva nivel 30. Todos los campeones básicos comprados. Lista para empezar ranked.",
            sellerId: users["miguel.torres@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-05T13:10:00Z"), // 1:10 PM
        },

        // --- Lucia Mendez vendiendo Minecraft ---
        {
            code: "#VAL-010",
            title: "Minecraft Java - Hypixel Network Level 200",
            description: "Cuenta Java con nivel Hypixel 200+. Buenas estadísticas en BedWars y SkyWars. Nunca baneada. Email original incluido.",
            sellerId: users["lucia.mendez@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-03T17:00:00Z"), // 5:00 PM
        },
        {
            code: "#VAL-011",
            title: "Minecraft Java + Bedrock - cuenta Microsoft premium",
            description: "Cuenta con ambas ediciones Java y Bedrock. Skin personalizado. Nombre de usuario disponible para cambio.",
            sellerId: users["lucia.mendez@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-04T22:30:00Z"), // 10:30 PM
        },

        // --- Andres Vega vendiendo Fortnite ---
        {
            code: "#VAL-012",
            title: "Fortnite - 200+ skins incluyendo OG Black Knight",
            description: "Cuenta OG con Black Knight, Renegade Raider y más de 200 skins. Nivel 500+ pase de batalla. Muy cotizada.",
            sellerId: users["andres.vega@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-04T14:00:00Z"), // 2:00 PM
        },
        {
            code: "#VAL-013",
            title: "Fortnite - Skins Anime + Star Wars bundle",
            description: "Cuenta con todo el bundle Naruto, Dragon Ball y skins de Star Wars. Pickaxe Infinity Gauntlet incluida.",
            sellerId: users["andres.vega@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-06T19:30:00Z"), // 7:30 PM
        },
        {
            code: "#VAL-014",
            title: "Fortnite - Crew Pack activo, VBucks guardados",
            description: "Crew pack activo, 5000 VBucks disponibles, 80 skins en total.",
            sellerId: users["andres.vega@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-07T16:00:00Z"), // 4:00 PM
        },

        // --- Sofia Guerra vendiendo CS:GO / CS2 ---
        {
            code: "#VAL-015",
            title: "CS2 - Global Elite, AK-47 Redline FN incluido",
            description: "Cuenta faceit nivel 8. Rank Global Elite en CS2. AK-47 Redline Factory New y AWP Asiimov FT. Sin ban VAC.",
            sellerId: users["sofia.guerra@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-04T20:45:00Z"), // 8:45 PM
        },
        {
            code: "#VAL-016",
            title: "CS2 - Supreme, inventario $200 en skins",
            description: "Rango Supreme. Inventario con skins valorado en $200+. M4A4 Howl MW incluido. Medalla veterano.",
            sellerId: users["sofia.guerra@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-06T15:15:00Z"), // 3:15 PM
        },

        // --- Diego Paredes vendiendo Apex Legends ---
        {
            code: "#VAL-017",
            title: "Apex Legends - 10 Heirlooms, Predator Season 20",
            description: "Cuenta rara con 10 heirlooms desbloqueados. Predator Season 20. Badges Apex Predator múltiples temporadas.",
            sellerId: users["diego.paredes@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-05T18:30:00Z"), // 6:30 PM
        },
        {
            code: "#VAL-018",
            title: "Apex Legends - Diamond PC, cuentas con 500+ packs abiertos",
            description: "Diamond 4 esta temporada. Más de 500 packs abiertos en historial. Buenos cosméticos de Wraith.",
            sellerId: users["diego.paredes@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-07T22:00:00Z"), // 10:00 PM
        },

        // --- Valentina Rios vendiendo PUBG ---
        {
            code: "#VAL-019",
            title: "PUBG - Cuenta Steam con trajes exclusivos colección",
            description: "Colección completa de trajes Season 1-5. Cuenta Steam con 2000 horas. Nunca baneada.",
            sellerId: users["valentina.rios@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-05T14:00:00Z"), // 2:00 PM
        },
        {
            code: "#VAL-020",
            title: "PUBG Mobile - Conqueror Season 29, M416 Glacier incluido",
            description: "Rango Conqueror S29. Skin M416 Glacier y traje Pharaoh. Nivel 90 BP.",
            sellerId: users["valentina.rios@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-06T18:40:00Z"), // 6:40 PM
        },

        // --- Sebastian Mora vendiendo GTA V ---
        {
            code: "#VAL-021",
            title: "GTA V Online - $2 Billones en banco, Rank 500",
            description: "Cuenta con 2 billones en efectivo en GTA Online. Rank 500. Todos los negocios desbloqueados. CEO, MC y bunker.",
            sellerId: users["sebastian.mora@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-06T21:00:00Z"), // 9:00 PM
        },
        {
            code: "#VAL-022",
            title: "GTA V Online - Rank 200, Kosatka y Terrorbyte",
            description: "Cuenta con Kosatka, Terrorbyte y Arcade. Rank 200. Apartments en Rockford Hills.",
            sellerId: users["sebastian.mora@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-08T15:30:00Z"), // 3:30 PM
        },

        // --- Camila Rojas vendiendo FIFA ---
        {
            code: "#VAL-023",
            title: "EA FC 25 - Ultimate Team Squad valor 5M monedas",
            description: "Squad valorado en 5 millones de monedas. Jugadores: Mbappe TOTY, Messi EVO 94. Acceso a cuenta EA completa.",
            sellerId: users["camila.rojas@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-06T13:15:00Z"), // 1:15 PM
        },
        {
            code: "#VAL-024",
            title: "EA FC 25 - Rango Elite FUT Champions, recompensas guardadas",
            description: "Rango Elite en FUT Champions. Recompensas de 3 semanas guardadas sin abrir. Squad decente para WL.",
            sellerId: users["camila.rojas@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-07T20:00:00Z"), // 8:00 PM
        },

        // --- Javier Luna vendiendo Resident Evil Village ---
        {
            code: "#VAL-025",
            title: "Resident Evil Village - Steam, todos los DLC incluidos",
            description: "Cuenta Steam con RE Village + Winters Expansion DLC. 100% logros. RE7 incluido en la misma cuenta.",
            sellerId: users["javier.luna@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-07T12:00:00Z"), // 12:00 PM
        },
        {
            code: "#VAL-026",
            title: "Resident Evil 4 Remake - Steam, DLC Separate Ways",
            description: "RE4 Remake + DLC Ada. Steam. Completado en Profesional. Outfit clásico desbloqueado.",
            sellerId: users["javier.luna@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-08T19:45:00Z"), // 7:45 PM
        },

        // --- Natalia Figueroa vendiendo Genshin Impact ---
        {
            code: "#VAL-027",
            title: "Genshin Impact AR58 - Nahida C6, Hu Tao C1, 50+ 5 estrellas",
            description: "AR58 servidor América. Nahida C6 y Hu Tao C1 con sus armas 5 estrellas. Más de 50 personajes 5 estrellas. Primo gems guardadas.",
            sellerId: users["natalia.figueroa@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-07T22:30:00Z"), // 10:30 PM
        },
        {
            code: "#VAL-028",
            title: "Genshin Impact AR55 - Raiden C2, Kazuha C1",
            description: "Cuenta América AR55. Raiden Shogun C2 y Kazuha C1. Buen equipo para Spiral Abyss 36 estrellas.",
            sellerId: users["natalia.figueroa@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-09T17:00:00Z"), // 5:00 PM
        },

        // --- Roberto Salinas vendiendo Roblox ---
        {
            code: "#VAL-029",
            title: "Roblox - Premium activo, Robux guardados 8000",
            description: "Cuenta Roblox con Robux 8000 almacenados. Premium activo. Accesorios limitados del 2018 incluidos. 500+ amigos.",
            sellerId: users["roberto.salinas@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-08T16:00:00Z"), // 4:00 PM
        },
        {
            code: "#VAL-030",
            title: "Roblox - Avatar items limitados, cuenta 2017",
            description: "Cuenta creada en 2017 con items limitados valorados. Korblox Deathspeaker incluido.",
            sellerId: users["roberto.salinas@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-09T21:10:00Z"), // 9:10 PM
        },

        // --- Mariana Castro vendiendo Overwatch 2 ---
        {
            code: "#VAL-031",
            title: "Overwatch 2 - Top 500 Tank, Genji Dragon skin",
            description: "Top 500 en Tank. Skin Genji Legendary Dragon incluida. Reaper Plague Doctor. Battle Pass completo.",
            sellerId: users["mariana.castro@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-08T23:50:00Z"), // 11:50 PM
        },
        {
            code: "#VAL-032",
            title: "Overwatch 2 - Diamond DPS, 200+ cosméticos",
            description: "Diamond DPS esta temporada. Más de 200 cosméticos incluyendo skins OWL.",
            sellerId: users["mariana.castro@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-10T14:20:00Z"), // 2:20 PM
        },

        // --- Felipe Navarro vendiendo Clash of Clans ---
        {
            code: "#VAL-033",
            title: "Clash of Clans - TH16 maxeado, Builder TH10",
            description: "TH16 completamente maxeado. Builder base TH10. Tropas legendarias. 6000+ trofeos en legends. Clan Warleague Cristal.",
            sellerId: users["felipe.navarro@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-09T18:00:00Z"), // 6:00 PM
        },
        {
            code: "#VAL-034",
            title: "Clash Royale - Arena 15, mazo 2800 trofeos",
            description: "Arena 15. Mazo completo de cartas legendarias. Más de 2800 trofeos.",
            sellerId: users["felipe.navarro@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-10T22:15:00Z"), // 10:15 PM
        },

        // --- Daniela Soto vendiendo Mobile Legends ---
        {
            code: "#VAL-035",
            title: "Mobile Legends - Mythical Glory, 80 heroes desbloqueados",
            description: "Rango Mythical Glory. 80 heroes desbloqueados incluyendo todos los META. Skins Zodiac y Collector.",
            sellerId: users["daniela.soto@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-09T13:40:00Z"), // 1:40 PM
        },
        {
            code: "#VAL-036",
            title: "Mobile Legends - Epic + skins collector Fanny",
            description: "Rango Épico. Skin Collector Fanny. Cuenta con 3000 diamonds guardados.",
            sellerId: users["daniela.soto@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-11T16:00:00Z"), // 4:00 PM
        },

        // --- Mateo Herrera vendiendo Diablo IV ---
        {
            code: "#VAL-037",
            title: "Diablo IV - Hardcore Necromancer S3, gear top",
            description: "Personaje Hardcore Necromancer vivo temporada 3. Gear completo tier 4. Montura especial.",
            sellerId: users["mateo.herrera@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-10T20:30:00Z"), // 8:30 PM
        },
        {
            code: "#VAL-038",
            title: "Diablo IV - Battle Pass completo, skins premium",
            description: "Pase completo con todas las recompensas cosméticas de la temporada. Acceso Battle Pass eterno.",
            sellerId: users["mateo.herrera@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-11T19:00:00Z"), // 7:00 PM
        },

        // --- Isabella Ramirez vendiendo Steam general ---
        {
            code: "#VAL-039",
            title: "Steam - 500+ juegos incluyendo AAA completos",
            description: "Cuenta Steam con más de 500 juegos. Cyberpunk 2077, RDR2, Elden Ring, Hogwarts Legacy entre otros. Nivel Steam 80.",
            sellerId: users["isabella.ramirez@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-10T15:00:00Z"), // 3:00 PM
        },
        {
            code: "#VAL-040",
            title: "Steam - Colección indie + 50 juegos, nivel 30",
            description: "50 juegos indie y AAA menores. Stardew Valley, Hades, Hollow Knight, Dead Cells. Nivel Steam 30.",
            sellerId: users["isabella.ramirez@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-12T17:30:00Z"), // 5:30 PM
        },
    ];

    let count = 0;
    for (const t of tickets) {
        // Validación de existencia de usuario vendedor
        if (!t.sellerId) {
            console.warn(`⚠️ Skipping ticket ${t.code} - seller not found`);
            continue;
        }

        // upsert: busca por el campo 'code'. Si existe, no actualiza nada (update: {}), 
        // si no existe, lo crea con los datos proporcionados.
        await prisma.ticket.upsert({
            where: { code: t.code },
            update: {},
            create: {
                code: t.code,
                title: t.title,
                description: t.description,
                sellerId: t.sellerId, // Relación con el usuario (vendedor)
                status: t.status,     // Estado del ticket (Enum)
                createdAt: t.createdAt,
            },
        });
        count++;
    }

    console.log(`✅ seedTickets1: ${count} tickets upserted`);
}