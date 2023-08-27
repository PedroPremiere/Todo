import { Prisma } from '@prisma/client';

export async function truncate() {
    const tables = Prisma.ModelName;

    await prismaService.$queryRawUnsafe('SET FOREIGN_KEY_CHECKS = 0');

    for (const table in tables) {
        await prismaService[table].deleteMany({});
    }

    await prismaService.$queryRawUnsafe('SET FOREIGN_KEY_CHECKS = 1');
}
