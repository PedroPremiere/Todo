/*
 * @group edit
 * @group service
 * @group editTodoService
 */

import { Test, TestingModule } from '@nestjs/testing';
import { EditService } from './edit.service';
import { PrismaService } from '@/prisma/prisma.service';
import { TodoFactory } from '@/todo/factories/toto-factory';
import { faker } from '@faker-js/faker';
import { NotFoundException } from '@nestjs/common';

describe('EditService', () => {
    let service: EditService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EditService, PrismaService]
        }).compile();

        service = module.get<EditService>(EditService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('edit', () => {
        let itemToEdit;
        beforeEach(async () => {
            itemToEdit = await TodoFactory.create();
        });

        it('updates item when correct data', async () => {
            const payload = {
                id: itemToEdit.id,
                content: faker.commerce.productDescription(),
                done: faker.datatype.boolean()
            };

            const edited = await service.edit(payload);

            expect(edited).toStrictEqual(payload);

            const itemAfterEdit = await prismaService.todo.findFirst({
                where: { id: itemToEdit.id }
            });

            expect(itemAfterEdit).toEqual(payload);
        });

        it('throws error when item doesnt exist', async () => {
            const payload = {
                id: faker.number.int({ min: 10000000 }),
                content: faker.commerce.productDescription(),
                done: faker.datatype.boolean()
            };

            try {
                await service.edit(payload);
            } catch (e) {
                expect(e).toStrictEqual(new NotFoundException());
            }
        });
    });
});
