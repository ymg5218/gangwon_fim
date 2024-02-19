import { Module } from '@nestjs/common';
import { ItemsForSaleService } from './items_for_sale.service';
import { ItemsForSaleController } from './items_for_sale.controller';

@Module({
  controllers: [ItemsForSaleController],
  providers: [ItemsForSaleService],
})
export class ItemsForSaleModule {}
