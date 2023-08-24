import { createModel } from 'schemix';

export default createModel(todoModel => {
    todoModel
        .int('id', { id: true, unique: true })
        .boolean('done', { default: false })
        .string('content');
});
