import { Test, TestingModule } from '@nestjs/testing';
import { ItemsForSaleController } from './items_for_sale.controller';
import { ItemsForSaleService } from './items_for_sale.service';

describe('ItemsForSaleController', () => {
  let controller: ItemsForSaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsForSaleController],
      providers: [ItemsForSaleService],
    }).compile();

    controller = module.get<ItemsForSaleController>(ItemsForSaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
