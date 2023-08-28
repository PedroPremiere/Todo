import { Controller, Get, Param } from '@nestjs/common';

import { ShowService } from '@/todo/services/show/show.service';

@Controller()
export class ShowController {
    constructor(private showService: ShowService) {}

    @Get('/todos/:id')
    async invoke(@Param('id') id: number) {
        return this.showService.findOne(id);
    }
}
