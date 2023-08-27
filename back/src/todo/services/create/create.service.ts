import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateTodoTdo } from '@/todo/dto/createTodo.tdo';

@Injectable()
export class CreateService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(data: CreateTodoTdo) {
        return this.prismaService.todo.create({
            data
        });
    }
}
