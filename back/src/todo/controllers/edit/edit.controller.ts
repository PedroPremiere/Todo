import { Body, Controller, Param, Put } from '@nestjs/common';

import { EditService } from '@/todo/services/edit/edit.service';
import { CreateTodoTdo } from '@/todo/dto/createTodo.tdo';

@Controller()
export class EditController {
    constructor(private editService: EditService) {}

    @Put('/todos/:id')
    async invoke(@Param('id') id: number, @Body() data: CreateTodoTdo) {
        return this.editService.edit({ id, ...data });
    }
}
