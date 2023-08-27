import { Controller, Get } from '@nestjs/common';

import { IndexService } from '@/todo/services/index/index.service';

@Controller()
export class IndexController {
    constructor(private indexService: IndexService) {}

    @Get('/todos')
    async invoke() {
        return this.indexService.findAll();
    }
}
