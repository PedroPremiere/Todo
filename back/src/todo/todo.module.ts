import { Module } from '@nestjs/common';
import { IndexController } from '@/todo/controllers/index/index.controller';
import { IndexService } from './services/index/index.service';
import { CreateService } from './services/create/create.service';
import { CreateController } from './controllers/create/create.controller';
import { DeleteController } from './controllers/delete/delete.controller';
import { DeleteService } from './services/delete/delete.service';
import { EditController } from './controllers/edit/edit.controller';
import { EditService } from './services/edit/edit.service';

@Module({
    controllers: [IndexController, CreateController, DeleteController, EditController],
    providers: [IndexService, CreateService, DeleteService, EditService]
})
export class TodoModule {}
