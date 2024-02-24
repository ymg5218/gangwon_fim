import { Test, TestingModule } from '@nestjs/testing';
import { ItemsForSaleService } from './items_for_sale.service';

describe('ItemsForSaleService', () => {
  let service: ItemsForSaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemsForSaleService],
    }).compile();

    service = module.get<ItemsForSaleService>(ItemsForSaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
