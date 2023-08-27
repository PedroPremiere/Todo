import { Module } from '@nestjs/common';
import { IndexController } from '@/todo/controllers/index/index.controller';
import { IndexService } from './services/index/index.service';
import { CreateService } from './services/create/create.service';
import { CreateController } from './controllers/create/create.controller';

@Module({
    controllers: [IndexController, CreateController],
    providers: [IndexService, CreateService]
})
export class TodoModule {}
