import { PrismaClient } from "@/app/generated/prisma/client";
import { Role } from "@/app/generated/prisma/enums";

export async function seedUsers2(prisma: PrismaClient) {
    const users = [
        {
            email: "juan.espinoza@inc.com",
            name: "Juan Espinoza",
            role: Role.USER,
            createdAt: new Date("2026-03-13T09:00:00Z"),
        },
        {
            email: "paula.ibarra@inc.com",
            name: "Paula Ibarra",
            role: Role.USER,
            createdAt: new Date("2026-03-13T11:40:00Z"),
        },
        {
            email: "cristian.medina@inc.com",
            name: "Cristian Medina",
            role: Role.USER,
            createdAt: new Date("2026-03-14T08:20:00Z"),
        },
        {
            email: "renata.flores@inc.com",
            name: "Renata Flores",
            role: Role.USER,
            createdAt: new Date("2026-03-14T13:55:00Z"),
        },
        {
            email: "emilio.romero@inc.com",
            name: "Emilio Romero",
            role: Role.USER,
            createdAt: new Date("2026-03-15T10:10:00Z"),
        },
        {
            email: "andrea.silva@inc.com",
            name: "Andrea Silva",
            role: Role.USER,
            createdAt: new Date("2026-03-15T14:30:00Z"),
        },
        {
            email: "tomas.carrillo@inc.com",
            name: "Tomas Carrillo",
            role: Role.USER,
            createdAt: new Date("2026-03-16T09:45:00Z"),
        },
        {
            email: "karen.delgado@inc.com",
            name: "Karen Delgado",
            role: Role.USER,
            createdAt: new Date("2026-03-16T12:00:00Z"),
        },
        {
            email: "oscar.villa@inc.com",
            name: "Oscar Villa",
            role: Role.USER,
            createdAt: new Date("2026-03-17T08:50:00Z"),
        },
        {
            email: "paola.restrepo@inc.com",
            name: "Paola Restrepo",
            role: Role.USER,
            createdAt: new Date("2026-03-17T17:05:00Z"),
        },
        {
            email: "kevin.zapata@inc.com",
            name: "Kevin Zapata",
            role: Role.USER,
            createdAt: new Date("2026-03-18T11:00:00Z"),
        },
        {
            email: "lorena.acosta@inc.com",
            name: "Lorena Acosta",
            role: Role.USER,
            createdAt: new Date("2026-03-18T14:20:00Z"),
        },
        {
            email: "ivan.ortega@inc.com",
            name: "Ivan Ortega",
            role: Role.USER,
            createdAt: new Date("2026-03-19T09:30:00Z"),
        },
        {
            email: "sara.blanco@inc.com",
            name: "Sara Blanco",
            role: Role.USER,
            createdAt: new Date("2026-03-19T15:10:00Z"),
        },
        {
            email: "mario.suarez@inc.com",
            name: "Mario Suarez",
            role: Role.USER,
            createdAt: new Date("2026-03-20T10:00:00Z"),
        },
        {
            email: "patricia.leal@inc.com",
            name: "Patricia Leal",
            role: Role.USER,
            createdAt: new Date("2026-03-20T13:25:00Z"),
        },
        {
            email: "henry.pinto@inc.com",
            name: "Henry Pinto",
            role: Role.USER,
            createdAt: new Date("2026-03-21T09:05:00Z"),
        },
        {
            email: "jimena.cabrera@inc.com",
            name: "Jimena Cabrera",
            role: Role.USER,
            createdAt: new Date("2026-03-21T16:40:00Z"),
        },
        {
            email: "alex.ramos@inc.com",
            name: "Alex Ramos",
            role: Role.USER,
            createdAt: new Date("2026-03-22T08:30:00Z"),
        },
        {
            email: "diana.campos@inc.com",
            name: "Diana Campos",
            role: Role.USER,
            createdAt: new Date("2026-03-22T11:50:00Z"),
        },
        {
            email: "bryan.aguilar@inc.com",
            name: "Bryan Aguilar",
            role: Role.USER,
            createdAt: new Date("2026-03-23T10:20:00Z"),
        },
        {
            email: "veronica.pena@inc.com",
            name: "Veronica Peña",
            role: Role.USER,
            createdAt: new Date("2026-03-23T14:00:00Z"),
        },
        {
            email: "samuel.guerrero@inc.com",
            name: "Samuel Guerrero",
            role: Role.USER,
            createdAt: new Date("2026-03-24T09:15:00Z"),
        },
        {
            email: "rocio.sandoval@inc.com",
            name: "Rocio Sandoval",
            role: Role.USER,
            createdAt: new Date("2026-03-24T13:30:00Z"),
        },
        {
            email: "jose.bermudez@inc.com",
            name: "Jose Bermudez",
            role: Role.USER,
            createdAt: new Date("2026-03-25T10:45:00Z"),
        },
        {
            email: "claudia.nieto@inc.com",
            name: "Claudia Nieto",
            role: Role.USER,
            createdAt: new Date("2026-03-25T15:55:00Z"),
        },
        {
            email: "hugo.meza@inc.com",
            name: "Hugo Meza",
            role: Role.USER,
            createdAt: new Date("2026-03-26T09:00:00Z"),
        },
        {
            email: "monica.quispe@inc.com",
            name: "Monica Quispe",
            role: Role.USER,
            createdAt: new Date("2026-03-26T12:10:00Z"),
        },
        {
            email: "daniel.huanca@inc.com",
            name: "Daniel Huanca",
            role: Role.USER,
            createdAt: new Date("2026-03-27T08:45:00Z"),
        },
        {
            email: "ana.ticona@inc.com",
            name: "Ana Ticona",
            role: Role.USER,
            createdAt: new Date("2026-03-27T17:00:00Z"),
        },
        {
            email: "luis.mamani@inc.com",
            name: "Luis Mamani",
            role: Role.USER,
            createdAt: new Date("2026-03-28T10:30:00Z"),
        },
        {
            email: "angela.condori@inc.com",
            name: "Angela Condori",
            role: Role.USER,
            createdAt: new Date("2026-03-28T14:15:00Z"),
        },
        {
            email: "frank.arias@inc.com",
            name: "Frank Arias",
            role: Role.USER,
            createdAt: new Date("2026-03-29T09:20:00Z"),
        },
        {
            email: "nathaly.barrios@inc.com",
            name: "Nathaly Barrios",
            role: Role.USER,
            createdAt: new Date("2026-03-29T13:00:00Z"),
        },
        {
            email: "edgar.palacios@inc.com",
            name: "Edgar Palacios",
            role: Role.USER,
            createdAt: new Date("2026-03-30T11:10:00Z"),
        },
        {
            email: "xiomara.leon@inc.com",
            name: "Xiomara Leon",
            role: Role.USER,
            createdAt: new Date("2026-03-30T16:30:00Z"),
        },
        {
            email: "raul.choque@inc.com",
            name: "Raul Choque",
            role: Role.USER,
            createdAt: new Date("2026-03-31T09:00:00Z"),
        },
        {
            email: "milagros.quispe@inc.com",
            name: "Milagros Quispe",
            role: Role.USER,
            createdAt: new Date("2026-03-31T14:45:00Z"),
        },
        {
            email: "rodrigo.benites@inc.com",
            name: "Rodrigo Benites",
            role: Role.USER,
            createdAt: new Date("2026-04-01T09:10:00Z"),
        },
        {
            email: "estela.vilca@inc.com",
            name: "Estela Vilca",
            role: Role.USER,
            createdAt: new Date("2026-04-01T15:20:00Z"),
        },
        {
            email: "carlos.chura@inc.com",
            name: "Carlos Chura",
            role: Role.USER,
            createdAt: new Date("2026-04-02T10:00:00Z"),
        },
        {
            email: "yesenia.apaza@inc.com",
            name: "Yesenia Apaza",
            role: Role.USER,
            createdAt: new Date("2026-04-02T13:35:00Z"),
        },
        {
            email: "william.flores@inc.com",
            name: "William Flores",
            role: Role.USER,
            createdAt: new Date("2026-04-03T08:55:00Z"),
        },
        {
            email: "lisbeth.ccama@inc.com",
            name: "Lisbeth Ccama",
            role: Role.USER,
            createdAt: new Date("2026-04-03T12:40:00Z"),
        },
    ];

    const created: Record<string, { id: string; email: string }> = {};

    for (const u of users) {
        const user = await prisma.user.upsert({
            where: { email: u.email },
            update: {},
            create: {
                email: u.email,
                name: u.name,
                role: u.role,
                createdAt: u.createdAt,
            },
        });
        created[u.email] = user;
    }

    console.log(`✅ seedUsers2: ${users.length} users upserted`);
    return created;
}