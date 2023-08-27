import { Body, Controller, Post } from '@nestjs/common';

import { CreateTodoTdo } from '@/todo/dto/createTodo.tdo';
import { CreateService } from '@/todo/services/create/create.service';

@Controller()
export class CreateController {
    constructor(private createService: CreateService) {}

    @Post('/todos')
    async invoke(@Body() data: CreateTodoTdo) {
        return this.createService.create(data);
    }
}
