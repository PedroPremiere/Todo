/*
 * @group index
 * @group controller
 * @group indexController
 */

import { TodoFactory } from '@/todo/factories/toto-factory';

import { get } from '@test/methods/get';

const url = `/todos`;

const todos = [];
const wantedToDos = 5;

describe('IndexController', () => {
    beforeAll(async () => {
        for (let i = 0; i < wantedToDos; i++) {
            todos.push(await TodoFactory.create());
        }
    });

    it('Returns List of items', async () => {
        const { status, body } = await get({ url });

        expect(status).toBe(200);

        expect(body.length).toBe(wantedToDos);

        expect(body).toEqual(todos);
    });
});
