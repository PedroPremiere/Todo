import 'tsconfig-paths/register';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@/app.module';
import { PrismaService } from '@/prisma/prisma.service';
import { setContainer } from '@/plugins/setContainer';
import * as request from 'supertest';

export default async () => {
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
    //globalThis.app = app;
    global.app = request(app.getHttpServer());

    console.log(global);

    /*
    global._request = request;


    global.app = moduleFixture.createNestApplication();

    setContainer(app);
    setGlobalPrefix(app);
    initI18(app);

    await global.app.init();

    global.request = request(app.getHttpServer());

    global.i18nService = i18nService;
    global.prismaService = app.get<PrismaService>(PrismaService);
    global.graph = graph;

    await truncate();
    
 */
};
