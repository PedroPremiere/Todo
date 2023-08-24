import { Module } from '@nestjs/common';

import { AppService } from '@/app.service';
import { AppController } from '@/app.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { HealthModule } from '@/health/health.module';

@Module({
    imports: [PrismaModule, HealthModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
