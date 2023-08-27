import { TodoFactory } from '@/todo/factories/toto-factory';

function createTodo() {
    const todoData = TodoFactory.generate();

    return TodoFactory.save(todoData);
}

async function main() {
    for (let i = 0; i < 100; i++) {
        const todo = await createTodo();

        console.log(todo);
    }
}

main();
