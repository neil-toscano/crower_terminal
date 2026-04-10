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
            text: "hola a todos!! acabo de entrar a esta web alguien me puede explicar como funciona esto?",
            senderId: uid("pedro.alonso@inc.com"),
            createdAt: new Date("2026-03-02T10:45:00Z"),
        },
        {
            text: "bienvenido bro basicamente compras cuentas y el admin es el intermediario pa q no te estafen",
            senderId: uid("carlos.rivas@inc.com"),
            createdAt: new Date("2026-03-02T10:48:00Z"),
        },
        {
            text: "aah ya entendi osea tipo escrow verdad? como en los juegos de steam",
            senderId: uid("pedro.alonso@inc.com"),
            createdAt: new Date("2026-03-02T10:50:00Z"),
        },
        {
            text: "exacto jajaja de ai viene el nombre xd",
            senderId: uid("miguel.torres@inc.com"),
            createdAt: new Date("2026-03-02T10:52:00Z"),
        },
        {
            text: "alguien tiene cuentas de valorant?? busco algo en diamante con skins",
            senderId: uid("lucia.mendez@inc.com"),
            createdAt: new Date("2026-03-02T14:30:00Z"),
        },
        {
            text: "yo tengo una x ai revisa mis tickets en el marketplace",
            senderId: uid("pedro.alonso@inc.com"),
            createdAt: new Date("2026-03-02T14:33:00Z"),
        },
        {
            text: "ya vi el #T001 se ve buena esa cuenta cuanto x ella?",
            senderId: uid("lucia.mendez@inc.com"),
            createdAt: new Date("2026-03-02T14:35:00Z"),
        },
        {
            text: "escribeme x el ticket pa hablar el precio con el admin",
            senderId: uid("pedro.alonso@inc.com"),
            createdAt: new Date("2026-03-02T14:36:00Z"),
        },
        {
            text: "alguien sabe si esta web es confiable? recien entro y no kiero perder plata",
            senderId: uid("sofia.guerra@inc.com"),
            createdAt: new Date("2026-03-03T09:00:00Z"),
        },
        {
            text: "si oe llevo usando 2 dias y ya compre una todo tranqui el admin responde rapido",
            senderId: uid("carlos.rivas@inc.com"),
            createdAt: new Date("2026-03-03T09:03:00Z"),
        },
        {
            text: "bien bien necesito vender mi cuenta de free fire q ya no juego hace uff",
            senderId: uid("sofia.guerra@inc.com"),
            createdAt: new Date("2026-03-03T09:05:00Z"),
        },
        {
            text: "publica un ticket nomas es facil",
            senderId: uid("andres.vega@inc.com"),
            createdAt: new Date("2026-03-03T09:07:00Z"),
        },
        {
            text: "oigan alguien tiene cuenta de resident evil??? llevo semanas buscando una",
            senderId: uid("javier.luna@inc.com"),
            createdAt: new Date("2026-03-03T15:00:00Z"),
        },
        {
            text: "yo tengo el RE Village con DLC mira mis tickets broder",
            senderId: uid("natalia.figueroa@inc.com"),
            createdAt: new Date("2026-03-03T15:04:00Z"),
        },
        {
            text: "queeeee en serio?? ya voy a ver ojala no este cara",
            senderId: uid("javier.luna@inc.com"),
            createdAt: new Date("2026-03-03T15:05:00Z"),
        },
        {
            text: "que juegos se venden mas rapido aqui? pregunto pa ver si subo lo mio",
            senderId: uid("diego.paredes@inc.com"),
            createdAt: new Date("2026-03-04T10:00:00Z"),
        },
        {
            text: "valorant y free fire se van como agua genshin tambien sale bastante",
            senderId: uid("miguel.torres@inc.com"),
            createdAt: new Date("2026-03-04T10:03:00Z"),
        },
        {
            text: "tiene sentido son los mas populares x aca",
            senderId: uid("camila.rojas@inc.com"),
            createdAt: new Date("2026-03-04T10:05:00Z"),
        },
        {
            text: "alguien tiene cuenta de minecraft con mvp+ en hypixel? busco urgente!!",
            senderId: uid("valentina.rios@inc.com"),
            createdAt: new Date("2026-03-04T16:15:00Z"),
        },
        {
            text: "no tengo mvp pero tengo una java nivel 150 que igual esta buena pa jugar",
            senderId: uid("lucia.mendez@inc.com"),
            createdAt: new Date("2026-03-04T16:18:00Z"),
        },
        {
            text: "igual me interesa mandame ticket pa verla",
            senderId: uid("valentina.rios@inc.com"),
            createdAt: new Date("2026-03-04T16:20:00Z"),
        },
        {
            text: "oigan una consulta puedo comprar y despues revender en esta misma web?",
            senderId: uid("sebastian.mora@inc.com"),
            createdAt: new Date("2026-03-05T09:30:00Z"),
        },
        {
            text: "si claro varios hacen eso x aqui compras barato y luego intentas sacar algo mas",
            senderId: uid("carlos.rivas@inc.com"),
            createdAt: new Date("2026-03-05T09:33:00Z"),
        },
        {
            text: "uff ojala salga algo bueno jaja",
            senderId: uid("sebastian.mora@inc.com"),
            createdAt: new Date("2026-03-05T09:35:00Z"),
        },
        {
            text: "acabo de vender mi primera cuenta aqui fue rapido y seguro recomendado",
            senderId: uid("andres.vega@inc.com"),
            createdAt: new Date("2026-03-05T14:00:00Z"),
        },
        {
            text: "cuanto tardo el proceso??",
            senderId: uid("mariana.castro@inc.com"),
            createdAt: new Date("2026-03-05T14:03:00Z"),
        },
        {
            text: "como 20 minutos nomas el admin se conecto y verifico todo al toque",
            senderId: uid("andres.vega@inc.com"),
            createdAt: new Date("2026-03-05T14:05:00Z"),
        },
        {
            text: "alguien tiene cuenta de gta online con kosatka?? llevo buscando rato",
            senderId: uid("roberto.salinas@inc.com"),
            createdAt: new Date("2026-03-06T10:00:00Z"),
        },
        {
            text: "yo tengo una con rank 200 y kosatka mira el ticket #T022",
            senderId: uid("sebastian.mora@inc.com"),
            createdAt: new Date("2026-03-06T10:04:00Z"),
        },
        {
            text: "perfecto ya abro el ticket a ver q onda",
            senderId: uid("roberto.salinas@inc.com"),
            createdAt: new Date("2026-03-06T10:05:00Z"),
        },

        // --- Semana 2: 9-15 marzo ---
        {
            text: "buen dia alguien me puede decir como pago aca??",
            senderId: uid("felipe.navarro@inc.com"),
            createdAt: new Date("2026-03-09T09:00:00Z"),
        },
        {
            text: "el admin te explica eso x el chat del ticket hay varios metodos",
            senderId: uid("daniela.soto@inc.com"),
            createdAt: new Date("2026-03-09T09:04:00Z"),
        },
        {
            text: "ok gracias es q soy nuevo y no kiero meter la pata",
            senderId: uid("felipe.navarro@inc.com"),
            createdAt: new Date("2026-03-09T09:06:00Z"),
        },
        {
            text: "oigan hablan español o ingles aqui??",
            senderId: uid("mateo.herrera@inc.com"),
            createdAt: new Date("2026-03-09T11:00:00Z"),
        },
        {
            text: "español mayormente somos casi todos de latam",
            senderId: uid("isabella.ramirez@inc.com"),
            createdAt: new Date("2026-03-09T11:03:00Z"),
        },
        {
            text: "bien bien yo soy de colombia jaja saludos",
            senderId: uid("mateo.herrera@inc.com"),
            createdAt: new Date("2026-03-09T11:05:00Z"),
        },
        {
            text: "yo peru 🇵🇪 presente",
            senderId: uid("roberto.salinas@inc.com"),
            createdAt: new Date("2026-03-09T11:07:00Z"),
        },
        {
            text: "yo de mexicoo buen ambiente x aqui jaja",
            senderId: uid("alejandro.cruz@inc.com"),
            createdAt: new Date("2026-03-09T11:08:00Z"),
        },
        {
            text: "alguien tiene cuenta de LOL LATAM en diamante o mas??",
            senderId: uid("juan.espinoza@inc.com"),
            createdAt: new Date("2026-03-10T14:00:00Z"),
        },
        {
            text: "tengo una en d2 con hartas skins mira el ticket #T086",
            senderId: uid("alex.ramos@inc.com"),
            createdAt: new Date("2026-03-10T14:05:00Z"),
        },
        {
            text: "y el challenger q tienes tmb?? vi el #T062 esta de lujo esa",
            senderId: uid("juan.espinoza@inc.com"),
            createdAt: new Date("2026-03-10T14:07:00Z"),
        },
        {
            text: "si ese igual esta disponible habla x ticket",
            senderId: uid("tomas.carrillo@inc.com"),
            createdAt: new Date("2026-03-10T14:09:00Z"),
        },
        {
            text: "pregunta tonta si compro una cuenta y el vendedor la recupera despues q pasa?",
            senderId: uid("paula.ibarra@inc.com"),
            createdAt: new Date("2026-03-10T16:00:00Z"),
        },
        {
            text: "pa eso esta el escrow el admin retiene la plata hasta q cambies todo correo contra etc",
            senderId: uid("miguel.torres@inc.com"),
            createdAt: new Date("2026-03-10T16:04:00Z"),
        },
        {
            text: "claro y si hay algun problema el admin se mete a arreglar",
            senderId: uid("carlos.rivas@inc.com"),
            createdAt: new Date("2026-03-10T16:06:00Z"),
        },
        {
            text: "ahhh qe buen sistema me tranquiliza eso",
            senderId: uid("paula.ibarra@inc.com"),
            createdAt: new Date("2026-03-10T16:08:00Z"),
        },
        {
            text: "alguien mas q juegue genshin aki?? me siento solo lol",
            senderId: uid("natalia.figueroa@inc.com"),
            createdAt: new Date("2026-03-11T19:00:00Z"),
        },
        {
            text: "yo juego genshin!! AR58 server america",
            senderId: uid("henry.pinto@inc.com"),
            createdAt: new Date("2026-03-11T19:03:00Z"),
        },
        {
            text: "yo tmb AR60 ya tengo todo casi jaja",
            senderId: uid("nicolas.peña@inc.com"),
            createdAt: new Date("2026-03-11T19:04:00Z"),
        },
        {
            text: "ufff envidia yo AR55 nomas jaja pero ya falta poco",
            senderId: uid("natalia.figueroa@inc.com"),
            createdAt: new Date("2026-03-11T19:05:00Z"),
        },
        {
            text: "a cuanto estan vendiendo cuentas de ff con skins de colab??",
            senderId: uid("lorena.acosta@inc.com"),
            createdAt: new Date("2026-03-12T10:00:00Z"),
        },
        {
            text: "depende de cuales skins las de bts y demon slayer estan un poco caras ahora",
            senderId: uid("patricia.leal@inc.com"),
            createdAt: new Date("2026-03-12T10:04:00Z"),
        },
        {
            text: "si las de bts sobre todo son las que mas piden",
            senderId: uid("valeria.montoya@inc.com"),
            createdAt: new Date("2026-03-12T10:06:00Z"),
        },

        // --- Semana 3: 16-22 marzo ---
        {
            text: "oigan alguien sabe cuando actualizan el marketplace? o se puede subir tickets siempre?",
            senderId: uid("cristian.medina@inc.com"),
            createdAt: new Date("2026-03-16T10:30:00Z"),
        },
        {
            text: "en cualquier momento puedes publicar no hay horario para eso",
            senderId: uid("andres.vega@inc.com"),
            createdAt: new Date("2026-03-16T10:33:00Z"),
        },
        {
            text: "buenaso voy a subir un par de cuentas esta semana entonces",
            senderId: uid("cristian.medina@inc.com"),
            createdAt: new Date("2026-03-16T10:35:00Z"),
        },
        {
            text: "recomiendan mas valorant o lol pa comprar??",
            senderId: uid("renata.flores@inc.com"),
            createdAt: new Date("2026-03-16T15:00:00Z"),
        },
        {
            text: "valorant de lejos el mercado se mueve mas y las skins nuevas ayudan",
            senderId: uid("mario.suarez@inc.com"),
            createdAt: new Date("2026-03-16T15:04:00Z"),
        },
        {
            text: "si pero lol es mas estable los precios no bajan tanto",
            senderId: uid("tomas.carrillo@inc.com"),
            createdAt: new Date("2026-03-16T15:06:00Z"),
        },
        {
            text: "uff dificil decidir jaja gracias igual x la info",
            senderId: uid("renata.flores@inc.com"),
            createdAt: new Date("2026-03-16T15:08:00Z"),
        },
        {
            text: "sacaron nuevo agente de valorant van a subir los precios de las cuentas??",
            senderId: uid("raul.choque@inc.com"),
            createdAt: new Date("2026-03-17T21:00:00Z"),
        },
        {
            text: "capaz q si siempre pasa lo mismo cuando sale algo nuevo",
            senderId: uid("pedro.alonso@inc.com"),
            createdAt: new Date("2026-03-17T21:04:00Z"),
        },
        {
            text: "este mercado parece la bolsa jajaja",
            senderId: uid("emilio.romero@inc.com"),
            createdAt: new Date("2026-03-17T21:06:00Z"),
        },
        {
            text: "JAJAJAJA literal bro hay q estar atentos",
            senderId: uid("hugo.meza@inc.com"),
            createdAt: new Date("2026-03-17T21:07:00Z"),
        },
        {
            text: "busco cuenta de CS2 con cuchillo si alguien tiene o conoce me avisa",
            senderId: uid("ivan.ortega@inc.com"),
            createdAt: new Date("2026-03-18T12:00:00Z"),
        },
        {
            text: "yo tengo una butterfly fade mira el #T110",
            senderId: uid("luis.mamani@inc.com"),
            createdAt: new Date("2026-03-18T12:04:00Z"),
        },
        {
            text: "tmb tengo una karambit x si te interesa otro estilo",
            senderId: uid("sofia.guerra@inc.com"),
            createdAt: new Date("2026-03-18T12:05:00Z"),
        },
        {
            text: "uf voy a ver los dos gracias",
            senderId: uid("ivan.ortega@inc.com"),
            createdAt: new Date("2026-03-18T12:07:00Z"),
        },
        {
            text: "alguien a comprado cuentas de roblox aki? como les fue?",
            senderId: uid("sara.blanco@inc.com"),
            createdAt: new Date("2026-03-19T16:00:00Z"),
        },
        {
            text: "si compre una con robux hace poco todo bien el admin es atento",
            senderId: uid("ana.ticona@inc.com"),
            createdAt: new Date("2026-03-19T16:04:00Z"),
        },
        {
            text: "yo tmb compre un dominus y no hubo falla",
            senderId: uid("cristian.medina@inc.com"),
            createdAt: new Date("2026-03-19T16:06:00Z"),
        },
        {
            text: "q bien voy a comprar una entonces hay varias publicadas ahorita",
            senderId: uid("sara.blanco@inc.com"),
            createdAt: new Date("2026-03-19T16:08:00Z"),
        },
        {
            text: "buenas alguien tiene cuenta de honkai star rail? vi una ayer pero no la encuentro",
            senderId: uid("karen.delgado@inc.com"),
            createdAt: new Date("2026-03-20T09:00:00Z"),
        },
        {
            text: "yo tengo dos mira los tickets de henry y claudia ai estan",
            senderId: uid("henry.pinto@inc.com"),
            createdAt: new Date("2026-03-20T09:04:00Z"),
        },
        {
            text: "perfect gracias ya voy a ver",
            senderId: uid("karen.delgado@inc.com"),
            createdAt: new Date("2026-03-20T09:06:00Z"),
        },
        {
            text: "pregunta cuanto cobra el admin de comision??",
            senderId: uid("oscar.villa@inc.com"),
            createdAt: new Date("2026-03-20T17:00:00Z"),
        },
        {
            text: "eso lo ves con el directamente en el ticket mejor pregunta ai",
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
            text: "oigan alguien tiene cuenta de overwatch 2 con la skin de mercy rosa??",
            senderId: uid("paola.restrepo@inc.com"),
            createdAt: new Date("2026-03-23T10:00:00Z"),
        },
        {
            text: "JAJA yo tengo la pink mercy mira mis tickets",
            senderId: uid("karen.delgado@inc.com"),
            createdAt: new Date("2026-03-23T10:04:00Z"),
        },
        {
            text: "dios mio en serio?? esa skin es rarisima ya voy",
            senderId: uid("paola.restrepo@inc.com"),
            createdAt: new Date("2026-03-23T10:06:00Z"),
        },
        {
            text: "que tal el ultimo parche de valorant? creen q afecte los precios??",
            senderId: uid("hugo.meza@inc.com"),
            createdAt: new Date("2026-03-23T19:00:00Z"),
        },
        {
            text: "jett sigue bien el nerf no fue nada los precios van a seguir igual",
            senderId: uid("mario.suarez@inc.com"),
            createdAt: new Date("2026-03-23T19:04:00Z"),
        },
        {
            text: "yo prefiero cuentas con varios agentes al maximo es mejor",
            senderId: uid("alejandro.cruz@inc.com"),
            createdAt: new Date("2026-03-23T19:06:00Z"),
        },
        {
            text: "buenas busco cuenta de diablo 4 con spiritborn alguien vende??",
            senderId: uid("frank.arias@inc.com"),
            createdAt: new Date("2026-03-24T20:00:00Z"),
        },
        {
            text: "tengo uno nivel 100 con la expansion mira mi ticket",
            senderId: uid("oscar.villa@inc.com"),
            createdAt: new Date("2026-03-24T20:04:00Z"),
        },
        {
            text: "que precio tiene mas o menos?",
            senderId: uid("frank.arias@inc.com"),
            createdAt: new Date("2026-03-24T20:06:00Z"),
        },
        {
            text: "habla x el ticket con el admin pa quedar la cuenta esta buena",
            senderId: uid("oscar.villa@inc.com"),
            createdAt: new Date("2026-03-24T20:08:00Z"),
        },
        {
            text: "esta semana vi que se vendieron varias de genshin caritas el mercado se mueve",
            senderId: uid("xiomara.leon@inc.com"),
            createdAt: new Date("2026-03-25T11:00:00Z"),
        },
        {
            text: "si con el nuevo banner la gente quiere cuentas armadas ya",
            senderId: uid("monica.quispe@inc.com"),
            createdAt: new Date("2026-03-25T11:04:00Z"),
        },
        {
            text: "yo compro justo antes del banner jajaja estrategia pura",
            senderId: uid("nicolas.peña@inc.com"),
            createdAt: new Date("2026-03-25T11:06:00Z"),
        },
        {
            text: "haha si funciona xd yo igual",
            senderId: uid("henry.pinto@inc.com"),
            createdAt: new Date("2026-03-25T11:08:00Z"),
        },
        {
            text: "alguien compraria cuenta de COC th16 full?? kiero vender la mia",
            senderId: uid("paola.restrepo@inc.com"),
            createdAt: new Date("2026-03-26T15:00:00Z"),
        },
        {
            text: "yo podria estar interesado publica el ticket",
            senderId: uid("kevin.zapata@inc.com"),
            createdAt: new Date("2026-03-26T15:04:00Z"),
        },
        {
            text: "yo tmb interesado si los heroes estan en buen nivel",
            senderId: uid("samuel.guerrero@inc.com"),
            createdAt: new Date("2026-03-26T15:06:00Z"),
        },
        {
            text: "ya lo publico entonces jeje un rato",
            senderId: uid("paola.restrepo@inc.com"),
            createdAt: new Date("2026-03-26T15:08:00Z"),
        },
        {
            text: "buenos dias a todos vendo cuentas de pubg mobile puedo publicar sin problemas?",
            senderId: uid("diana.campos@inc.com"),
            createdAt: new Date("2026-03-27T09:00:00Z"),
        },
        {
            text: "claro registrate y publica tus tickets nomas",
            senderId: uid("andres.vega@inc.com"),
            createdAt: new Date("2026-03-27T09:04:00Z"),
        },
        {
            text: "bienvenida aki se vende de todo un poco",
            senderId: uid("camila.rojas@inc.com"),
            createdAt: new Date("2026-03-27T09:06:00Z"),
        },
        {
            text: "gracias gente ya subi los primeros tickets",
            senderId: uid("diana.campos@inc.com"),
            createdAt: new Date("2026-03-27T09:08:00Z"),
        },
        {
            text: "pregunta de novato si la cuenta tiene 2FA hay q quitarlo antes??",
            senderId: uid("rodrigo.benites@inc.com"),
            createdAt: new Date("2026-03-27T19:00:00Z"),
        },
        {
            text: "si obvio el comprador necesita entrar directo el admin te ayuda con eso",
            senderId: uid("miguel.torres@inc.com"),
            createdAt: new Date("2026-03-27T19:04:00Z"),
        },
        {
            text: "ok gracias es la primera vez que vendo algo",
            senderId: uid("rodrigo.benites@inc.com"),
            createdAt: new Date("2026-03-27T19:06:00Z"),
        },
        {
            text: "sin miedo q el proceso es rapido",
            senderId: uid("carlos.rivas@inc.com"),
            createdAt: new Date("2026-03-27T19:07:00Z"),
        },
        {
            text: "alguien tiene cuenta de ea fc 25 con ronaldo o messi?? busco urgente",
            senderId: uid("william.flores@inc.com"),
            createdAt: new Date("2026-03-28T16:00:00Z"),
        },
        {
            text: "tengo una con neymar mira mis tickets",
            senderId: uid("samuel.guerrero@inc.com"),
            createdAt: new Date("2026-03-28T16:04:00Z"),
        },
        {
            text: "y yo tengo con ronaldo toty + messi ticket #T118",
            senderId: uid("edgar.palacios@inc.com"),
            createdAt: new Date("2026-03-28T16:05:00Z"),
        },
        {
            text: "perfectooo ya voy a ver los dos gracias!",
            senderId: uid("william.flores@inc.com"),
            createdAt: new Date("2026-03-28T16:07:00Z"),
        },
        {
            text: "oigan se cayo valorant de nuevo estan esperando o ya se fueron?",
            senderId: uid("hugo.meza@inc.com"),
            createdAt: new Date("2026-03-29T14:00:00Z"),
        },
        {
            text: "jajaja mi cuenta vale mas ahora q no se puede jugar xd",
            senderId: uid("mario.suarez@inc.com"),
            createdAt: new Date("2026-03-29T14:03:00Z"),
        },
        {
            text: "riot siempre igual ya me fui al lol un rato",
            senderId: uid("alejandro.cruz@inc.com"),
            createdAt: new Date("2026-03-29T14:05:00Z"),
        },
        {
            text: "jajaj mejor vendemos todo entonces",
            senderId: uid("nathaly.barrios@inc.com"),
            createdAt: new Date("2026-03-29T14:07:00Z"),
        },

        // --- Semana 5: 30 marzo - 10 abril ---
        {
            text: "buenos alguien sabe si se puede pagar en soles??",
            senderId: uid("lisbeth.ccama@inc.com"),
            createdAt: new Date("2026-03-30T09:00:00Z"),
        },
        {
            text: "depende de lo q hables con el admin casi siempre es dolares",
            senderId: uid("pedro.alonso@inc.com"),
            createdAt: new Date("2026-03-30T09:04:00Z"),
        },
        {
            text: "ok gracias es q soy de peru y keria saber",
            senderId: uid("lisbeth.ccama@inc.com"),
            createdAt: new Date("2026-03-30T09:06:00Z"),
        },
        {
            text: "yo tmb de peru el admin te ayuda con eso tranqui",
            senderId: uid("milagros.quispe@inc.com"),
            createdAt: new Date("2026-03-30T09:08:00Z"),
        },
        {
            text: "se viene nueva season de apex van a subir los precios de las cuentas??",
            senderId: uid("frank.arias@inc.com"),
            createdAt: new Date("2026-03-31T20:00:00Z"),
        },
        {
            text: "ya tengo una con reliquia de loba publicada justo a tiempo jaja",
            senderId: uid("paula.ibarra@inc.com"),
            createdAt: new Date("2026-03-31T20:04:00Z"),
        },
        {
            text: "y yo la de bloodhound a ver kien vnedo primero xd",
            senderId: uid("paula.ibarra@inc.com"),
            createdAt: new Date("2026-03-31T20:05:00Z"),
        },
        {
            text: "suerte a los dos con la venta jaja",
            senderId: uid("diego.paredes@inc.com"),
            createdAt: new Date("2026-03-31T20:07:00Z"),
        },
        {
            text: "recomiendan comprar cuenta de steam con varios juegos?? o mejor sueltos??",
            senderId: uid("carlos.chura@inc.com"),
            createdAt: new Date("2026-04-01T11:00:00Z"),
        },
        {
            text: "las cuentas con varios juegos salen mucho mas baratas q comprar uno x uno",
            senderId: uid("lorena.acosta@inc.com"),
            createdAt: new Date("2026-04-01T11:04:00Z"),
        },
        {
            text: "si yo compre una con varios juegos x poca plata",
            senderId: uid("isabella.ramirez@inc.com"),
            createdAt: new Date("2026-04-01T11:06:00Z"),
        },
        {
            text: "wooow vale la pena entonces gracias x el dato",
            senderId: uid("carlos.chura@inc.com"),
            createdAt: new Date("2026-04-01T11:08:00Z"),
        },
        {
            text: "ya llevo 2 semanas aki y vendi 5 cuentas me sirve harto la plataforma",
            senderId: uid("camila.rojas@inc.com"),
            createdAt: new Date("2026-04-02T16:00:00Z"),
        },
        {
            text: "yo tmb ya he vendido un par y todo bien",
            senderId: uid("andres.vega@inc.com"),
            createdAt: new Date("2026-04-02T16:04:00Z"),
        },
        {
            text: "oye es verdad eso? cuanto se puede sacar al mes con esto?",
            senderId: uid("yesenia.apaza@inc.com"),
            createdAt: new Date("2026-04-02T16:06:00Z"),
        },
        {
            text: "depende de las cuentas q tengas yo saco algo extra como 200 dolares si me muevo",
            senderId: uid("camila.rojas@inc.com"),
            createdAt: new Date("2026-04-02T16:08:00Z"),
        },
        {
            text: "uff nada mal pa ser algo extra voy a publicar mas seguido entonces",
            senderId: uid("yesenia.apaza@inc.com"),
            createdAt: new Date("2026-04-02T16:10:00Z"),
        },
        {
            text: "busco cuenta de honkai con acheron o firefly alguien?",
            senderId: uid("estela.vilca@inc.com"),
            createdAt: new Date("2026-04-03T10:00:00Z"),
        },
        {
            text: "yo tengo acheron E2 ticket #T100",
            senderId: uid("claudia.nieto@inc.com"),
            createdAt: new Date("2026-04-03T10:04:00Z"),
        },
        {
            text: "uff eso kiero ya abro el ticket ahora mismo",
            senderId: uid("estela.vilca@inc.com"),
            createdAt: new Date("2026-04-03T10:06:00Z"),
        },
        {
            text: "oigan que juego esta de moda ahora?? ya me aburri del mismo",
            senderId: uid("rodrigo.benites@inc.com"),
            createdAt: new Date("2026-04-04T17:00:00Z"),
        },
        {
            text: "marvel rivals esta pegando fuerte podrian llegar cuentas pronto x aki",
            senderId: uid("mateo.herrera@inc.com"),
            createdAt: new Date("2026-04-04T17:04:00Z"),
        },
        {
            text: "delta force tmb hay gente vendiendo cuentas de ese",
            senderId: uid("bryan.aguilar@inc.com"),
            createdAt: new Date("2026-04-04T17:06:00Z"),
        },
        {
            text: "interesante voy a investigar esos juegos",
            senderId: uid("rodrigo.benites@inc.com"),
            createdAt: new Date("2026-04-04T17:08:00Z"),
        },
        {
            text: "hola recien entro venden cuentas de pokemon go aki??",
            senderId: uid("angela.condori@inc.com"),
            createdAt: new Date("2026-04-05T09:00:00Z"),
        },
        {
            text: "no he visto pero puedes publicar si tienes una",
            senderId: uid("sofia.guerra@inc.com"),
            createdAt: new Date("2026-04-05T09:04:00Z"),
        },
        {
            text: "ah ya yo buscaba comprar jaja gracias igual",
            senderId: uid("angela.condori@inc.com"),
            createdAt: new Date("2026-04-05T09:06:00Z"),
        },
        {
            text: "ya llegamos a 100 tickets publicados la web esta creciendo rapido",
            senderId: uid("pedro.alonso@inc.com"),
            createdAt: new Date("2026-04-06T12:00:00Z"),
        },
        {
            text: "se nota cuando entre eramos poquitos ahora hay harto movimiento",
            senderId: uid("carlos.rivas@inc.com"),
            createdAt: new Date("2026-04-06T12:04:00Z"),
        },
        {
            text: "bien x la plataforma ojala siga asi",
            senderId: uid("lucia.mendez@inc.com"),
            createdAt: new Date("2026-04-06T12:06:00Z"),
        },
        {
            text: "alguien tiene cuenta de elden ring o dark souls?? busco pa un amigo",
            senderId: uid("daniel.huanca@inc.com"),
            createdAt: new Date("2026-04-07T15:00:00Z"),
        },
        {
            text: "hay una con elden ring + dlc mira el ticket de jose bermudez",
            senderId: uid("lorena.acosta@inc.com"),
            createdAt: new Date("2026-04-07T15:04:00Z"),
        },
        {
            text: "ya vi gracias el precio esta razonable tmb",
            senderId: uid("daniel.huanca@inc.com"),
            createdAt: new Date("2026-04-07T15:06:00Z"),
        },
        {
            text: "buen finde a todos a seguir vendiendo cuentas jajaja",
            senderId: uid("camila.rojas@inc.com"),
            createdAt: new Date("2026-04-08T09:00:00Z"),
        },
        {
            text: "el finde siempre hay mas movimiento los sabados sobre todo",
            senderId: uid("miguel.torres@inc.com"),
            createdAt: new Date("2026-04-08T09:04:00Z"),
        },
        {
            text: "si la gente cobra viernes y el sabado se compra algo jajaja",
            senderId: uid("andres.vega@inc.com"),
            createdAt: new Date("2026-04-08T09:05:00Z"),
        }
    ];

    for (const msg of messages) {
        if (msg.senderId) {
            await prisma.loungeMessage.create({
                data: msg
            });
        }
    }
}