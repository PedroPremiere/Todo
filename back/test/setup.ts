//import { truncate } from './helpers/truncate';
//import { redis } from '@/project/redis/connect';

import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@/app.module';
import { setContainer } from '@/plugins/setContainer';

afterAll(async () => {
    /*
    await truncate();
    redis.quit();
    
   */

    globalThis._request = request;

    const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule]
    }).compile();

    const app = moduleFixture.createNestApplication();

    setContainer(app);
    await app.init();

    globalThis.request = request(app.getHttpServer());

    //globalThis.prismaService = app.get<PrismaService>(PrismaService);
    globalThis.__APP__ = app;
    //console.log(globalThis.__APP__);
    globalThis.app = app;
    global.app = app;

    //console.log(global);
});
