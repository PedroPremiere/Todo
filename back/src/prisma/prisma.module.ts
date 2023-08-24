import { Global, Module } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';
import { FactoryService } from '@/prisma/factory/factory.service';

@Global()
@Module({
    providers: [
        {
            provide: PrismaService,
            useValue: FactoryService.create()
        }
    ],
    exports: [PrismaService]
})
export class PrismaModule {}
