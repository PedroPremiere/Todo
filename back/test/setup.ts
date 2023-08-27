import { truncate } from '@test/helpers/truncate';

afterAll(async () => {
    await truncate();
});
