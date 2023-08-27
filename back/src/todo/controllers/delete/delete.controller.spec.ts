/*
 * @group delete
 * @group controller
 * @group deleteTodoController
 */

import { TodoFactory } from '@/todo/factories/toto-factory';
import { remove } from '@test/methods/remove';
import { faker } from '@faker-js/faker';

const url = `/todos`;

describe('DeleteController', () => {
    let itemToDelete;

    beforeEach(async () => {
        itemToDelete = await TodoFactory.create();
    });

    it('Deletes items when correct data', async () => {
        const { status, body } = await remove({
            url: `${url}/${itemToDelete.id}`
        });

        expect(status).toBe(200);
        expect(body).toEqual({ message: 'removed' });

        const itemAfterDelete = await prismaService.todo.findFirst({
            where: { id: itemToDelete.id }
        });

        expect(itemAfterDelete).toBeFalsy();
    });

    it('Returns NO FOUND when non existing ID', async () => {
        const fakeId = faker.number.int({ min: 10000000 });

        const { status, body } = await remove({
            url: `${url}/${fakeId}`
        });

        expect(status).toBe(404);
        expect(body).toEqual({ message: 'Not Found', statusCode: 404 });
    });
});
