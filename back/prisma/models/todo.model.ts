import { createModel } from 'schemix';

export default createModel(todoModel => {
    todoModel
        .int('id', { id: true, unique: true, default: { autoincrement: true } })
        .boolean('done', { default: false })
        .string('content');
});
