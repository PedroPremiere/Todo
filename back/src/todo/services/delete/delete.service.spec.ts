/*
 * @group delete
 * @group service
 * @group deleteTodoService
 */

import { Test, TestingModule } from '@nestjs/testing';
import { DeleteService } from './delete.service';
import { PrismaService } from '@/prisma/prisma.service';
import { TodoFactory } from '@/todo/factories/toto-factory';
import { NotFoundException } from '@nestjs/common';
import { faker } from '@faker-js/faker';

describe('DeleteService', () => {
    let service: DeleteService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DeleteService, PrismaService]
        }).compile();

        service = module.get<DeleteService>(DeleteService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('delete', () => {
        let itemToDelete;
        beforeEach(async () => {
            itemToDelete = await TodoFactory.create();
        });

        it('deletes item when correct data', async () => {
            const deleted = await service.delete(itemToDelete.id);
            expect(deleted).toStrictEqual({ message: 'removed' });

            const itemAfterDelete = await prismaService.todo.findFirst({
                where: { id: itemToDelete.id }
            });

            expect(itemAfterDelete).toBeFalsy();
        });

        it('throws error when item doesnt exist', async () => {
            const fakeId = faker.number.int({ min: 10000000 });

            try {
                await service.delete(fakeId);
            } catch (e) {
                expect(e).toStrictEqual(new NotFoundException());
            }
        });
    });
});
