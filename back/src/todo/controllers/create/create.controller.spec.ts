/*
 * @group create
 * @group controller
 * @group createController
 */

import { post } from '@test/methods/post';
import { TodoFactory } from '@/todo/factories/toto-factory';

const url = `/todos`;

describe('CreateController', () => {
    it('Returns OK sending CORRECT DATA', async () => {
        const payload = TodoFactory.generate();

        const { status, body } = await post({ url, payload });

        expect(status).toBe(201);
        expect(body.id).toBeTruthy();
        expect(body.done).toBe(payload.done);
        expect(body.content).toBe(payload.content);
    });

    it('Returns BAD REQUEST when no CONTENT', async () => {
        const dummyDate = TodoFactory.generate();
        const payload = { done: dummyDate.done };

        const { status, body } = await post({ url, payload });

        expect(status).toBe(400);

        expect(body.error).toBe('Bad Request');
        expect(body.message).toEqual([
            { property: 'content', messages: ['Should not be empty'] }
        ]);
    });

    it('Returns BAD REQUEST when EMPTY DATA', async () => {
        const { status, body } = await post({ url });

        expect(status).toBe(400);

        expect(body.error).toBe('Bad Request');
        expect(body.message).toEqual([
            { property: 'content', messages: ['Should not be empty'] }
        ]);
    });
});
