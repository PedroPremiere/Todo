import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from '@/health/health.controller';
import { PrismaIndicatorService } from '@/health/prisma-indicator/prisma-indicator.service';

@Module({
    imports: [TerminusModule],
    controllers: [HealthController],
    providers: [PrismaIndicatorService]
})
export class HealthModule {}
