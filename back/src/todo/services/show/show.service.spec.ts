/*
 * @group show
 * @group service
 * @group showTodoService
 */

import { Test, TestingModule } from '@nestjs/testing';
import { ShowService } from './show.service';
import { PrismaService } from '@/prisma/prisma.service';
import { TodoFactory } from '@/todo/factories/toto-factory';
import { faker } from '@faker-js/faker';
import { NotFoundException } from '@nestjs/common';

describe('ShowService', () => {
    let service: ShowService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ShowService, PrismaService]
        }).compile();

        service = module.get<ShowService>(ShowService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('returns result sending correct data', async () => {
        const wantedItem = await TodoFactory.create();

        const result = await service.findOne(wantedItem.id);

        expect(wantedItem).toEqual(result);
    });

    it('returns NO FOUND sending not existing ID', async () => {
        const fakeId = faker.number.int({ min: 10000000 });

        try {
            await service.findOne(fakeId);
        } catch (e) {
            expect(e).toStrictEqual(new NotFoundException());
        }
    });
});
