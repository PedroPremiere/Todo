/* eslint-disable no-var */

import * as supertest from 'supertest';
import { PrismaService } from '@/project/prisma/services/PrismaService.service';
//import { INestApplication } from '@nestjs/common';

declare global {
    var request: supertest;
    var app: supertest;
    //var i18nService;
    var prismaService: PrismaService;
    //var graph;
}
