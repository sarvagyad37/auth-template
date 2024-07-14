import { PrismaClient } from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
    //  for next.js hot reload in development
    //  workaround to avoid prisma client reinitialization
    globalThis.prisma = db;
}