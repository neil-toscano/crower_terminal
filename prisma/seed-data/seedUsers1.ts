import { PrismaClient } from "@/app/generated/prisma/client";
import { Role } from "@/app/generated/prisma/enums";

export async function seedUsers1(prisma: PrismaClient) {
    const users = [
        // Admins / staff
        {
            email: "admin@escrow.local",
            name: "Escrow Admin",
            role: Role.ADMIN,
            createdAt: new Date("2026-03-01T08:00:00Z"),
        },
        {
            email: "soporte@escrow.local",
            name: "Soporte Escrow",
            role: Role.ADMIN,
            createdAt: new Date("2026-03-01T08:05:00Z"),
        },

        // Vendedores activos - batch 1
        {
            email: "pedro.alonso@inc.com",
            name: "Pedro Alonso",
            role: Role.USER,
            createdAt: new Date("2026-03-02T10:14:00Z"),
        },
        {
            email: "carlos.rivas@inc.com",
            name: "Carlos Rivas",
            role: Role.USER,
            createdAt: new Date("2026-03-02T11:30:00Z"),
        },
        {
            email: "miguel.torres@inc.com",
            name: "Miguel Torres",
            role: Role.USER,
            createdAt: new Date("2026-03-03T09:20:00Z"),
        },
        {
            email: "lucia.mendez@inc.com",
            name: "Lucia Mendez",
            role: Role.USER,
            createdAt: new Date("2026-03-03T14:45:00Z"),
        },
        {
            email: "andres.vega@inc.com",
            name: "Andres Vega",
            role: Role.USER,
            createdAt: new Date("2026-03-04T08:55:00Z"),
        },
        {
            email: "sofia.guerra@inc.com",
            name: "Sofia Guerra",
            role: Role.USER,
            createdAt: new Date("2026-03-04T16:10:00Z"),
        },
        {
            email: "diego.paredes@inc.com",
            name: "Diego Paredes",
            role: Role.USER,
            createdAt: new Date("2026-03-05T10:00:00Z"),
        },
        {
            email: "valentina.rios@inc.com",
            name: "Valentina Rios",
            role: Role.USER,
            createdAt: new Date("2026-03-05T11:22:00Z"),
        },
        {
            email: "sebastian.mora@inc.com",
            name: "Sebastian Mora",
            role: Role.USER,
            createdAt: new Date("2026-03-06T09:11:00Z"),
        },
        {
            email: "camila.rojas@inc.com",
            name: "Camila Rojas",
            role: Role.USER,
            createdAt: new Date("2026-03-06T13:40:00Z"),
        },
        {
            email: "javier.luna@inc.com",
            name: "Javier Luna",
            role: Role.USER,
            createdAt: new Date("2026-03-07T08:30:00Z"),
        },
        {
            email: "natalia.figueroa@inc.com",
            name: "Natalia Figueroa",
            role: Role.USER,
            createdAt: new Date("2026-03-07T15:00:00Z"),
        },
        {
            email: "roberto.salinas@inc.com",
            name: "Roberto Salinas",
            role: Role.USER,
            createdAt: new Date("2026-03-08T10:45:00Z"),
        },
        {
            email: "mariana.castro@inc.com",
            name: "Mariana Castro",
            role: Role.USER,
            createdAt: new Date("2026-03-08T12:00:00Z"),
        },
        {
            email: "felipe.navarro@inc.com",
            name: "Felipe Navarro",
            role: Role.USER,
            createdAt: new Date("2026-03-09T09:30:00Z"),
        },
        {
            email: "daniela.soto@inc.com",
            name: "Daniela Soto",
            role: Role.USER,
            createdAt: new Date("2026-03-09T16:20:00Z"),
        },
        {
            email: "mateo.herrera@inc.com",
            name: "Mateo Herrera",
            role: Role.USER,
            createdAt: new Date("2026-03-10T08:00:00Z"),
        },
        {
            email: "isabella.ramirez@inc.com",
            name: "Isabella Ramirez",
            role: Role.USER,
            createdAt: new Date("2026-03-10T11:15:00Z"),
        },
        {
            email: "alejandro.cruz@inc.com",
            name: "Alejandro Cruz",
            role: Role.USER,
            createdAt: new Date("2026-03-11T14:00:00Z"),
        },
        {
            email: "valeria.montoya@inc.com",
            name: "Valeria Montoya",
            role: Role.USER,
            createdAt: new Date("2026-03-11T16:50:00Z"),
        },
        {
            email: "nicolas.peña@inc.com",
            name: "Nicolas Peña",
            role: Role.USER,
            createdAt: new Date("2026-03-12T09:05:00Z"),
        },
        {
            email: "gabriela.vargas@inc.com",
            name: "Gabriela Vargas",
            role: Role.USER,
            createdAt: new Date("2026-03-12T10:30:00Z"),
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

    console.log(`✅ seedUsers1: ${users.length} users upserted`);
    return created;
}