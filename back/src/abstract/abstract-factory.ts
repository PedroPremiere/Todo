import { FactoryService } from '@/prisma/factory/factory.service';

export class AbstractFactory {
    static prisma = FactoryService.create();
}
