import { PrismaClient } from "@/app/generated/prisma/client";

export async function seedLoungeMessages(
    prisma: PrismaClient,
    users: Record<string, { id: string; email: string }>
) {
    // Helper to get user ID safely
    const uid = (email: string) => users[email]?.id;

    const messages = [
        // --- Semana 1: 2-8 marzo ---
        {
            text: "hola a todos!! acabo de entrar a esta web, alguien me puede explicar como funciona esto?",
            senderId: uid("pedro.alonso@inc.com"),
            createdAt: new Date("2026-03-02T10:45:00Z"),
        },
        {
            text: "bienvenido! basicamente compras cuentas y el admin actua como intermediario para que no te estafen",
            senderId: uid("carlos.rivas@inc.com"),
            createdAt: new Date("2026-03-02T10:48:00Z"),
        },
        {
            text: "aah ya entendi, osea tipo escrow verdad? como en los juegos de steam",
            senderId: uid("pedro.alonso@inc.com"),
            createdAt: new Date("2026-03-02T10:50:00Z"),
        },
        {
            text: "exacto jajaja de hay viene el nombre xd",
            senderId: uid("miguel.torres@inc.com"),
            createdAt: new Date("2026-03-02T10:52:00Z"),
        },
        {
            text: "alguien tiene cuentas de valorant? busco algo en diamond con buenas skins",
            senderId: uid("lucia.mendez@inc.com"),
            createdAt: new Date("2026-03-02T14:30:00Z"),
        },
        {
            text: "yo tengo! revisa mis tickets en el marketplace",
            senderId: uid("pedro.alonso@inc.com"),
            createdAt: new Date("2026-03-02T14:33:00Z"),
        },
        {
            text: "ya vi el #T001 se ve buena esa cuenta, cuanto por ella?",
            senderId: uid("lucia.mendez@inc.com"),
            createdAt: new Date("2026-03-02T14:35:00Z"),
        },
        {
            text: "escríbeme por el ticket pa hablar precio con el admin en medio",
            senderId: uid("pedro.alonso@inc.com"),
            createdAt: new Date("2026-03-02T14:36:00Z"),
        },
        {
            text: "alguien sabe si esta web es confiable? recien entro",
            senderId: uid("sofia.guerra@inc.com"),
            createdAt: new Date("2026-03-03T09:00:00Z"),
        },
        {
            text: "si oe llevo usando 2 días y ya hice una compra sin problemas, el admin responde rapido",
            senderId: uid("carlos.rivas@inc.com"),
            createdAt: new Date("2026-03-03T09:03:00Z"),
        },
        {
            text: "bien bien, necesito vender mi cuenta de free fire que ya no juego",
            senderId: uid("sofia.guerra@inc.com"),
            createdAt: new Date("2026-03-03T09:05:00Z"),
        },
        {
            text: "publica un ticket entonces, facil",
            senderId: uid("andres.vega@inc.com"),
            createdAt: new Date("2026-03-03T09:07:00Z"),
        },
        {
            text: "oigan hay alguien q tenga cuenta de resident evil??? llevo semanas buscando",
            senderId: uid("javier.luna@inc.com"),
            createdAt: new Date("2026-03-03T15:00:00Z"),
        },
        {
            text: "yo tengo RE Village con DLC mira mis tickets bro",
            senderId: uid("natalia.figueroa@inc.com"),
            createdAt: new Date("2026-03-03T15:04:00Z"),
        },
        {
            text: "queeeee en serio?? ya voy a ver!",
            senderId: uid("javier.luna@inc.com"),
            createdAt: new Date("2026-03-03T15:05:00Z"),
        },
        {
            text: "que juegos venden mas rapido aqui? pregunto por curiosidad",
            senderId: uid("diego.paredes@inc.com"),
            createdAt: new Date("2026-03-04T10:00:00Z"),
        },
        {
            text: "valorant y free fire se van como agua, genshin tambien mucho",
            senderId: uid("miguel.torres@inc.com"),
            createdAt: new Date("2026-03-04T10:03:00Z"),
        },
        {
            text: "tiene sentido, son los mas populares en la region",
            senderId: uid("camila.rojas@inc.com"),
            createdAt: new Date("2026-03-04T10:05:00Z"),
        },
        {
            text: "alguien tiene cuenta de minecraft con mvp++ en hypixel? busco urgente",
            senderId: uid("valentina.rios@inc.com"),
            createdAt: new Date("2026-03-04T16:15:00Z"),
        },
        {
            text: "no tengo con mvp++ pero tengo java con nivel 150 que igual esta buena pa jugar",
            senderId: uid("lucia.mendez@inc.com"),
            createdAt: new Date("2026-03-04T16:18:00Z"),
        },
        {
            text: "igual me interesa mándame ticket",
            senderId: uid("valentina.rios@inc.com"),
            createdAt: new Date("2026-03-04T16:20:00Z"),
        },
        {
            text: "oigan una consulta, puedo comprar y despues revender en esta misma web?",
            senderId: uid("sebastian.mora@inc.com"),
            createdAt: new Date("2026-03-05T09:30:00Z"),
        },
        {
            text: "si perfectamente, muchos hacemos eso. compras barato y vendes con margen",
            senderId: uid("carlos.rivas@inc.com"),
            createdAt: new Date("2026-03-05T09:33:00Z"),
        },
        {
            text: "uff negociazo entonces jaja",
            senderId: uid("sebastian.mora@inc.com"),
            createdAt: new Date("2026-03-05T09:35:00Z"),
        },
        {
            text: "acabo de vender mi primera cuenta aqui, demasiado rapido y seguro! recomendado",
            senderId: uid("andres.vega@inc.com"),
            createdAt: new Date("2026-03-05T14:00:00Z"),
        },
        {
            text: "cuanto tardó el proceso?",
            senderId: uid("mariana.castro@inc.com"),
            createdAt: new Date("2026-03-05T14:03:00Z"),
        },
        {
            text: "como 20 minutos nomás el admin verifica rapido",
            senderId: uid("andres.vega@inc.com"),
            createdAt: new Date("2026-03-05T14:05:00Z"),
        },
        {
            text: "alguien tiene cuenta de gta online con kosatka?? llevo buscando rato",
            senderId: uid("roberto.salinas@inc.com"),
            createdAt: new Date("2026-03-06T10:00:00Z"),
        },
        {
            text: "yo tengo con rank 200 y kosatka, mira el ticket #T022",
            senderId: uid("sebastian.mora@inc.com"),
            createdAt: new Date("2026-03-06T10:04:00Z"),
        },
        {
            text: "perfecto ya abro el ticket",
            senderId: uid("roberto.salinas@inc.com"),
            createdAt: new Date("2026-03-06T10:05:00Z"),
        },

        // --- Semana 2: 9-15 marzo ---
        {
            text: "buen dia! alguien me puede decir como pago aqui?",
            senderId: uid("felipe.navarro@inc.com"),
            createdAt: new Date("2026-03-09T09:00:00Z"),
        },
        {
            text: "el admin te coordina eso por el chat del ticket, varios metodos disponibles",
            senderId: uid("daniela.soto@inc.com"),
            createdAt: new Date("2026-03-09T09:04:00Z"),
        },
        {
            text: "ok gracias! es que soy nuevo aca",
            senderId: uid("felipe.navarro@inc.com"),
            createdAt: new Date("2026-03-09T09:06:00Z"),
        },
        {
            text: "oigan hablan espaniol o ingles aqui mayormente?",
            senderId: uid("mateo.herrera@inc.com"),
            createdAt: new Date("2026-03-09T11:00:00Z"),
        },
        {
            text: "español mayormente, somos casi todos de latam",
            senderId: uid("isabella.ramirez@inc.com"),
            createdAt: new Date("2026-03-09T11:03:00Z"),
        },
        {
            text: "bien bien, yo soy de colombia jaja",
            senderId: uid("mateo.herrera@inc.com"),
            createdAt: new Date("2026-03-09T11:05:00Z"),
        },
        {
            text: "yo peru 🇵🇪",
            senderId: uid("roberto.salinas@inc.com"),
            createdAt: new Date("2026-03-09T11:07:00Z"),
        },
        {
            text: "yo de mexico! buen ambiente por aqui jaja",
            senderId: uid("alejandro.cruz@inc.com"),
            createdAt: new Date("2026-03-09T11:08:00Z"),
        },
        {
            text: "alguien tiene cuenta de LOL LATAM en diamond o mas?",
            senderId: uid("juan.espinoza@inc.com"),
            createdAt: new Date("2026-03-10T14:00:00Z"),
        },
        {
            text: "yo tengo en diamond 2 con hartas skins, mira ticket #T086",
            senderId: uid("alex.ramos@inc.com"),
            createdAt: new Date("2026-03-10T14:05:00Z"),
        },
        {
            text: "y el challenger q tienes tambien?? vi el #T062 esta de lujo",
            senderId: uid("juan.espinoza@inc.com"),
            createdAt: new Date("2026-03-10T14:07:00Z"),
        },
        {
            text: "si ese igual disponible habla por ticket",
            senderId: uid("tomas.carrillo@inc.com"),
            createdAt: new Date("2026-03-10T14:09:00Z"),
        },
        {
            text: "pregunta tonta: si compro una cuenta y el vendedor la recupera despues que pasa",
            senderId: uid("paula.ibarra@inc.com"),
            createdAt: new Date("2026-03-10T16:00:00Z"),
        },
        {
            text: "para eso esta el escrow, el admin retiene el pago hasta q cambies todo, email, contraseña etc",
            senderId: uid("miguel.torres@inc.com"),
            createdAt: new Date("2026-03-10T16:04:00Z"),
        },
        {
            text: "exacto y si hay problema el admin arbitra",
            senderId: uid("carlos.rivas@inc.com"),
            createdAt: new Date("2026-03-10T16:06:00Z"),
        },
        {
            text: "ahhh qe bien sistema, me tranquiliza eso",
            senderId: uid("paula.ibarra@inc.com"),
            createdAt: new Date("2026-03-10T16:08:00Z"),
        },
        {
            text: "alguien mas que juegue genshin aqui? me siento solo lol",
            senderId: uid("natalia.figueroa@inc.com"),
            createdAt: new Date("2026-03-11T19:00:00Z"),
        },
        {
            text: "yo juego genshin!! AR58 America",
            senderId: uid("henry.pinto@inc.com"),
            createdAt: new Date("2026-03-11T19:03:00Z"),
        },
        {
            text: "yo tambien AR60 ya fullito mi cuenta haha",
            senderId: uid("nicolas.peña@inc.com"),
            createdAt: new Date("2026-03-11T19:04:00Z"),
        },
        {
            text: "ufff envidia, yo AR55 nomás jaja pero ya casi",
            senderId: uid("natalia.figueroa@inc.com"),
            createdAt: new Date("2026-03-11T19:05:00Z"),
        },
        {
            text: "a cuanto estan vendiendo cuentas de ff con skins de colaboraciones?",
            senderId: uid("lorena.acosta@inc.com"),
            createdAt: new Date("2026-03-12T10:00:00Z"),
        },
        {
            text: "depende mucho de cuales skins, las de bts y demon slayer estan caras",
            senderId: uid("patricia.leal@inc.com"),
            createdAt: new Date("2026-03-12T10:04:00Z"),
        },
        {
            text: "si las de bts especialmente, son las mas buscadas",
            senderId: uid("valeria.montoya@inc.com"),
            createdAt: new Date("2026-03-12T10:06:00Z"),
        },

        // --- Semana 3: 16-22 marzo ---
        {
            text: "oigan alguien sabe cuándo actualizan el marketplace? o se puede poner tickets en cualquier momento",
            senderId: uid("cristian.medina@inc.com"),
            createdAt: new Date("2026-03-16T10:30:00Z"),
        },
        {
            text: "en cualquier momento puedes publicar, no hay horario",
            senderId: uid("andres.vega@inc.com"),
            createdAt: new Date("2026-03-16T10:33:00Z"),
        },
        {
            text: "buenaso, voy a poner 3 cuentas esta semana entonces",
            senderId: uid("cristian.medina@inc.com"),
            createdAt: new Date("2026-03-16T10:35:00Z"),
        },
        {
            text: "alguien me recomienda que cuenta vale mas la pena comprar pa inversión: valorant o lol?",
            senderId: uid("renata.flores@inc.com"),
            createdAt: new Date("2026-03-16T15:00:00Z"),
        },
        {
            text: "valorant sin dudas, el mercado esta mas activo y los precios suben con las nuevas skins",
            senderId: uid("mario.suarez@inc.com"),
            createdAt: new Date("2026-03-16T15:04:00Z"),
        },
        {
            text: "si pero lol tiene mas estabilidad de precio, no baja tanto",
            senderId: uid("tomas.carrillo@inc.com"),
            createdAt: new Date("2026-03-16T15:06:00Z"),
        },
        {
            text: "uff difícil decision jaja gracias igual",
            senderId: uid("renata.flores@inc.com"),
            createdAt: new Date("2026-03-16T15:08:00Z"),
        },
        {
            text: "acaban de sacar el nuevo agente de valorant, van a subir los precios de cuentas con contrato?",
            senderId: uid("raul.choque@inc.com"),
            createdAt: new Date("2026-03-17T21:00:00Z"),
        },
        {
            text: "probablemente si, igual que cuando sacan nuevas skins",
            senderId: uid("pedro.alonso@inc.com"),
            createdAt: new Date("2026-03-17T21:04:00Z"),
        },
        {
            text: "este mercado es casi como la bolsa de valores jajaja",
            senderId: uid("emilio.romero@inc.com"),
            createdAt: new Date("2026-03-17T21:06:00Z"),
        },
        {
            text: "JAJAJAJA exactamente igual bro, es inversión de verdad",
            senderId: uid("hugo.meza@inc.com"),
            createdAt: new Date("2026-03-17T21:07:00Z"),
        },
        {
            text: "busco cuenta de CS2 con knife, si alguien tiene o conoce que me diga",
            senderId: uid("ivan.ortega@inc.com"),
            createdAt: new Date("2026-03-18T12:00:00Z"),
        },
        {
            text: "yo tengo con butterfly fade mira el #T110",
            senderId: uid("luis.mamani@inc.com"),
            createdAt: new Date("2026-03-18T12:04:00Z"),
        },
        {
            text: "tambien tengo con karambit si te interesa otro estilo",
            senderId: uid("sofia.guerra@inc.com"),
            createdAt: new Date("2026-03-18T12:05:00Z"),
        },
        {
            text: "uf voy a ver los dos, gracias",
            senderId: uid("ivan.ortega@inc.com"),
            createdAt: new Date("2026-03-18T12:07:00Z"),
        },
        {
            text: "alguien a comprado cuentas de roblox aqui? como fue la experiencia",
            senderId: uid("sara.blanco@inc.com"),
            createdAt: new Date("2026-03-19T16:00:00Z"),
        },
        {
            text: "si compré una con robux, todo perfecto. el admin muy atento",
            senderId: uid("ana.ticona@inc.com"),
            createdAt: new Date("2026-03-19T16:04:00Z"),
        },
        {
            text: "yo también, compre un dominus y no hubo problema",
            senderId: uid("cristian.medina@inc.com"),
            createdAt: new Date("2026-03-19T16:06:00Z"),
        },
        {
            text: "q bien, voy a comprar una entonces. hay varias publicadas ahorita",
            senderId: uid("sara.blanco@inc.com"),
            createdAt: new Date("2026-03-19T16:08:00Z"),
        },
        {
            text: "buenos dias!! alguien tiene cuenta de honkai star rail? vi una publicada ayer",
            senderId: uid("karen.delgado@inc.com"),
            createdAt: new Date("2026-03-20T09:00:00Z"),
        },
        {
            text: "si yo tengo dos mira los tickets de henry y claudia",
            senderId: uid("henry.pinto@inc.com"),
            createdAt: new Date("2026-03-20T09:04:00Z"),
        },
        {
            text: "perfect gracias ya voy a ver",
            senderId: uid("karen.delgado@inc.com"),
            createdAt: new Date("2026-03-20T09:06:00Z"),
        },
        {
            text: "pregunta: cuanto cobra el admin de comision por cada transaccion?",
            senderId: uid("oscar.villa@inc.com"),
            createdAt: new Date("2026-03-20T17:00:00Z"),
        },
        {
            text: "eso lo ves con el admin directamente en el ticket, mejor pregunta ahi",
            senderId: uid("daniela.soto@inc.com"),
            createdAt: new Date("2026-03-20T17:04:00Z"),
        },
        {
            text: "ah ok gracias",
            senderId: uid("oscar.villa@inc.com"),
            createdAt: new Date("2026-03-20T17:06:00Z"),
        },

        // --- Semana 4: 23-29 marzo ---
        {
            text: "oigan alguien tiene cuenta de overwatch 2 con la skin de mercy rosa? esa es super rara",
            senderId: uid("paola.restrepo@inc.com"),
            createdAt: new Date("2026-03-23T10:00:00Z"),
        },
        {
            text: "JAJA yo tengo! la pink mercy, mira mis tickets",
            senderId: uid("karen.delgado@inc.com"),
            createdAt: new Date("2026-03-23T10:04:00Z"),
        },
        {
            text: "dios mio en serio?? esa skin no la veo hace años, ya voy",
            senderId: uid("paola.restrepo@inc.com"),
            createdAt: new Date("2026-03-23T10:06:00Z"),
        },
        {
            text: "que tal el ultimo parche de valorant? afecta los precios de las cuentas de jett?",
            senderId: uid("hugo.meza@inc.com"),
            createdAt: new Date("2026-03-23T19:00:00Z"),
        },
        {
            text: "jett sigue siendo top, el nerf no fue tan duro. precios estables",
            senderId: uid("mario.suarez@inc.com"),
            createdAt: new Date("2026-03-23T19:04:00Z"),
        },
        {
            text: "igual yo sigo prefiriendo cuentas con varios agentes maxeados, mas versatil",
            senderId: uid("alejandro.cruz@inc.com"),
            createdAt: new Date("2026-03-23T19:06:00Z"),
        },
        {
            text: "buenas noches, busco cuenta de diablo 4 con druid o spiritborn top, alguien?",
            senderId: uid("frank.arias@inc.com"),
            createdAt: new Date("2026-03-24T20:00:00Z"),
        },
        {
            text: "yo tengo spiritborn nivel 100 con vessel of hatred mira mi ticket",
            senderId: uid("oscar.villa@inc.com"),
            createdAt: new Date("2026-03-24T20:04:00Z"),
        },
        {
            text: "que precio mas o menos?",
            senderId: uid("frank.arias@inc.com"),
            createdAt: new Date("2026-03-24T20:06:00Z"),
        },
        {
            text: "habla por ticket con el admin para coordinar, igual esta buena cuenta",
            senderId: uid("oscar.villa@inc.com"),
            createdAt: new Date("2026-03-24T20:08:00Z"),
        },
        {
            text: "esta semana vi que se vendieron varias cuentas de genshin caras, este mercado esta activo oe",
            senderId: uid("xiomara.leon@inc.com"),
            createdAt: new Date("2026-03-25T11:00:00Z"),
        },
        {
            text: "si con el nuevo banner la gente quiere cuentas ya armadas, clasico",
            senderId: uid("monica.quispe@inc.com"),
            createdAt: new Date("2026-03-25T11:04:00Z"),
        },
        {
            text: "yo vengo a comprar siempre justo antes del banner jaja estrategia",
            senderId: uid("nicolas.peña@inc.com"),
            createdAt: new Date("2026-03-25T11:06:00Z"),
        },
        {
            text: "haha si es que funciona xd yo igual",
            senderId: uid("henry.pinto@inc.com"),
            createdAt: new Date("2026-03-25T11:08:00Z"),
        },
        {
            text: "alguien compraria cuenta de COC th16 full? estoy pensando en vender la mia",
            senderId: uid("paola.restrepo@inc.com"),
            createdAt: new Date("2026-03-26T15:00:00Z"),
        },
        {
            text: "yo si estaría interesado, publica el ticket",
            senderId: uid("kevin.zapata@inc.com"),
            createdAt: new Date("2026-03-26T15:04:00Z"),
        },
        {
            text: "yo también interesado si tiene los heroes en nivel alto",
            senderId: uid("samuel.guerrero@inc.com"),
            createdAt: new Date("2026-03-26T15:06:00Z"),
        },
        {
            text: "ya lo publico entonces jeje",
            senderId: uid("paola.restrepo@inc.com"),
            createdAt: new Date("2026-03-26T15:08:00Z"),
        },
        {
            text: "buenos días a todos! nuevo por acá, vendo cuentas de pubg mobile, puedo publicar sin problema?",
            senderId: uid("diana.campos@inc.com"),
            createdAt: new Date("2026-03-27T09:00:00Z"),
        },
        {
            text: "claro! regístrate y publica tus tickets",
            senderId: uid("andres.vega@inc.com"),
            createdAt: new Date("2026-03-27T09:04:00Z"),
        },
        {
            text: "bienvenida, aqui se puede vender de todo",
            senderId: uid("camila.rojas@inc.com"),
            createdAt: new Date("2026-03-27T09:06:00Z"),
        },
        {
            text: "gracias gente! ya subí mis primeros tickets",
            senderId: uid("diana.campos@inc.com"),
            createdAt: new Date("2026-03-27T09:08:00Z"),
        },
        {
            text: "pregunta de novato: si la cuenta tiene 2FA activo de la tienda original, hay que quitarlo antes de vender?",
            senderId: uid("rodrigo.benites@inc.com"),
            createdAt: new Date("2026-03-27T19:00:00Z"),
        },
        {
            text: "si obvio, el comprador necesita control total. el admin te guia en eso",
            senderId: uid("miguel.torres@inc.com"),
            createdAt: new Date("2026-03-27T19:04:00Z"),
        },
        {
            text: "ok gracias, es que es la primera vez que vendo",
            senderId: uid("rodrigo.benites@inc.com"),
            createdAt: new Date("2026-03-27T19:06:00Z"),
        },
        {
            text: "sin miedo que el proceso es facil",
            senderId: uid("carlos.rivas@inc.com"),
            createdAt: new Date("2026-03-27T19:07:00Z"),
        },
        {
            text: "alguien tiene cuenta de ea fc 25 con los icon de ronaldo o messi? busco urgente para wl",
            senderId: uid("william.flores@inc.com"),
            createdAt: new Date("2026-03-28T16:00:00Z"),
        },
        {
            text: "yo tengo con neymar icon prime, mira mis tickets",
            senderId: uid("samuel.guerrero@inc.com"),
            createdAt: new Date("2026-03-28T16:04:00Z"),
        },
        {
            text: "y yo tengo con ronaldo toty + messi icon, ticket #T118",
            senderId: uid("edgar.palacios@inc.com"),
            createdAt: new Date("2026-03-28T16:05:00Z"),
        },
        {
            text: "perfectooo ya voy a ver los dos, gracias!",
            senderId: uid("william.flores@inc.com"),
            createdAt: new Date("2026-03-28T16:07:00Z"),
        },
        {
            text: "oigan hoy se cayó el servidor de valorant, están esperando o ya se fueron?",
            senderId: uid("hugo.meza@inc.com"),
            createdAt: new Date("2026-03-29T14:00:00Z"),
        },
        {
            text: "jajaja mi cuenta sale mas cara ahora que no puedo jugar",
            senderId: uid("mario.suarez@inc.com"),
            createdAt: new Date("2026-03-29T14:03:00Z"),
        },
        {
            text: "XD siempre riot con sus servidores, ya me fui a lol mientras",
            senderId: uid("alejandro.cruz@inc.com"),
            createdAt: new Date("2026-03-29T14:05:00Z"),
        },
        {
            text: "jajaj vendemos ambas cuentas entonces",
            senderId: uid("nathaly.barrios@inc.com"),
            createdAt: new Date("2026-03-29T14:07:00Z"),
        },

        // --- Semana 5: 30 marzo - 10 abril ---
        {
            text: "buenos! alguien me puede decir si se puede pagar en soles o solo dolares?",
            senderId: uid("lisbeth.ccama@inc.com"),
            createdAt: new Date("2026-03-30T09:00:00Z"),
        },
        {
            text: "depende del acuerdo con el admin, generalmente dólares pero se puede hablar",
            senderId: uid("pedro.alonso@inc.com"),
            createdAt: new Date("2026-03-30T09:04:00Z"),
        },
        {
            text: "ok gracias! es que soy de peru y quería saber",
            senderId: uid("lisbeth.ccama@inc.com"),
            createdAt: new Date("2026-03-30T09:06:00Z"),
        },
        {
            text: "yo tambien peru, el admin maneja eso sin problema",
            senderId: uid("milagros.quispe@inc.com"),
            createdAt: new Date("2026-03-30T09:08:00Z"),
        },
        {
            text: "se viene el nuevo season de apex!! van a subir los precios de cuentas con heirlooms",
            senderId: uid("frank.arias@inc.com"),
            createdAt: new Date("2026-03-31T20:00:00Z"),
        },
        {
            text: "ya tengo un heirloom de loba publicado, perfecto timing jajaja",
            senderId: uid("paula.ibarra@inc.com"),
            createdAt: new Date("2026-03-31T20:04:00Z"),
        },
        {
            text: "y yo el de bloodhound, a ver quien vende primero xd",
            senderId: uid("paula.ibarra@inc.com"),
            createdAt: new Date("2026-03-31T20:05:00Z"),
        },
        {
            text: "competencia sana jaja suerte a los dos",
            senderId: uid("diego.paredes@inc.com"),
            createdAt: new Date("2026-03-31T20:07:00Z"),
        },
        {
            text: "alguien recomendaría comprar cuenta de steam con juegos variados? o es mejor comprar titulos sueltos?",
            senderId: uid("carlos.chura@inc.com"),
            createdAt: new Date("2026-04-01T11:00:00Z"),
        },
        {
            text: "cuenta con bundle sale mucho mas barato que comprar cada juego",
            senderId: uid("lorena.acosta@inc.com"),
            createdAt: new Date("2026-04-01T11:04:00Z"),
        },
        {
            text: "exacto yo compre una con 500 juegos por una fraccion del precio",
            senderId: uid("isabella.ramirez@inc.com"),
            createdAt: new Date("2026-04-01T11:06:00Z"),
        },
        {
            text: "wooow vale la pena entonces, gracias",
            senderId: uid("carlos.chura@inc.com"),
            createdAt: new Date("2026-04-01T11:08:00Z"),
        },
        {
            text: "ya llevo 2 semanas aca y vendí 5 cuentas, excelente plataforma para el negocio",
            senderId: uid("camila.rojas@inc.com"),
            createdAt: new Date("2026-04-02T16:00:00Z"),
        },
        {
            text: "igual yo! ya es mi fuente principal de ingresos jaja",
            senderId: uid("andres.vega@inc.com"),
            createdAt: new Date("2026-04-02T16:04:00Z"),
        },
        {
            text: "oye eso es real? cuanto se puede ganar al mes con esto?",
            senderId: uid("yesenia.apaza@inc.com"),
            createdAt: new Date("2026-04-02T16:06:00Z"),
        },
        {
            text: "depende de cuantas cuentas tengas y los juegos, yo saco entre 200-400 dolares si me muevo",
            senderId: uid("camila.rojas@inc.com"),
            createdAt: new Date("2026-04-02T16:08:00Z"),
        },
        {
            text: "uff nada mal! voy a empezar a publicar mas seguido entonces",
            senderId: uid("yesenia.apaza@inc.com"),
            createdAt: new Date("2026-04-02T16:10:00Z"),
        },
        {
            text: "busco cuenta de honkai star rail con acheron o firefly, alguien?",
            senderId: uid("estela.vilca@inc.com"),
            createdAt: new Date("2026-04-03T10:00:00Z"),
        },
        {
            text: "yo tengo con acheron E2, ticket #T100",
            senderId: uid("claudia.nieto@inc.com"),
            createdAt: new Date("2026-04-03T10:04:00Z"),
        },
        {
            text: "uff eso es lo que busco! ya abro el ticket ahora mismo",
            senderId: uid("estela.vilca@inc.com"),
            createdAt: new Date("2026-04-03T10:06:00Z"),
        },
        {
            text: "oigan que juego está de moda ahora pa invertir? ya con el de siempre jaja",
            senderId: uid("rodrigo.benites@inc.com"),
            createdAt: new Date("2026-04-04T17:00:00Z"),
        },
        {
            text: "marvel rivals esta pegando fuerte, podrían llegar cuentas pronto",
            senderId: uid("mateo.herrera@inc.com"),
            createdAt: new Date("2026-04-04T17:04:00Z"),
        },
        {
            text: "y delta force, hay mucha gente vendiendo cuentas de ese",
            senderId: uid("bryan.aguilar@inc.com"),
            createdAt: new Date("2026-04-04T17:06:00Z"),
        },
        {
            text: "interesante, voy a investigar esos",
            senderId: uid("rodrigo.benites@inc.com"),
            createdAt: new Date("2026-04-04T17:08:00Z"),
        },
        {
            text: "hola comunidad! recién entro, alguien me puede decir si venden cuentas de pokemon go aqui?",
            senderId: uid("angela.condori@inc.com"),
            createdAt: new Date("2026-04-05T09:00:00Z"),
        },
        {
            text: "no creo que haya ahorita pero puedes publicar si tienes",
            senderId: uid("sofia.guerra@inc.com"),
            createdAt: new Date("2026-04-05T09:04:00Z"),
        },
        {
            text: "ah ya, yo busco mas que vender jaja, gracias igual",
            senderId: uid("angela.condori@inc.com"),
            createdAt: new Date("2026-04-05T09:06:00Z"),
        },
        {
            text: "ya llegamos a mas de 100 tickets publicados! esta web creciendo rápido",
            senderId: uid("pedro.alonso@inc.com"),
            createdAt: new Date("2026-04-06T12:00:00Z"),
        },
        {
            text: "se nota, cuando entré éramos poquitos ahora hay harta gente",
            senderId: uid("carlos.rivas@inc.com"),
            createdAt: new Date("2026-04-06T12:04:00Z"),
        },
        {
            text: "bien por la plataforma, ojalá siga creciendo",
            senderId: uid("lucia.mendez@inc.com"),
            createdAt: new Date("2026-04-06T12:06:00Z"),
        },
        {
            text: "alguien tiene cuenta de elden ring o dark souls para steam? busco pa un amigo",
            senderId: uid("daniel.huanca@inc.com"),
            createdAt: new Date("2026-04-07T15:00:00Z"),
        },
        {
            text: "hay una con elden ring + shadow of erdtree, mira el ticket de jose bermudez",
            senderId: uid("lorena.acosta@inc.com"),
            createdAt: new Date("2026-04-07T15:04:00Z"),
        },
        {
            text: "ya vi gracias! precio razonable también",
            senderId: uid("daniel.huanca@inc.com"),
            createdAt: new Date("2026-04-07T15:06:00Z"),
        },
        {
            text: "buen finde a todos!! a seguir vendiendo jajaja",
            senderId: uid("camila.rojas@inc.com"),
            createdAt: new Date("2026-04-08T09:00:00Z"),
        },
        {
            text: "finde activo aqui siempre mas movimiento los sabados",
            senderId: uid("miguel.torres@inc.com"),
            createdAt: new Date("2026-04-08T09:04:00Z"),
        },
        {
            text: "si la gente cobra viernes y el sabado gasta en cuentas jajaja",
            senderId: uid("andres.vega@inc.com"),
            createdAt: new Date("2026-04-08T09:06:00Z"),
        },
        {
            text: "JAJAJA eso es exactamente",
            senderId: uid("diego.paredes@inc.com"),
            createdAt: new Date("2026-04-08T09:07:00Z"),
        },
        {
            text: "busco algo de minecraft java con hypixel nivel alto para mi sobrino, hay algo barato?",
            senderId: uid("ana.ticona@inc.com"),
            createdAt: new Date("2026-04-09T11:00:00Z"),
        },
        {
            text: "hay varias opciones, algunas a precio razonable, mira los tickets de lucia y gabriela",
            senderId: uid("jimena.cabrera@inc.com"),
            createdAt: new Date("2026-04-09T11:04:00Z"),
        },
        {
            text: "ya voy a ver gracias!",
            senderId: uid("ana.ticona@inc.com"),
            createdAt: new Date("2026-04-09T11:06:00Z"),
        },
        {
            text: "buenos dias! hoy abrí mi primer ticket de compra, nervioso jaja espero que todo salga bien",
            senderId: uid("carlos.chura@inc.com"),
            createdAt: new Date("2026-04-10T08:30:00Z"),
        },
        {
            text: "tranquilo el proceso es facil, el admin te guia paso a paso",
            senderId: uid("pedro.alonso@inc.com"),
            createdAt: new Date("2026-04-10T08:34:00Z"),
        },
        {
            text: "si no hay de que preocuparse, ya llevo varias compras aqui sin problema",
            senderId: uid("valentina.rios@inc.com"),
            createdAt: new Date("2026-04-10T08:36:00Z"),
        },
        {
            text: "gracias por la confianza gente! ya les cuento como me fue",
            senderId: uid("carlos.chura@inc.com"),
            createdAt: new Date("2026-04-10T08:38:00Z"),
        },
    ];

    let count = 0;
    for (const m of messages) {
        if (!m.senderId) {
            console.warn(`⚠️  Skipping lounge message - sender not found`);
            continue;
        }
        await prisma.loungeMessage.create({
            data: {
                text: m.text,
                senderId: m.senderId,
                createdAt: m.createdAt,
            },
        });
        count++;
    }

    console.log(`✅ seedLoungeMessages: ${count} messages created`);
}