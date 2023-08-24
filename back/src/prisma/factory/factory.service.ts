import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class FactoryService {
    static create() {
        return new PrismaService();
    }
}
