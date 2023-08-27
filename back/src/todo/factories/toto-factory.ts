import { faker } from '@faker-js/faker';

import { CreateTodoTdo } from '@/todo/dto/createTodo.tdo';
import { AbstractFactory } from '@/abstract/abstract-factory';

export class TodoFactory extends AbstractFactory {
    static create(inputData?: CreateTodoTdo) {
        const todo = inputData || TodoFactory.generate();

        return TodoFactory.save(todo);
    }

    static generate() {
        return {
            content: faker.commerce.productDescription(),
            done: faker.datatype.boolean()
        };
    }

    static save(todoData: CreateTodoTdo) {
        return this.prisma.todo.create({ data: todoData });
    }
}
