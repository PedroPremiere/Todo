import { Prisma, PrismaClient } from '@prisma/client';
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService
    extends PrismaClient<Prisma.PrismaClientOptions, string>
    implements OnModuleInit
{
    async onModuleInit() {}
    async enableShutdownHooks(app: INestApplication) {
        this.$on('beforeExit', async () => {
            await app.close();
        });
    }

    onModuleDestroy() {
        return this.$disconnect();
    }
}
