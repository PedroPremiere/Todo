import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { PrismaIndicatorService } from '@/health/prisma-indicator/prisma-indicator.service';

@Controller('health')
export class HealthController {
    constructor(
        private health: HealthCheckService,
        private prismaIndicator: PrismaIndicatorService
    ) {}

    @Get()
    @HealthCheck()
    check() {
        return this.health.check([() => this.prismaIndicator.check('prisma')]);
    }
}
