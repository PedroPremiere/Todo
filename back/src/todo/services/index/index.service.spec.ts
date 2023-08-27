/*
 * @group index
 * @group contract
 * @group contractIndex
 */

//import { Test, TestingModule } from '@nestjs/testing';
import { IndexService } from './index.service';
//import { prismaService } from '@test/global';

describe('IndexService', () => {
    let service: IndexService;
    /*
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [IndexService],
      }).compile();

      service = module.get<IndexService>(IndexService);
    });

   */
    beforeEach(async () => {
        /*
        console.log(globalThis.request);
        console.log(globalThis);

         */
        //console.log(globalThis.app);
        console.log(globalThis);
        //console.log(app);
        //service = globalThis.serv.get<IndexService>(IndexService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(2).toBe(2);
    });
});
