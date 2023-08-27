import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { ValidationPipe } from '@nestjs/common';
import { exceptionFactory } from '@/plugins/exceptionFactory';
import { setContainer } from '@/plugins/setContainer';
import { conf } from '@/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

    const config = new DocumentBuilder()
        .setTitle('ToDo List Demo')
        .setDescription('Demo of ToDo list made in nest.js')
        .setVersion('1.0')
        .addTag('todo')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(conf.app.serverPort);
}

bootstrap();
