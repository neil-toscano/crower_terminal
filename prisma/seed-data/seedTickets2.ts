import { PrismaClient } from "@/app/generated/prisma/client";
import { TicketStatus } from "@/app/generated/prisma/enums";

export async function seedTickets2(
    prisma: PrismaClient,
    users: Record<string, { id: string; email: string }>
) {
    const tickets = [
        // --- Alejandro Cruz - Valorant ---
        {
            code: "#VAL-041",
            title: "Valorant - Ascendant 3, agentes con contratos completos",
            description: "Ascendant 3 peak. Contratos de Jett, Reyna, Omen y Killjoy completos. Skins battle pass S5 y S6.",
            sellerId: users["alejandro.cruz@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-13T14:30:00Z"), // 2:30 PM
        },
        {
            code: "#VAL-042",
            title: "Valorant - Cuenta smurf Bronce, nivel 20",
            description: "Smurf limpia nivel 20. Sin historial de ban. Email cambiable. Buena para practicar.",
            sellerId: users["alejandro.cruz@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-14T18:00:00Z"), // 6:00 PM
        },
        {
            code: "#VAL-043",
            title: "Valorant - Radiant S4, prime colección completa",
            description: "Radiant S4 peak. Colección Prime completa (Vandal, Phantom, Knife). Skin Spectrum Phantom incluida.",
            sellerId: users["alejandro.cruz@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-16T21:00:00Z"), // 9:00 PM
        },

        // --- Valeria Montoya - Free Fire ---
        {
            code: "#VAL-044",
            title: "Free Fire - Cuenta con colaboracion Demon Slayer",
            description: "Skins exclusivas colaboración Demon Slayer. Tanjiro y Zenitsu outfits. Nivel 70. Headshot rate 52%.",
            sellerId: users["valeria.montoya@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-13T15:00:00Z"), // 3:00 PM
        },
        {
            code: "#VAL-045",
            title: "Free Fire MAX - Grandmaster, gloo wall skins exclusivas",
            description: "Rango Grandmaster. 5 gloo wall skins raras incluyendo Floral y Fire Ring. Buena velocidad de lanzamiento.",
            sellerId: users["valeria.montoya@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-15T19:30:00Z"), // 7:30 PM
        },

        // --- Nicolas Peña - Genshin Impact ---
        {
            code: "#VAL-046",
            title: "Genshin Impact AR60 - Europa, cuenta old, Venti C2 Zhongli C2",
            description: "AR60 servidor Europa. Cuenta desde 2020. Venti C2, Zhongli C2, Albedo C1. Armas 5 estrellas variadas. Primo gems para próximo banner.",
            sellerId: users["nicolas.peña@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-13T16:20:00Z"), // 4:20 PM
        },
        {
            code: "#VAL-047",
            title: "Genshin Impact AR50 - Asia, Ayaka C0 Ganyu C0",
            description: "Ayaka y Ganyu sin constelaciones pero con armas refinadas. AR50 Asia. Spiral Abyss 9 estrellas.",
            sellerId: users["nicolas.peña@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-15T22:10:00Z"), // 10:10 PM
        },

        // --- Gabriela Vargas - Minecraft ---
        {
            code: "#VAL-048",
            title: "Minecraft Java - Hypixel Bedwars Winstreak 10+, estadisticas limpias",
            description: "Cuenta Hypixel con winstreak en Bedwars de 10+. Stats limpias. Nivel 150. MVP++ activo.",
            sellerId: users["gabriela.vargas@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-14T13:45:00Z"), // 1:45 PM
        },
        {
            code: "#VAL-049",
            title: "Minecraft Java OG 2011 - usuario premium antiguo",
            description: "Cuenta Java creada en 2011. Username corto de 4 letras disponible. Historial limpio. Sin capas especiales.",
            sellerId: users["gabriela.vargas@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-16T17:00:00Z"), // 5:00 PM
        },

        // --- Juan Espinoza - CS2 ---
        {
            code: "#VAL-050",
            title: "CS2 - Cuenta Faceit Nivel 10, inventario $500",
            description: "Faceit Nivel 10 verificado. Inventario CS2 valorado en $500: Karambit Fade, M4A1-S Hot Rod, varios flotes FN.",
            sellerId: users["juan.espinoza@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-14T20:00:00Z"), // 8:00 PM
        },
        {
            code: "#VAL-051",
            title: "CS2 - Silver Elite, cuenta para smurfear, no baneada",
            description: "Cuenta smurf Silver Elite. Prime status activo. Sin ban VAC ni cooldown. Ideal para entrenar con amigos.",
            sellerId: users["juan.espinoza@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-16T15:30:00Z"), // 3:30 PM
        },

        // --- Paula Ibarra - Apex Legends ---
        {
            code: "#VAL-052",
            title: "Apex Legends - Bloodhound Heirloom, Masters S18",
            description: "Heirloom de Bloodhound desbloqueado. Masters S18. Badges múltiples 4000 daño. Lifeline con skins legendarias.",
            sellerId: users["paula.ibarra@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-14T19:20:00Z"), // 7:20 PM
        },
        {
            code: "#VAL-053",
            title: "Apex Legends - Cuenta con 15 leyendas full skins",
            description: "15 leyendas con skins legendarias cada una. Revenant Heirloom. Platinum este split.",
            sellerId: users["paula.ibarra@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-17T16:00:00Z"), // 4:00 PM
        },

        // --- Cristian Medina - Roblox ---
        {
            code: "#VAL-054",
            title: "Roblox - Dominus Empyreus limitado, cuenta OG",
            description: "Cuenta OG con Dominus Empyreus (item limitado raro). Más de 100k R$ en inventario total.",
            sellerId: users["cristian.medina@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-14T21:15:00Z"), // 9:15 PM
        },
        {
            code: "#VAL-055",
            title: "Roblox - Cuenta con grupo activo 5000 miembros",
            description: "Cuenta dueña de grupo con 5000 miembros activos. Fondos del grupo incluidos. Buen para monetizar.",
            sellerId: users["cristian.medina@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-18T13:40:00Z"), // 1:40 PM
        },

        // --- Renata Flores - Mobile Legends ---
        {
            code: "#VAL-056",
            title: "Mobile Legends - Mythic Glory 800 puntos, Chou Collector",
            description: "Mythic Glory 800+ puntos. Skin Collector Chou y Kagura. Cuenta con pase de batalla 3 temporadas.",
            sellerId: users["renata.flores@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-15T18:00:00Z"), // 6:00 PM
        },
        {
            code: "#VAL-057",
            title: "Mobile Legends - cuenta starter epic 60 heroes",
            description: "60 heroes desbloqueados. Epic varios. Buena base para nuevo jugador que quiere ventaja.",
            sellerId: users["renata.flores@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-17T20:30:00Z"), // 8:30 PM
        },

        // --- Emilio Romero - GTA V Online ---
        {
            code: "#VAL-058",
            title: "GTA Online - Todas las propiedades, $5B en banco",
            description: "Todas las propiedades compradas: CEO, Hangar, Arcade, Kosatka, Auto Shop, Club nocturno. 5 billones en banco. Rank 800.",
            sellerId: users["emilio.romero@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-15T15:00:00Z"), // 3:00 PM
        },
        {
            code: "#VAL-059",
            title: "GTA V Online - Rank 120, Kosatka starter, PC",
            description: "Kosatka comprada. Rank 120 limpio. Cuenta PC. Sin ban ni restricciones Rockstar.",
            sellerId: users["emilio.romero@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-18T22:00:00Z"), // 10:00 PM
        },

        // --- Andrea Silva - Fortnite ---
        {
            code: "#VAL-060",
            title: "Fortnite - Account Travis Scott + Marvel skins",
            description: "Skin Travis Scott Astronomical exclusiva + Spider-Man, Iron Man, Thanos. Chapter 1 Season 3 vieja.",
            sellerId: users["andrea.silva@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-15T16:30:00Z"), // 4:30 PM
        },
        {
            code: "#VAL-061",
            title: "Fortnite - OG Reaper (John Wick) skin + Ghoul Trooper",
            description: "Reaper y Ghoul Trooper. Cuenta capítulo 1 temporada 4 original. Pickaxe Raider's Revenge.",
            sellerId: users["andrea.silva@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-17T23:00:00Z"), // 11:00 PM
        },

        // --- Tomas Carrillo - LoL ---
        {
            code: "#VAL-062",
            title: "LoL - Challenger LATAM, peak S14, cuenta de 10 años",
            description: "Challenger Season 14 en LATAM. Cuenta activa desde S4. Skins raras: PAX TF, Victorious Janna. 400+ skins totales.",
            sellerId: users["tomas.carrillo@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-16T14:00:00Z"), // 2:00 PM
        },
        {
            code: "#VAL-063",
            title: "LoL LATAM - Gold 4, 150 campeones, cuenta normal",
            description: "Gold 4 estable. 150 campeones. Buenas skins de temporada. Nunca infracción Honorable.",
            sellerId: users["tomas.carrillo@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-18T21:45:00Z"), // 9:45 PM
        },

        // --- Karen Delgado - Overwatch 2 ---
        {
            code: "#VAL-064",
            title: "Overwatch 2 - Mercy Pink skin + Support Grandmaster",
            description: "Skin exclusiva Mercy Pink (edición limitada caridad). Grandmaster en Support. Muchos sprays legendarios.",
            sellerId: users["karen.delgado@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-16T15:30:00Z"), // 3:30 PM
        },
        {
            code: "#VAL-065",
            title: "Overwatch 2 - Nivel 1000, skins Blizzcon exclusivas",
            description: "Nivel 1000+. Skins exclusivas BlizzCon 2019 Demon Hunter Sombra y Tyrael Pharah.",
            sellerId: users["karen.delgado@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-19T20:15:00Z"), // 8:15 PM
        },

        // --- Oscar Villa - Diablo IV ---
        {
            code: "#VAL-066",
            title: "Diablo IV - Sorceress full BiS Season of the Construct",
            description: "Sorceress full BiS Season of the Construct. Paragon 200. Equipo optimizado para pit 100+.",
            sellerId: users["oscar.villa@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-17T18:45:00Z"), // 6:45 PM
        },
        {
            code: "#VAL-067",
            title: "Diablo IV - Cuenta con expansión Vessel of Hatred",
            description: "Acceso a expansión Vessel of Hatred. Spiritborn nivel 100. Cosméticos premium del shop.",
            sellerId: users["oscar.villa@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-20T22:30:00Z"), // 10:30 PM
        },

        // --- Paola Restrepo - Clash of Clans ---
        {
            code: "#VAL-068",
            title: "CoC - TH15, 6 constructores, héroe nivel 80",
            description: "TH15. 6 constructores activos. Bárbaro Rey nivel 80, Reina Arquera nivel 80. Clan guerra campeón 1.",
            sellerId: users["paola.restrepo@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-17T15:00:00Z"), // 3:00 PM
        },
        {
            code: "#VAL-069",
            title: "Clash Royale + CoC cuenta vinculada Supercell ID",
            description: "CoC TH12 + Clash Royale Arena 14 vinculados al mismo Supercell ID. Doble juego.",
            sellerId: users["paola.restrepo@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-21T19:00:00Z"), // 7:00 PM
        },

        // --- Kevin Zapata - PUBG Mobile ---
        {
            code: "#VAL-070",
            title: "PUBG Mobile - Ace Master, M416 Glacier FN",
            description: "Ace Master esta temporada. M416 Glacier Factory New. Traje premium Ronin. 5000 UC guardadas.",
            sellerId: users["kevin.zapata@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-18T16:30:00Z"), // 4:30 PM
        },
        {
            code: "#VAL-071",
            title: "PUBG Mobile - Crown 5, outfits colección Elite",
            description: "Crown 5. Colección Elite temporada anterior completa. Buen KDA 3.5. Cuenta 3 años de antigüedad.",
            sellerId: users["kevin.zapata@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-20T23:10:00Z"), // 11:10 PM
        },

        // --- Lorena Acosta - Steam ---
        {
            code: "#VAL-072",
            title: "Steam - The Witcher 3, Cyberpunk 2077 + 80 juegos",
            description: "Cuenta Steam con Witcher 3 GOTY, Cyberpunk 2077 con DLC Phantom Liberty. 80 juegos adicionales. Nivel Steam 50.",
            sellerId: users["lorena.acosta@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-18T14:20:00Z"), // 2:20 PM
        },
        {
            code: "#VAL-073",
            title: "Steam - Cuenta con 10000 horas Dota 2, Immortal items",
            description: "10000 horas en Dota 2. Arcana Lina, Arcana Phantom Assassin. Immortal rank.",
            sellerId: users["lorena.acosta@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-22T20:00:00Z"), // 8:00 PM
        },

        // --- Ivan Ortega - EA FC 25 ---
        {
            code: "#VAL-074",
            title: "EA FC 25 - Squad 10M monedas, Mbappe TOTY IF",
            description: "Squad valorado en 10 millones. Mbappe TOTY IF, Vinicius EVO 97, Haaland SBC 95. Estrellas de habilidad completas.",
            sellerId: users["ivan.ortega@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-19T13:15:00Z"), // 1:15 PM
        },
        {
            code: "#VAL-075",
            title: "EA FC 25 - FUT Draft tokens x5 + 500k monedas",
            description: "5 tokens FUT Draft + 500k monedas listos. Ideal para construir equipo desde cero.",
            sellerId: users["ivan.ortega@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-22T19:40:00Z"), // 7:40 PM
        },

        // --- Sara Blanco - Resident Evil ---
        {
            code: "#VAL-076",
            title: "RE2 Remake + RE3 Remake - Steam bundle con logros",
            description: "Bundle RE2 y RE3 Remake en Steam. RE2 100% logros. RE3 completado Nightmare.",
            sellerId: users["sara.blanco@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-19T16:00:00Z"), // 4:00 PM
        },
        {
            code: "#VAL-077",
            title: "Resident Evil Village + RE7 - PS5 digital",
            description: "Ambos en PS5 digital. Village con DLC. RE7 Biohazard completo. Guardado en la nube.",
            sellerId: users["sara.blanco@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-23T21:30:00Z"), // 9:30 PM
        },

        // --- Mario Suarez - Valorant ---
        {
            code: "#VAL-078",
            title: "Valorant - Nivel 500, coleccion Ion completa",
            description: "Nivel 500. Colección Ion completa (Vandal, Phantom, Operator, Sheriff, Knife). Skins premium bundle.",
            sellerId: users["mario.suarez@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-20T14:45:00Z"), // 2:45 PM
        },
        {
            code: "#VAL-079",
            title: "Valorant - Peak Immortal 3, skins variadas 25",
            description: "Peak Immortal 3. 25 skins distintas incluyendo Singularity Phantom y Glitchpop Frenzy.",
            sellerId: users["mario.suarez@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-22T23:50:00Z"), // 11:50 PM
        },

        // --- Patricia Leal - Free Fire ---
        {
            code: "#VAL-080",
            title: "Free Fire - Colaboracion BTS, skins exclusivas K",
            description: "Skins exclusivas colaboración BTS que ya no están disponibles. Personaje K nivel 8. Outfit full set.",
            sellerId: users["patricia.leal@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-20T17:20:00Z"), // 5:20 PM
        },
        {
            code: "#VAL-081",
            title: "Free Fire - Servidor Brazil, ID corto 7 digitos",
            description: "ID de 7 dígitos corto en servidor Brazil. Nivel 75. Skins weapon bundle Fire.",
            sellerId: users["patricia.leal@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-23T20:10:00Z"), // 8:10 PM
        },

        // --- Henry Pinto - Genshin Impact ---
        {
            code: "#VAL-082",
            title: "Genshin AR58 America - Furina C2 Neuvillette C1, meta build",
            description: "Furina C2 + Neuvillette C1 full meta. AR58 América. 36 estrellas Abyss consistente. 50k primo gems gastadas en cuenta.",
            sellerId: users["henry.pinto@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-21T15:40:00Z"), // 3:40 PM
        },
        {
            code: "#VAL-083",
            title: "Honkai Star Rail - Acheron E2, Dan Heng Imbibitor E1",
            description: "Honkai Star Rail cuenta Asia. Acheron E2 con su LC. Dan Heng Imbibitor Lunae E1. Equilibrium 6.",
            sellerId: users["henry.pinto@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-24T22:15:00Z"), // 10:15 PM
        },

        // --- Jimena Cabrera - Minecraft ---
        {
            code: "#VAL-084",
            title: "Minecraft Java - Username corto 5 letras disponible",
            description: "Username limpio de 5 letras actualmente disponible para cambio. Java edition 2019. Hypixel nivel 100.",
            sellerId: users["jimena.cabrera@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-21T13:00:00Z"), // 1:00 PM
        },
        {
            code: "#VAL-085",
            title: "Minecraft Java - Servidor privado activo 50 jugadores incluido",
            description: "Cuenta + acceso a servidor privado con 50 jugadores activos. Plugins personalizados. SMP survival economy.",
            sellerId: users["jimena.cabrera@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-25T19:45:00Z"), // 7:45 PM
        },

        // --- Alex Ramos - LoL ---
        {
            code: "#VAL-086",
            title: "LoL LATAM - Diamond 2, account con skins event limitadas",
            description: "Diamond 2 esta temporada. Skins exclusivas de evento: Victorious Sivir, Victorious Morgana, Championship Ryze.",
            sellerId: users["alex.ramos@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-22T14:30:00Z"), // 2:30 PM
        },
        {
            code: "#VAL-087",
            title: "LoL - Cuenta EUW Platinum, 200 skins, email original",
            description: "EUW Platinum estable. 200 skins. Email original incluido con la cuenta. Honor nivel 4.",
            sellerId: users["alex.ramos@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-25T21:00:00Z"), // 9:00 PM
        },

        // --- Diana Campos - PUBG Mobile ---
        {
            code: "#VAL-088",
            title: "PUBG Mobile - Cuenta Conqueror S30, RP max",
            description: "Conqueror S30 verificado. RP máximo con recompensas desbloqueadas. UMP45 Glacier incluido.",
            sellerId: users["diana.campos@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-22T16:00:00Z"), // 4:00 PM
        },
        {
            code: "#VAL-089",
            title: "PUBG Mobile - Ace con outfits de colaboracion Jujutsu",
            description: "Ace rank. Outfits colaboración Jujutsu Kaisen Gojo y Sukuna. 3 años de cuenta activa.",
            sellerId: users["diana.campos@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-26T23:30:00Z"), // 11:30 PM
        },

        // --- Bryan Aguilar - GTA Online ---
        {
            code: "#VAL-090",
            title: "GTA Online - Rank 600, cayo perico heist desbloqueado",
            description: "Rank 600. Cayo Perico Heist desbloqueado con setup completo. Finca de Cayo comprada. 1B en banco.",
            sellerId: users["bryan.aguilar@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-23T15:20:00Z"), // 3:20 PM
        },
        {
            code: "#VAL-091",
            title: "GTA V Online PS5 - Rank 300, Oppressor MK2, T20",
            description: "Cuenta PS5. Rank 300. Oppressor MK2, T20 y varios supers. Garage lleno de autos modificados.",
            sellerId: users["bryan.aguilar@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-26T21:45:00Z"), // 9:45 PM
        },

        // --- Veronica Pena - Overwatch 2 ---
        {
            code: "#VAL-092",
            title: "Overwatch 2 - Tracer Noire skin rara + Champion DPS",
            description: "Skin Noire Tracer extremadamente rara (edición limitada 2016). Champion en DPS. Spray 10000 victorias.",
            sellerId: users["veronica.pena@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-23T18:00:00Z"), // 6:00 PM
        },
        {
            code: "#VAL-093",
            title: "Overwatch 2 - Platinum en 3 roles, cosméticos aniversario",
            description: "Platinum en DPS, Tank y Support. Cosméticos exclusivos aniversario 2021, 2022 y 2023.",
            sellerId: users["veronica.pena@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-27T22:30:00Z"), // 10:30 PM
        },

        // --- Samuel Guerrero - EA FC 25 ---
        {
            code: "#VAL-094",
            title: "EA FC 25 - Neymar Jr Icon Prime + squad 8M monedas",
            description: "Neymar Jr Prime Icon. Squad 8M en total. Rango Elite últimas 3 semanas. Account PS5.",
            sellerId: users["samuel.guerrero@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-24T14:40:00Z"), // 2:40 PM
        },
        {
            code: "#VAL-095",
            title: "EA FC 25 - Pack de monedas 2M + team sheet de liga",
            description: "2M monedas listas + equipo de Liga Española completo nivel 85+. Ideal para WL.",
            sellerId: users["samuel.guerrero@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-27T21:10:00Z"), // 9:10 PM
        },

        // --- Rocio Sandoval - Clash of Clans ---
        {
            code: "#VAL-096",
            title: "CoC TH16 + Clash Royale 7000 trofeos vinculados",
            description: "TH16 con tropas nuevas maxeadas + Clash Royale 7000 trofeos. Supercell ID activo.",
            sellerId: users["rocio.sandoval@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-24T17:30:00Z"), // 5:30 PM
        },
        {
            code: "#VAL-097",
            title: "Clash Royale - Arena 16 Champions, mazo Xbow cycle",
            description: "Arena 16. Mazo Xbow cycle top 10k trofeos global. Emotes exclusivos de eventos.",
            sellerId: users["rocio.sandoval@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-28T22:00:00Z"), // 10:00 PM
        },

        // --- Jose Bermudez - Steam ---
        {
            code: "#VAL-098",
            title: "Steam - Elden Ring + Shadow of Erdtree DLC, 300h",
            description: "Elden Ring + DLC Shadow of the Erdtree. 300 horas. Todos los finales vistos. Perfil privado incluido.",
            sellerId: users["jose.bermudez@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-25T13:20:00Z"), // 1:20 PM
        },
        {
            code: "#VAL-099",
            title: "Steam - Counter-Strike + Dota 2 + TF2 cuenta vetera",
            description: "Cuenta veterana con CS2, Dota 2, TF2. Medallas antiguas. Level Steam 120. 3000 horas Dota.",
            sellerId: users["jose.bermudez@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-28T19:15:00Z"), // 7:15 PM
        },

        // --- Claudia Nieto - Honkai Star Rail ---
        {
            code: "#VAL-100",
            title: "Honkai Star Rail - Trailblaze 65, Dr Ratio E2 Robin E1",
            description: "TL65. Dr. Ratio E2 y Robin E1. Simulated Universe 9 completado. 300 jades guardadas para proximo banner.",
            sellerId: users["claudia.nieto@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-25T16:00:00Z"), // 4:00 PM
        },
        {
            code: "#VAL-101",
            title: "Honkai Star Rail - Asia TL60, Blade E2 Bronya E1",
            description: "Blade E2 con su LC S5 + Bronya E1. Buena cuenta para MOC. Asia server.",
            sellerId: users["claudia.nieto@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-29T21:30:00Z"), // 9:30 PM
        },

        // --- Hugo Meza - Valorant ---
        {
            code: "#VAL-102",
            title: "Valorant - Diamond 3 actual, skin Elderflame Vandal",
            description: "Diamond 3 rank actual. Elderflame Vandal (skin premium nivel animado). Karambit cuchillo.",
            sellerId: users["hugo.meza@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-26T14:40:00Z"), // 2:40 PM
        },
        {
            code: "#VAL-103",
            title: "Valorant - Gold 3 fresh, sin historial sancion",
            description: "Gold 3 actual. Sin sanciones de ningún tipo. Email cambiable. Nivel 70.",
            sellerId: users["hugo.meza@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-30T20:10:00Z"), // 8:10 PM
        },

        // --- Monica Quispe - Genshin Impact ---
        {
            code: "#VAL-104",
            title: "Genshin Impact AR57 America - Arlecchino C1, Clorinde C0",
            description: "AR57 América. Arlecchino C1 con Staff of Scarlet Sands. Clorinde C0 con Absolution. Nuevos personajes S4.8.",
            sellerId: users["monica.quispe@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-26T15:30:00Z"), // 3:30 PM
        },
        {
            code: "#VAL-105",
            title: "Genshin AR52 Asia - Yelan C1 Xiao C1, cuenta activa",
            description: "Yelan C1 y Xiao C1. AR52 Asia. Daily activo. 36 estrellas Abyss consistente.",
            sellerId: users["monica.quispe@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-29T22:00:00Z"), // 10:00 PM
        },

        // --- Daniel Huanca - Mobile Legends ---
        {
            code: "#VAL-106",
            title: "Mobile Legends - Mythic 500 puntos, todos personajes S-tier",
            description: "Mythic 500 puntos. Todos los personajes S-tier del meta actualizados. Skin Collector Ling.",
            sellerId: users["daniel.huanca@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-27T14:15:00Z"), // 2:15 PM
        },
        {
            code: "#VAL-107",
            title: "MLBB - cuenta con nombre especial simbolos y epic",
            description: "Cuenta con nombre especial con símbolos. Epic en ranked. 40 heroes. Skin Granger Lightborn.",
            sellerId: users["daniel.huanca@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-31T20:45:00Z"), // 8:45 PM
        },

        // --- Ana Ticona - Roblox ---
        {
            code: "#VAL-108",
            title: "Roblox - Arsenal KO top 100 leaderboard, skins torneo",
            description: "Top 100 leaderboard Arsenal. Skins exclusivas de torneos. Cuenta con 150k visitas en juego propio.",
            sellerId: users["ana.ticona@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-27T16:00:00Z"), // 4:00 PM
        },
        {
            code: "#VAL-109",
            title: "Roblox - 50000 Robux acumulados, premium lifetime",
            description: "50k Robux acumulados en cuenta. Premium activo por 2 años más. Avatar con items exclusivos 2019.",
            sellerId: users["ana.ticona@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-04-01T21:30:00Z"), // 9:30 PM
        },

        // --- Luis Mamani - CS2 ---
        {
            code: "#VAL-110",
            title: "CS2 - Knife Butterfly Fade + AWP Dragon Lore FT",
            description: "Butterfly Knife Fade FN + AWP Dragon Lore Field-Tested. Inventario total $1200+. Sin ban VAC.",
            sellerId: users["luis.mamani@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-28T14:00:00Z"), // 2:00 PM
        },
        {
            code: "#VAL-111",
            title: "CS2 - Premier rating 18000+, cuenta limpia sin ban",
            description: "Premier rating 18000+. Sin infracción. Faceit nivel 9. Cuenta con medalla 10 años de Steam.",
            sellerId: users["luis.mamani@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-31T23:00:00Z"), // 11:00 PM
        },

        // --- Angela Condori - Fortnite ---
        {
            code: "#VAL-112",
            title: "Fortnite - Skull Trooper pink style + 150 skins",
            description: "Skull Trooper con estilo rosa exclusivo. 150 skins totales. Chapter 1 OG. Galaxy Skin incluida.",
            sellerId: users["angela.condori@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-28T15:30:00Z"), // 3:30 PM
        },
        {
            code: "#VAL-113",
            title: "Fortnite - Cuenta con skins colab Dragon Ball full set",
            description: "Set completo Dragon Ball: Goku, Vegeta, Beerus, Bulma y Krillin. Ultra Instinct Bundle.",
            sellerId: users["angela.condori@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-04-01T20:15:00Z"), // 8:15 PM
        },

        // --- Frank Arias - Apex Legends ---
        {
            code: "#VAL-114",
            title: "Apex Legends - Loba Heirloom + Predator S22",
            description: "Heirloom de Loba desbloqueado. Predator Season 22 verificado. Badges 20 bombs y 4k daño.",
            sellerId: users["frank.arias@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-29T13:40:00Z"), // 1:40 PM
        },
        {
            code: "#VAL-115",
            title: "Apex Legends - 8 leyendas con skins legend tier",
            description: "8 leyendas con skins Legendary. Octane, Wraith, Horizon, Caustic con sus mejores outfits.",
            sellerId: users["frank.arias@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-04-02T22:30:00Z"), // 10:30 PM
        },

        // --- Nathaly Barrios - LoL ---
        {
            code: "#VAL-116",
            title: "LoL - Emerald 1 LATAM, main Support, Thresh God",
            description: "Emerald 1 LATAM. Main Support con 800+ partidas en Thresh. Skin Dark Star Thresh y Ocean Song.",
            sellerId: users["nathaly.barrios@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-29T16:00:00Z"), // 4:00 PM
        },
        {
            code: "#VAL-117",
            title: "LoL - Silver LATAM level 200, 75 campeones, skins event",
            description: "Level 200, Silver estable. 75 campeones. Skins exclusivas de eventos: Star Guardian Jinx y Battle Academia.",
            sellerId: users["nathaly.barrios@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-04-02T19:40:00Z"), // 7:40 PM
        },

        // --- Edgar Palacios - EA FC 25 ---
        {
            code: "#VAL-118",
            title: "EA FC 25 - Ronaldo TOTY + Messi Icon, squad dream team",
            description: "CR7 TOTY IF 98 + Messi Copa del Mundo Icon 97. Squad dream team valorado en 20M.",
            sellerId: users["edgar.palacios@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-30T14:20:00Z"), // 2:20 PM
        },
        {
            code: "#VAL-119",
            title: "EA FC 25 - Monedas farmeadas 3M listas para usar",
            description: "3M monedas listas. Cuenta semivirgen para usar. Email cambiable.",
            sellerId: users["edgar.palacios@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-04-03T21:00:00Z"), // 9:00 PM
        },

        // --- Xiomara Leon - Genshin ---
        {
            code: "#VAL-120",
            title: "Genshin AR60 America - Zhongli C6 Raiden C2 Eula C2",
            description: "Cuenta whale AR60 América. Zhongli C6, Raiden C2, Eula C2 todas con armas 5 estrellas R2+. Colección completa S1-4.",
            sellerId: users["xiomara.leon@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-30T16:30:00Z"), // 4:30 PM
        },
        {
            code: "#VAL-121",
            title: "Genshin AR55 Europa - Wriothesley C1 Navia C0",
            description: "AR55 Europa. Wriothesley C1 + Navia C0. Fontaine quests completas. 12/12 Abyss.",
            sellerId: users["xiomara.leon@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-04-03T23:50:00Z"), // 11:50 PM
        },

        // --- Raul Choque - Valorant ---
        {
            code: "#VAL-122",
            title: "Valorant LAS - Platinum 1, nivel 120, bundle Oni completo",
            description: "Platinum 1 LAS. Nivel 120. Bundle Oni completo (Vandal + Phantom + Ares + Melee).",
            sellerId: users["raul.choque@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-31T14:00:00Z"), // 2:00 PM
        },
        {
            code: "#VAL-123",
            title: "Valorant - Account con Night Market 10 skins compradas rebajadas",
            description: "Cuenta que tuvo night market activo. 10 skins compradas con rebaja. Vandal RGX y Phantom Kuronami.",
            sellerId: users["raul.choque@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-04-04T18:30:00Z"), // 6:30 PM
        },

        // --- Milagros Quispe - Minecraft ---
        {
            code: "#VAL-124",
            title: "Minecraft Java - Cuenta con servidor SMP activo incluido",
            description: "Cuenta Java + acceso a servidor SMP Lifesteal activo. 30 jugadores regulares. Mundo activo 6 meses.",
            sellerId: users["milagros.quispe@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-31T15:00:00Z"), // 3:00 PM
        },
        {
            code: "#VAL-125",
            title: "Minecraft Java - Username largo pero raro, cape Optifine",
            description: "Username único disponible. Cape Optifine y Anniversary. Hypixel nivel 200. SkyBlock con perfil avanzado.",
            sellerId: users["milagros.quispe@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-04-04T22:15:00Z"), // 10:15 PM
        },
    ];

    let count = 0;
    for (const t of tickets) {
        if (!t.sellerId) {
            console.warn(`⚠️  Skipping ticket ${t.code} - seller not found`);
            continue;
        }

        // upsert: Busca por código. Si existe no actualiza nada, si no existe lo crea.
        await prisma.ticket.upsert({
            where: { code: t.code },
            update: {},
            create: {
                code: t.code,
                title: t.title,
                description: t.description ?? null,
                sellerId: t.sellerId,
                status: t.status,
                createdAt: t.createdAt,
            },
        });
        count++;
    }

    console.log(`✅ seedTickets2: ${count} tickets upserted`);
}