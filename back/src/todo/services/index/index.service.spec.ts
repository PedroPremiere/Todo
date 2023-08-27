/*
 * @group index
 * @group service
 */

import { Test, TestingModule } from '@nestjs/testing';

import { PrismaService } from '@/prisma/prisma.service';
import { TodoFactory } from '@/todo/factories/toto-factory';
import { IndexService } from '@/todo/services/index/index.service';

describe('IndexService', () => {
    let service: IndexService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [IndexService, PrismaService]
        }).compile();

        service = module.get<IndexService>(IndexService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('findAll', () => {
        const todos = [];
        const wantedToDos = 5;
        let todosInDB = [];

        beforeEach(async () => {
            for (let i = 0; i < wantedToDos; i++) {
                todos.push(await TodoFactory.create());
            }

            todosInDB = await service.findAll();
        });

        it('result includes all created records', async () => {
            for (const item of todos) {
                expect(todosInDB).toContainEqual(
                    expect.objectContaining({
                        content: item.content,
                        done: item.done,
                        id: item.id
                    })
                );
            }
        });

        it('list of created records includes all records from result', async () => {
            for (const item of todosInDB) {
                expect(todos).toContainEqual(
                    expect.objectContaining({
                        content: item.content,
                        done: item.done,
                        id: item.id
                    })
                );
            }
        });
    });
});
