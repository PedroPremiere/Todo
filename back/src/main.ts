import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { ValidationPipe } from '@nestjs/common';
import { exceptionFactory } from '@/plugins/exceptionFactory';
import { setContainer } from '@/plugins/setContainer';
import { conf } from '@/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    setContainer(app);

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            exceptionFactory: exceptionFactory
        })
    );
    await app.listen(conf.app.serverPort);
}

bootstrap();
