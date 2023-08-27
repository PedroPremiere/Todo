import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoTdo } from '@/todo/dto/todoTdo';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class EditService {
    constructor(private readonly prismaService: PrismaService) {}

    async edit(data: TodoTdo): Promise<TodoTdo> {
        const item = await this.prismaService.todo.findFirst({
            where: { id: data.id }
        });

        if (!item) {
            throw new NotFoundException();
        }

        return this.prismaService.todo.update({
            data: data,
            where: { id: data.id }
        });
    }
}
