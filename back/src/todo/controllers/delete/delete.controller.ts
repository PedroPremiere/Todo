import { Controller, Delete, Param } from '@nestjs/common';

import { DeleteService } from '@/todo/services/delete/delete.service';

@Controller()
export class DeleteController {
    constructor(private deleteService: DeleteService) {}

    @Delete('/todos/:id')
    async invoke(@Param('id') id: number) {
        return this.deleteService.delete(id);
    }
}
