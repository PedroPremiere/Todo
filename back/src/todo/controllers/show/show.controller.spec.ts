/*
 * @group show
 * @group controller
 * @group showController
 */

import { get } from '@test/methods/get';
import { TodoFactory } from '@/todo/factories/toto-factory';
import { faker } from '@faker-js/faker';

const url = `/todos`;

describe('ShowController', () => {
    let wantedItem;

    beforeEach(async () => {
        wantedItem = await TodoFactory.create();
    });

    it('Returns wanted Item sending correct data', async () => {
        const { status, body } = await get({
            url: `${url}/${wantedItem.id}`
        });

        expect(status).toBe(200);
        expect(body).toEqual(wantedItem);
    });

    it('Returns NO FOUND Item sending NOT EXISTING ID', async () => {
        const fakeId = faker.number.int({ min: 10000000 });

        const { status, body } = await get({
            url: `${url}/${fakeId}`
        });

        expect(status).toBe(404);
        expect(body).toEqual({ message: 'Not Found', statusCode: 404 });
    });

    it('Returns NO FOUND Item sending NOT EXISTING ID as STRING', async () => {
        const fakeId = faker.animal.bird();

        const { status, body } = await get({
            url: `${url}/${fakeId}`
        });

        expect(status).toBe(404);
        expect(body).toEqual({ message: 'Not Found', statusCode: 404 });
    });
});
