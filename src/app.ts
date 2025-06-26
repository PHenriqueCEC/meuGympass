import fastify from "fastify";
import { PrismaClient } from '@prisma/client'

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
    data: {
        name: "Pedro Henrique",
        email: "pedro@gmail.com",
        password_hash: "12345",

    },
})