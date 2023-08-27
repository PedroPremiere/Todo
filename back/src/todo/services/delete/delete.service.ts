import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class DeleteService {
    constructor(private readonly prismaService: PrismaService) {}

    async delete(id: number) {
        if (!id) {
            throw new NotFoundException();
        }

        const item = await this.prismaService.todo.findFirst({ where: { id } });

        if (!item) {
            throw new NotFoundException();
        }

        await this.prismaService.todo.delete({ where: { id } });

        return { message: 'removed' };
    }
}
