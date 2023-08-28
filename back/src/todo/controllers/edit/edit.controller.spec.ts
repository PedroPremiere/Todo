/*
 * @group edit
 * @group Controller
 * @group editTodoController
 */

import { TodoFactory } from '@/todo/factories/toto-factory';
import { edit } from '@test/methods/edit';
import { faker } from '@faker-js/faker';
import { post } from '@test/methods/post';

const url = `/todos`;

describe('EditController', () => {
    let itemToDelete;

    beforeEach(async () => {
        itemToDelete = await TodoFactory.create();
    });

    it('Deletes items when correct data', async () => {
        const payload = TodoFactory.generate();

        const { status, body } = await edit({
            url: `${url}/${itemToDelete.id}`,
            payload
        });

        expect(status).toBe(200);
        expect(body).toEqual({ id: itemToDelete.id, ...payload });

        const itemAfterDelete = await prismaService.todo.findFirst({
            where: { id: itemToDelete.id }
        });

        expect(itemAfterDelete.content).toBe(payload.content);
        expect(itemAfterDelete.done).toBe(payload.done);
        expect(itemAfterDelete.id).toBe(itemToDelete.id);
    });

    it('Returns NO FOUND when non existing ID', async () => {
        const fakeId = faker.number.int({ min: 10000000 });
        const payload = TodoFactory.generate();

        const { status, body } = await edit({
            url: `${url}/${fakeId}`,
            payload
        });

        expect(status).toBe(404);
        expect(body).toEqual({ message: 'Not Found', statusCode: 404 });
    });

    it('Returns NO FOUND when non existing ID', async () => {
        const fakeId = faker.animal.bird();
        const payload = TodoFactory.generate();

        const { status, body } = await edit({
            url: `${url}/${fakeId}`,
            payload
        });

        expect(status).toBe(404);
        expect(body).toEqual({ message: 'Not Found', statusCode: 404 });
    });

    it('Returns BAD REQUEST when EMPTY DATA', async () => {
        const { status, body } = await edit({
            url: `${url}/${itemToDelete.id}`
        });

        expect(status).toBe(400);

        expect(body.error).toBe('Bad Request');
        expect(body.message).toEqual([
            { property: 'content', messages: ['Should not be empty'] }
        ]);
    });
});
