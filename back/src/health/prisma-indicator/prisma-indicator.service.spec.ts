import { Test, TestingModule } from '@nestjs/testing';
import { PrismaIndicatorService } from './prisma-indicator.service';

describe('PrismaIndicatorService', () => {
    let service: PrismaIndicatorService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PrismaIndicatorService]
        }).compile();

        service = module.get<PrismaIndicatorService>(PrismaIndicatorService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
