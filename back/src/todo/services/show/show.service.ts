import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ShowService {
    constructor(private readonly prismaService: PrismaService) {}

    async findOne(id: number) {
        if (!id) {
            throw new NotFoundException();
        }

        const item = await this.prismaService.todo.findFirst({
            where: { id }
        });

        if (!item) {
            throw new NotFoundException();
        }

        return item;
    }
}
