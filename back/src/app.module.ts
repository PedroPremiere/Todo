import { Module } from '@nestjs/common';

import { AppService } from '@/app.service';
import { TodoModule } from '@/todo/todo.module';
import { AppController } from '@/app.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { HealthModule } from '@/health/health.module';
import { CreateService } from '@/todo/services/create/create.service';

@Module({
    imports: [PrismaModule, HealthModule, TodoModule],
    controllers: [AppController],
    providers: [AppService, CreateService]
})
export class AppModule {}
