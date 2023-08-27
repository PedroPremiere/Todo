/*
 * @group service
 * @group create
 * @group createService
 */

import { CreateService } from '@/todo/services/create/create.service';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@/prisma/prisma.service';
import { TodoFactory } from '@/todo/factories/toto-factory';

describe('CreateService', () => {
    let service: CreateService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CreateService, PrismaService]
        }).compile();

        service = module.get<CreateService>(CreateService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('created item is available in DB', async () => {
        const dummyData = TodoFactory.generate();

        const dataInDB = await service.create(dummyData);

        const itemInDb = await prismaService.todo.findFirst({
            where: { id: dataInDB.id }
        });

        expect(itemInDb.content).toBe(dummyData.content);
        expect(itemInDb.done).toBe(dummyData.done);
    });
});
