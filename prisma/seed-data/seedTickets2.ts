import { PrismaClient } from "@/app/generated/prisma/client";
import { TicketStatus } from "@/app/generated/prisma/enums";

export async function seedTickets2(
    prisma: PrismaClient,
    users: Record<string, { id: string; email: string }>
) {
    const tickets = [
        // --- Alejandro Cruz - Valorant ---
        {
            code: "#T041",
            title: "Valorant - Ascendant 3, agentes con contratos completos",
            description: "Ascendant 3 peak. Contratos de Jett, Reyna, Omen y Killjoy completos. Skins battle pass S5 y S6.",
            sellerPhone: "+51987019001",
            sellerId: users["alejandro.cruz@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-13T09:30:00Z"),
        },
        {
            code: "#T042",
            title: "Valorant - Cuenta smurf Bronce, nivel 20",
            description: "Smurf limpia nivel 20. Sin historial de ban. Email cambiable. Buena para practicar.",
            sellerPhone: "+51987019001",
            sellerId: users["alejandro.cruz@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-14T11:00:00Z"),
        },
        {
            code: "#T043",
            title: "Valorant - Radiant S4, prime colección completa",
            description: "Radiant S4 peak. Colección Prime completa (Vandal, Phantom, Knife). Skin Spectrum Phantom incluida.",
            sellerPhone: "+51987019001",
            sellerId: users["alejandro.cruz@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-16T10:00:00Z"),
        },

        // --- Valeria Montoya - Free Fire ---
        {
            code: "#T044",
            title: "Free Fire - Cuenta con colaboracion Demon Slayer",
            description: "Skins exclusivas colaboración Demon Slayer. Tanjiro y Zenitsu outfits. Nivel 70. Headshot rate 52%.",
            sellerPhone: "+51987020001",
            sellerId: users["valeria.montoya@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-13T14:00:00Z"),
        },
        {
            code: "#T045",
            title: "Free Fire MAX - Grandmaster, gloo wall skins exclusivas",
            description: "Rango Grandmaster. 5 gloo wall skins raras incluyendo Floral y Fire Ring. Buena velocidad de lanzamiento.",
            sellerPhone: "+51987020001",
            sellerId: users["valeria.montoya@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-15T09:00:00Z"),
        },

        // --- Nicolas Peña - Genshin Impact ---
        {
            code: "#T046",
            title: "Genshin Impact AR60 - Europa, cuenta old, Venti C2 Zhongli C2",
            description: "AR60 servidor Europa. Cuenta desde 2020. Venti C2, Zhongli C2, Albedo C1. Armas 5 estrellas variadas. Primo gems para próximo banner.",
            sellerPhone: "+51987021001",
            sellerId: users["nicolas.peña@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-13T10:30:00Z"),
        },
        {
            code: "#T047",
            title: "Genshin Impact AR50 - Asia, Ayaka C0 Ganyu C0",
            description: "Ayaka y Ganyu sin constelaciones pero con armas refinadas. AR50 Asia. Spiral Abyss 9 estrellas.",
            sellerPhone: "+51987021001",
            sellerId: users["nicolas.peña@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-15T13:00:00Z"),
        },

        // --- Gabriela Vargas - Minecraft ---
        {
            code: "#T048",
            title: "Minecraft Java - Hypixel Bedwars Winstreak 10+, estadisticas limpias",
            description: "Cuenta Hypixel con winstreak en Bedwars de 10+. Stats limpias. Nivel 150. MVP++ activo.",
            sellerPhone: "+51987022001",
            sellerId: users["gabriela.vargas@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-14T08:30:00Z"),
        },
        {
            code: "#T049",
            title: "Minecraft Java OG 2011 - usuario premium antiguo",
            description: "Cuenta Java creada en 2011. Username corto de 4 letras disponible. Historial limpio. Sin capas especiales.",
            sellerPhone: "+51987022001",
            sellerId: users["gabriela.vargas@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-16T11:00:00Z"),
        },

        // --- Juan Espinoza - CS2 ---
        {
            code: "#T050",
            title: "CS2 - Cuenta Faceit Nivel 10, inventario $500",
            description: "Faceit Nivel 10 verificado. Inventario CS2 valorado en $500: Karambit Fade, M4A1-S Hot Rod, varios flotes FN.",
            sellerPhone: "+51987023001",
            sellerId: users["juan.espinoza@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-14T10:00:00Z"),
        },
        {
            code: "#T051",
            title: "CS2 - Silver Elite, cuenta para smurfear, no baneada",
            description: "Cuenta smurf Silver Elite. Prime status activo. Sin ban VAC ni cooldown. Ideal para entrenar con amigos.",
            sellerPhone: "+51987023001",
            sellerId: users["juan.espinoza@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-16T09:00:00Z"),
        },

        // --- Paula Ibarra - Apex Legends ---
        {
            code: "#T052",
            title: "Apex Legends - Bloodhound Heirloom, Masters S18",
            description: "Heirloom de Bloodhound desbloqueado. Masters S18. Badges múltiples 4000 daño. Lifeline con skins legendarias.",
            sellerPhone: "+51987024001",
            sellerId: users["paula.ibarra@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-14T13:30:00Z"),
        },
        {
            code: "#T053",
            title: "Apex Legends - Cuenta con 15 leyendas full skins",
            description: "15 leyendas con skins legendarias cada una. Revenant Heirloom. Platinum este split.",
            sellerPhone: "+51987024001",
            sellerId: users["paula.ibarra@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-17T10:00:00Z"),
        },

        // --- Cristian Medina - Roblox ---
        {
            code: "#T054",
            title: "Roblox - Dominus Empyreus limitado, cuenta OG",
            description: "Cuenta OG con Dominus Empyreus (item limitado raro). Más de 100k R$ en inventario total.",
            sellerPhone: "+51987025001",
            sellerId: users["cristian.medina@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-14T15:00:00Z"),
        },
        {
            code: "#T055",
            title: "Roblox - Cuenta con grupo activo 5000 miembros",
            description: "Cuenta dueña de grupo con 5000 miembros activos. Fondos del grupo incluidos. Buen para monetizar.",
            sellerPhone: "+51987025001",
            sellerId: users["cristian.medina@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-18T09:30:00Z"),
        },

        // --- Renata Flores - Mobile Legends ---
        {
            code: "#T056",
            title: "Mobile Legends - Mythic Glory 800 puntos, Chou Collector",
            description: "Mythic Glory 800+ puntos. Skin Collector Chou y Kagura. Cuenta con pase de batalla 3 temporadas.",
            sellerPhone: "+51987026001",
            sellerId: users["renata.flores@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-15T10:00:00Z"),
        },
        {
            code: "#T057",
            title: "Mobile Legends - cuenta starter epic 60 heroes",
            description: "60 heroes desbloqueados. Epic varios. Buena base para nuevo jugador que quiere ventaja.",
            sellerPhone: "+51987026001",
            sellerId: users["renata.flores@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-17T14:00:00Z"),
        },

        // --- Emilio Romero - GTA V Online ---
        {
            code: "#T058",
            title: "GTA Online - Todas las propiedades, $5B en banco",
            description: "Todas las propiedades compradas: CEO, Hangar, Arcade, Kosatka, Auto Shop, Club nocturno. 5 billones en banco. Rank 800.",
            sellerPhone: "+51987027001",
            sellerId: users["emilio.romero@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-15T12:00:00Z"),
        },
        {
            code: "#T059",
            title: "GTA V Online - Rank 120, Kosatka starter, PC",
            description: "Kosatka comprada. Rank 120 limpio. Cuenta PC. Sin ban ni restricciones Rockstar.",
            sellerPhone: "+51987027001",
            sellerId: users["emilio.romero@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-18T10:00:00Z"),
        },

        // --- Andrea Silva - Fortnite ---
        {
            code: "#T060",
            title: "Fortnite - Account Travis Scott + Marvel skins",
            description: "Skin Travis Scott Astronomical exclusiva + Spider-Man, Iron Man, Thanos. Chapter 1 Season 3 vieja.",
            sellerPhone: "+51987028001",
            sellerId: users["andrea.silva@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-15T14:30:00Z"),
        },
        {
            code: "#T061",
            title: "Fortnite - OG Reaper (John Wick) skin + Ghoul Trooper",
            description: "Reaper y Ghoul Trooper. Cuenta capítulo 1 temporada 4 original. Pickaxe Raider's Revenge.",
            sellerPhone: "+51987028001",
            sellerId: users["andrea.silva@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-17T09:00:00Z"),
        },

        // --- Tomas Carrillo - LoL ---
        {
            code: "#T062",
            title: "LoL - Challenger LATAM, peak S14, cuenta de 10 años",
            description: "Challenger Season 14 en LATAM. Cuenta activa desde S4. Skins raras: PAX TF, Victorious Janna. 400+ skins totales.",
            sellerPhone: "+51987029001",
            sellerId: users["tomas.carrillo@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-16T10:00:00Z"),
        },
        {
            code: "#T063",
            title: "LoL LATAM - Gold 4, 150 campeones, cuenta normal",
            description: "Gold 4 estable. 150 campeones. Buenas skins de temporada. Nunca infracción Honorable.",
            sellerPhone: "+51987029001",
            sellerId: users["tomas.carrillo@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-18T13:00:00Z"),
        },

        // --- Karen Delgado - Overwatch 2 ---
        {
            code: "#T064",
            title: "Overwatch 2 - Mercy Pink skin + Support Grandmaster",
            description: "Skin exclusiva Mercy Pink (edición limitada caridad). Grandmaster en Support. Muchos sprays legendarios.",
            sellerPhone: "+51987030001",
            sellerId: users["karen.delgado@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-16T11:30:00Z"),
        },
        {
            code: "#T065",
            title: "Overwatch 2 - Nivel 1000, skins Blizzcon exclusivas",
            description: "Nivel 1000+. Skins exclusivas BlizzCon 2019 Demon Hunter Sombra y Tyrael Pharah.",
            sellerPhone: "+51987030001",
            sellerId: users["karen.delgado@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-19T09:00:00Z"),
        },

        // --- Oscar Villa - Diablo IV ---
        {
            code: "#T066",
            title: "Diablo IV - Sorceress full BiS Season of the Construct",
            description: "Sorceress full BiS Season of the Construct. Paragon 200. Equipo optimizado para pit 100+.",
            sellerPhone: "+51987031001",
            sellerId: users["oscar.villa@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-17T08:30:00Z"),
        },
        {
            code: "#T067",
            title: "Diablo IV - Cuenta con expansión Vessel of Hatred",
            description: "Acceso a expansión Vessel of Hatred. Spiritborn nivel 100. Cosméticos premium del shop.",
            sellerPhone: "+51987031001",
            sellerId: users["oscar.villa@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-20T11:00:00Z"),
        },

        // --- Paola Restrepo - Clash of Clans ---
        {
            code: "#T068",
            title: "CoC - TH15, 6 constructores, héroe nivel 80",
            description: "TH15. 6 constructores activos. Bárbaro Rey nivel 80, Reina Arquera nivel 80. Clan guerra campeón 1.",
            sellerPhone: "+51987032001",
            sellerId: users["paola.restrepo@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-17T14:00:00Z"),
        },
        {
            code: "#T069",
            title: "Clash Royale + CoC cuenta vinculada Supercell ID",
            description: "CoC TH12 + Clash Royale Arena 14 vinculados al mismo Supercell ID. Doble juego.",
            sellerPhone: "+51987032001",
            sellerId: users["paola.restrepo@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-21T10:00:00Z"),
        },

        // --- Kevin Zapata - PUBG Mobile ---
        {
            code: "#T070",
            title: "PUBG Mobile - Ace Master, M416 Glacier FN",
            description: "Ace Master esta temporada. M416 Glacier Factory New. Traje premium Ronin. 5000 UC guardadas.",
            sellerPhone: "+51987033001",
            sellerId: users["kevin.zapata@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-18T09:00:00Z"),
        },
        {
            code: "#T071",
            title: "PUBG Mobile - Crown 5, outfits colección Elite",
            description: "Crown 5. Colección Elite temporada anterior completa. Buen KDA 3.5. Cuenta 3 años de antigüedad.",
            sellerPhone: "+51987033001",
            sellerId: users["kevin.zapata@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-20T12:00:00Z"),
        },

        // --- Lorena Acosta - Steam ---
        {
            code: "#T072",
            title: "Steam - The Witcher 3, Cyberpunk 2077 + 80 juegos",
            description: "Cuenta Steam con Witcher 3 GOTY, Cyberpunk 2077 con DLC Phantom Liberty. 80 juegos adicionales. Nivel Steam 50.",
            sellerPhone: "+51987034001",
            sellerId: users["lorena.acosta@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-18T14:00:00Z"),
        },
        {
            code: "#T073",
            title: "Steam - Cuenta con 10000 horas Dota 2, Immortal items",
            description: "10000 horas en Dota 2. Arcana Lina, Arcana Phantom Assassin. Immortal rank.",
            sellerPhone: "+51987034001",
            sellerId: users["lorena.acosta@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-22T09:00:00Z"),
        },

        // --- Ivan Ortega - EA FC 25 ---
        {
            code: "#T074",
            title: "EA FC 25 - Squad 10M monedas, Mbappe TOTY IF",
            description: "Squad valorado en 10 millones. Mbappe TOTY IF, Vinicius EVO 97, Haaland SBC 95. Estrellas de habilidad completas.",
            sellerPhone: "+51987035001",
            sellerId: users["ivan.ortega@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-19T10:00:00Z"),
        },
        {
            code: "#T075",
            title: "EA FC 25 - FUT Draft tokens x5 + 500k monedas",
            description: "5 tokens FUT Draft + 500k monedas listos. Ideal para construir equipo desde cero.",
            sellerPhone: "+51987035001",
            sellerId: users["ivan.ortega@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-22T11:00:00Z"),
        },

        // --- Sara Blanco - Resident Evil ---
        {
            code: "#T076",
            title: "RE2 Remake + RE3 Remake - Steam bundle con logros",
            description: "Bundle RE2 y RE3 Remake en Steam. RE2 100% logros. RE3 completado Nightmare.",
            sellerPhone: "+51987036001",
            sellerId: users["sara.blanco@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-19T14:30:00Z"),
        },
        {
            code: "#T077",
            title: "Resident Evil Village + RE7 - PS5 digital",
            description: "Ambos en PS5 digital. Village con DLC. RE7 Biohazard completo. Guardado en la nube.",
            sellerPhone: "+51987036001",
            sellerId: users["sara.blanco@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-23T09:00:00Z"),
        },

        // --- Mario Suarez - Valorant ---
        {
            code: "#T078",
            title: "Valorant - Nivel 500, coleccion Ion completa",
            description: "Nivel 500. Colección Ion completa (Vandal, Phantom, Operator, Sheriff, Knife). Skins premium bundle.",
            sellerPhone: "+51987037001",
            sellerId: users["mario.suarez@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-20T09:00:00Z"),
        },
        {
            code: "#T079",
            title: "Valorant - Peak Immortal 3, skins variadas 25",
            description: "Peak Immortal 3. 25 skins distintas incluyendo Singularity Phantom y Glitchpop Frenzy.",
            sellerPhone: "+51987037001",
            sellerId: users["mario.suarez@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-22T10:00:00Z"),
        },

        // --- Patricia Leal - Free Fire ---
        {
            code: "#T080",
            title: "Free Fire - Colaboracion BTS, skins exclusivas K",
            description: "Skins exclusivas colaboración BTS que ya no están disponibles. Personaje K nivel 8. Outfit full set.",
            sellerPhone: "+51987038001",
            sellerId: users["patricia.leal@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-20T13:00:00Z"),
        },
        {
            code: "#T081",
            title: "Free Fire - Servidor Brazil, ID corto 7 digitos",
            description: "ID de 7 dígitos corto en servidor Brazil. Nivel 75. Skins weapon bundle Fire.",
            sellerPhone: "+51987038001",
            sellerId: users["patricia.leal@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-23T11:00:00Z"),
        },

        // --- Henry Pinto - Genshin Impact ---
        {
            code: "#T082",
            title: "Genshin AR58 America - Furina C2 Neuvillette C1, meta build",
            description: "Furina C2 + Neuvillette C1 full meta. AR58 América. 36 estrellas Abyss consistente. 50k primo gems gastadas en cuenta.",
            sellerPhone: "+51987039001",
            sellerId: users["henry.pinto@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-21T09:00:00Z"),
        },
        {
            code: "#T083",
            title: "Honkai Star Rail - Acheron E2, Dan Heng Imbibitor E1",
            description: "Honkai Star Rail cuenta Asia. Acheron E2 con su LC. Dan Heng Imbibitor Lunae E1. Equilibrium 6.",
            sellerPhone: "+51987039001",
            sellerId: users["henry.pinto@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-24T10:00:00Z"),
        },

        // --- Jimena Cabrera - Minecraft ---
        {
            code: "#T084",
            title: "Minecraft Java - Username corto 5 letras disponible",
            description: "Username limpio de 5 letras actualmente disponible para cambio. Java edition 2019. Hypixel nivel 100.",
            sellerPhone: "+51987040001",
            sellerId: users["jimena.cabrera@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-21T14:00:00Z"),
        },
        {
            code: "#T085",
            title: "Minecraft Java - Servidor privado activo 50 jugadores incluido",
            description: "Cuenta + acceso a servidor privado con 50 jugadores activos. Plugins personalizados. SMP survival economy.",
            sellerPhone: "+51987040001",
            sellerId: users["jimena.cabrera@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-25T09:00:00Z"),
        },

        // --- Alex Ramos - LoL ---
        {
            code: "#T086",
            title: "LoL LATAM - Diamond 2, account con skins event limitadas",
            description: "Diamond 2 esta temporada. Skins exclusivas de evento: Victorious Sivir, Victorious Morgana, Championship Ryze.",
            sellerPhone: "+51987041001",
            sellerId: users["alex.ramos@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-22T09:30:00Z"),
        },
        {
            code: "#T087",
            title: "LoL - Cuenta EUW Platinum, 200 skins, email original",
            description: "EUW Platinum estable. 200 skins. Email original incluido con la cuenta. Honor nivel 4.",
            sellerPhone: "+51987041001",
            sellerId: users["alex.ramos@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-25T11:00:00Z"),
        },

        // --- Diana Campos - PUBG Mobile ---
        {
            code: "#T088",
            title: "PUBG Mobile - Cuenta Conqueror S30, RP max",
            description: "Conqueror S30 verificado. RP máximo con recompensas desbloqueadas. UMP45 Glacier incluido.",
            sellerPhone: "+51987042001",
            sellerId: users["diana.campos@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-22T14:00:00Z"),
        },
        {
            code: "#T089",
            title: "PUBG Mobile - Ace con outfits de colaboracion Jujutsu",
            description: "Ace rank. Outfits colaboración Jujutsu Kaisen Gojo y Sukuna. 3 años de cuenta activa.",
            sellerPhone: "+51987042001",
            sellerId: users["diana.campos@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-26T09:00:00Z"),
        },

        // --- Bryan Aguilar - GTA Online ---
        {
            code: "#T090",
            title: "GTA Online - Rank 600, cayo perico heist desbloqueado",
            description: "Rank 600. Cayo Perico Heist desbloqueado con setup completo. Finca de Cayo comprada. 1B en banco.",
            sellerPhone: "+51987043001",
            sellerId: users["bryan.aguilar@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-23T09:00:00Z"),
        },
        {
            code: "#T091",
            title: "GTA V Online PS5 - Rank 300, Oppressor MK2, T20",
            description: "Cuenta PS5. Rank 300. Oppressor MK2, T20 y varios supers. Garage lleno de autos modificados.",
            sellerPhone: "+51987043001",
            sellerId: users["bryan.aguilar@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-26T12:00:00Z"),
        },

        // --- Veronica Pena - Overwatch 2 ---
        {
            code: "#T092",
            title: "Overwatch 2 - Tracer Noire skin rara + Champion DPS",
            description: "Skin Noire Tracer extremadamente rara (edición limitada 2016). Champion en DPS. Spray 10000 victorias.",
            sellerPhone: "+51987044001",
            sellerId: users["veronica.pena@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-23T14:00:00Z"),
        },
        {
            code: "#T093",
            title: "Overwatch 2 - Platinum en 3 roles, cosméticos aniversario",
            description: "Platinum en DPS, Tank y Support. Cosméticos exclusivos aniversario 2021, 2022 y 2023.",
            sellerPhone: "+51987044001",
            sellerId: users["veronica.pena@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-27T10:00:00Z"),
        },

        // --- Samuel Guerrero - EA FC 25 ---
        {
            code: "#T094",
            title: "EA FC 25 - Neymar Jr Icon Prime + squad 8M monedas",
            description: "Neymar Jr Prime Icon. Squad 8M en total. Rango Elite últimas 3 semanas. Account PS5.",
            sellerPhone: "+51987045001",
            sellerId: users["samuel.guerrero@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-24T09:00:00Z"),
        },
        {
            code: "#T095",
            title: "EA FC 25 - Pack de monedas 2M + team sheet de liga",
            description: "2M monedas listas + equipo de Liga Española completo nivel 85+. Ideal para WL.",
            sellerPhone: "+51987045001",
            sellerId: users["samuel.guerrero@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-27T12:00:00Z"),
        },

        // --- Rocio Sandoval - Clash of Clans ---
        {
            code: "#T096",
            title: "CoC TH16 + Clash Royale 7000 trofeos vinculados",
            description: "TH16 con tropas nuevas maxeadas + Clash Royale 7000 trofeos. Supercell ID activo.",
            sellerPhone: "+51987046001",
            sellerId: users["rocio.sandoval@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-24T14:00:00Z"),
        },
        {
            code: "#T097",
            title: "Clash Royale - Arena 16 Champions, mazo Xbow cycle",
            description: "Arena 16. Mazo Xbow cycle top 10k trofeos global. Emotes exclusivos de eventos.",
            sellerPhone: "+51987046001",
            sellerId: users["rocio.sandoval@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-28T09:00:00Z"),
        },

        // --- Jose Bermudez - Steam ---
        {
            code: "#T098",
            title: "Steam - Elden Ring + Shadow of Erdtree DLC, 300h",
            description: "Elden Ring + DLC Shadow of the Erdtree. 300 horas. Todos los finales vistos. Perfil privado incluido.",
            sellerPhone: "+51987047001",
            sellerId: users["jose.bermudez@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-25T09:30:00Z"),
        },
        {
            code: "#T099",
            title: "Steam - Counter-Strike + Dota 2 + TF2 cuenta vetera",
            description: "Cuenta veterana con CS2, Dota 2, TF2. Medallas antiguas. Level Steam 120. 3000 horas Dota.",
            sellerPhone: "+51987047001",
            sellerId: users["jose.bermudez@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-28T12:00:00Z"),
        },

        // --- Claudia Nieto - Honkai Star Rail ---
        {
            code: "#T100",
            title: "Honkai Star Rail - Trailblaze 65, Dr Ratio E2 Robin E1",
            description: "TL65. Dr. Ratio E2 y Robin E1. Simulated Universe 9 completado. 300 jades guardadas para proximo banner.",
            sellerPhone: "+51987048001",
            sellerId: users["claudia.nieto@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-25T14:00:00Z"),
        },
        {
            code: "#T101",
            title: "Honkai Star Rail - Asia TL60, Blade E2 Bronya E1",
            description: "Blade E2 con su LC S5 + Bronya E1. Buena cuenta para MOC. Asia server.",
            sellerPhone: "+51987048001",
            sellerId: users["claudia.nieto@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-29T10:00:00Z"),
        },

        // --- Hugo Meza - Valorant ---
        {
            code: "#T102",
            title: "Valorant - Diamond 3 actual, skin Elderflame Vandal",
            description: "Diamond 3 rank actual. Elderflame Vandal (skin premium nivel animado). Karambit cuchillo.",
            sellerPhone: "+51987049001",
            sellerId: users["hugo.meza@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-26T09:00:00Z"),
        },
        {
            code: "#T103",
            title: "Valorant - Gold 3 fresh, sin historial sancion",
            description: "Gold 3 actual. Sin sanciones de ningún tipo. Email cambiable. Nivel 70.",
            sellerPhone: "+51987049001",
            sellerId: users["hugo.meza@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-30T11:00:00Z"),
        },

        // --- Monica Quispe - Genshin Impact ---
        {
            code: "#T104",
            title: "Genshin Impact AR57 America - Arlecchino C1, Clorinde C0",
            description: "AR57 América. Arlecchino C1 con Staff of Scarlet Sands. Clorinde C0 con Absolution. Nuevos personajes S4.8.",
            sellerPhone: "+51987050001",
            sellerId: users["monica.quispe@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-26T13:00:00Z"),
        },
        {
            code: "#T105",
            title: "Genshin AR52 Asia - Yelan C1 Xiao C1, cuenta activa",
            description: "Yelan C1 y Xiao C1. AR52 Asia. Daily activo. 36 estrellas Abyss consistente.",
            sellerPhone: "+51987050001",
            sellerId: users["monica.quispe@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-29T09:00:00Z"),
        },

        // --- Daniel Huanca - Mobile Legends ---
        {
            code: "#T106",
            title: "Mobile Legends - Mythic 500 puntos, todos personajes S-tier",
            description: "Mythic 500 puntos. Todos los personajes S-tier del meta actualizados. Skin Collector Ling.",
            sellerPhone: "+51987051001",
            sellerId: users["daniel.huanca@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-27T09:00:00Z"),
        },
        {
            code: "#T107",
            title: "MLBB - cuenta con nombre especial simbolos y epic",
            description: "Cuenta con nombre especial con símbolos. Epic en ranked. 40 heroes. Skin Granger Lightborn.",
            sellerPhone: "+51987051001",
            sellerId: users["daniel.huanca@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-31T10:00:00Z"),
        },

        // --- Ana Ticona - Roblox ---
        {
            code: "#T108",
            title: "Roblox - Arsenal KO top 100 leaderboard, skins torneo",
            description: "Top 100 leaderboard Arsenal. Skins exclusivas de torneos. Cuenta con 150k visitas en juego propio.",
            sellerPhone: "+51987052001",
            sellerId: users["ana.ticona@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-27T14:00:00Z"),
        },
        {
            code: "#T109",
            title: "Roblox - 50000 Robux acumulados, premium lifetime",
            description: "50k Robux acumulados en cuenta. Premium activo por 2 años más. Avatar con items exclusivos 2019.",
            sellerPhone: "+51987052001",
            sellerId: users["ana.ticona@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-04-01T09:00:00Z"),
        },

        // --- Luis Mamani - CS2 ---
        {
            code: "#T110",
            title: "CS2 - Knife Butterfly Fade + AWP Dragon Lore FT",
            description: "Butterfly Knife Fade FN + AWP Dragon Lore Field-Tested. Inventario total $1200+. Sin ban VAC.",
            sellerPhone: "+51987053001",
            sellerId: users["luis.mamani@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-28T09:00:00Z"),
        },
        {
            code: "#T111",
            title: "CS2 - Premier rating 18000+, cuenta limpia sin ban",
            description: "Premier rating 18000+. Sin infracción. Faceit nivel 9. Cuenta con medalla 10 años de Steam.",
            sellerPhone: "+51987053001",
            sellerId: users["luis.mamani@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-31T09:00:00Z"),
        },

        // --- Angela Condori - Fortnite ---
        {
            code: "#T112",
            title: "Fortnite - Skull Trooper pink style + 150 skins",
            description: "Skull Trooper con estilo rosa exclusivo. 150 skins totales. Chapter 1 OG. Galaxy Skin incluida.",
            sellerPhone: "+51987054001",
            sellerId: users["angela.condori@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-28T14:00:00Z"),
        },
        {
            code: "#T113",
            title: "Fortnite - Cuenta con skins colab Dragon Ball full set",
            description: "Set completo Dragon Ball: Goku, Vegeta, Beerus, Bulma y Krillin. Ultra Instinct Bundle.",
            sellerPhone: "+51987054001",
            sellerId: users["angela.condori@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-04-01T14:00:00Z"),
        },

        // --- Frank Arias - Apex Legends ---
        {
            code: "#T114",
            title: "Apex Legends - Loba Heirloom + Predator S22",
            description: "Heirloom de Loba desbloqueado. Predator Season 22 verificado. Badges 20 bombs y 4k daño.",
            sellerPhone: "+51987055001",
            sellerId: users["frank.arias@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-29T09:30:00Z"),
        },
        {
            code: "#T115",
            title: "Apex Legends - 8 leyendas con skins legend tier",
            description: "8 leyendas con skins Legendary. Octane, Wraith, Horizon, Caustic con sus mejores outfits.",
            sellerPhone: "+51987055001",
            sellerId: users["frank.arias@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-04-02T10:00:00Z"),
        },

        // --- Nathaly Barrios - LoL ---
        {
            code: "#T116",
            title: "LoL - Emerald 1 LATAM, main Support, Thresh God",
            description: "Emerald 1 LATAM. Main Support con 800+ partidas en Thresh. Skin Dark Star Thresh y Ocean Song.",
            sellerPhone: "+51987056001",
            sellerId: users["nathaly.barrios@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-29T14:00:00Z"),
        },
        {
            code: "#T117",
            title: "LoL - Silver LATAM level 200, 75 campeones, skins event",
            description: "Level 200, Silver estable. 75 campeones. Skins exclusivas de eventos: Star Guardian Jinx y Battle Academia.",
            sellerPhone: "+51987056001",
            sellerId: users["nathaly.barrios@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-04-02T13:00:00Z"),
        },

        // --- Edgar Palacios - EA FC 25 ---
        {
            code: "#T118",
            title: "EA FC 25 - Ronaldo TOTY + Messi Icon, squad dream team",
            description: "CR7 TOTY IF 98 + Messi Copa del Mundo Icon 97. Squad dream team valorado en 20M.",
            sellerPhone: "+51987057001",
            sellerId: users["edgar.palacios@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-30T10:00:00Z"),
        },
        {
            code: "#T119",
            title: "EA FC 25 - Monedas farmeadas 3M listas para usar",
            description: "3M monedas listas. Cuenta semivirgen para usar. Email cambiable.",
            sellerPhone: "+51987057001",
            sellerId: users["edgar.palacios@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-04-03T09:00:00Z"),
        },

        // --- Xiomara Leon - Genshin ---
        {
            code: "#T120",
            title: "Genshin AR60 America - Zhongli C6 Raiden C2 Eula C2",
            description: "Cuenta whale AR60 América. Zhongli C6, Raiden C2, Eula C2 todas con armas 5 estrellas R2+. Colección completa S1-4.",
            sellerPhone: "+51987058001",
            sellerId: users["xiomara.leon@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-03-30T14:00:00Z"),
        },
        {
            code: "#T121",
            title: "Genshin AR55 Europa - Wriothesley C1 Navia C0",
            description: "AR55 Europa. Wriothesley C1 + Navia C0. Fontaine quests completas. 12/12 Abyss.",
            sellerPhone: "+51987058001",
            sellerId: users["xiomara.leon@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-04-03T12:00:00Z"),
        },

        // --- Raul Choque - Valorant ---
        {
            code: "#T122",
            title: "Valorant LAS - Platinum 1, nivel 120, bundle Oni completo",
            description: "Platinum 1 LAS. Nivel 120. Bundle Oni completo (Vandal + Phantom + Ares + Melee).",
            sellerPhone: "+51987059001",
            sellerId: users["raul.choque@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-31T09:30:00Z"),
        },
        {
            code: "#T123",
            title: "Valorant - Account con Night Market 10 skins compradas rebajadas",
            description: "Cuenta que tuvo night market activo. 10 skins compradas con rebaja. Vandal RGX y Phantom Kuronami.",
            sellerPhone: "+51987059001",
            sellerId: users["raul.choque@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-04-04T10:00:00Z"),
        },

        // --- Milagros Quispe - Minecraft ---
        {
            code: "#T124",
            title: "Minecraft Java - Cuenta con servidor SMP activo incluido",
            description: "Cuenta Java + acceso a servidor SMP Lifesteal activo. 30 jugadores regulares. Mundo activo 6 meses.",
            sellerPhone: "+51987060001",
            sellerId: users["milagros.quispe@inc.com"]?.id,
            status: TicketStatus.AVAILABLE,
            createdAt: new Date("2026-03-31T14:00:00Z"),
        },
        {
            code: "#T125",
            title: "Minecraft Java - Username largo pero raro, cape Optifine",
            description: "Username único disponible. Cape Optifine y Anniversary. Hypixel nivel 200. SkyBlock con perfil avanzado.",
            sellerPhone: "+51987060001",
            sellerId: users["milagros.quispe@inc.com"]?.id,
            status: TicketStatus.COMPLETED,
            createdAt: new Date("2026-04-04T14:00:00Z"),
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
                description: t.description ?? null,
                sellerPhone: t.sellerPhone ?? null,
                sellerId: t.sellerId,
                status: t.status,
                createdAt: t.createdAt,
            },
        });
        count++;
    }

    console.log(`✅ seedTickets2: ${count} tickets upserted`);
}