import { Module } from '@nestjs/common';
import { IndexController } from '@/todo/controllers/index/index.controller';
import { IndexService } from './services/index/index.service';
import { CreateService } from './services/create/create.service';
import { CreateController } from './controllers/create/create.controller';
import { DeleteController } from './controllers/delete/delete.controller';
import { DeleteService } from './services/delete/delete.service';

@Module({
    controllers: [IndexController, CreateController, DeleteController],
    providers: [IndexService, CreateService, DeleteService]
})
export class TodoModule {}
