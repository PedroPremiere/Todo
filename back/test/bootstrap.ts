import 'tsconfig-paths/register';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@/app.module';
import { setContainer } from '@/plugins/setContainer';
import * as request from 'supertest';
import { AppService } from '@/app.service';
import { PrismaService } from '@/prisma/prisma.service';
import { truncate } from '@test/helpers/truncate';
import { ValidationPipe } from '@nestjs/common';
import { exceptionFactory } from '@/plugins/exceptionFactory';

export default async () => {
    global._request = request;

    const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
        providers: [AppService]
    }).compile();

    const app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            exceptionFactory: exceptionFactory
        })
    );

    setContainer(app);
    await app.init();

    global.request = request(app.getHttpServer());

    global.app = app;
    global.prismaService = app.get<PrismaService>(PrismaService);
    await truncate();
};
