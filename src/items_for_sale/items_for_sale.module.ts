import { Module } from '@nestjs/common';
import { ItemsForSaleService } from './items_for_sale.service';
import { ItemsForSaleController } from './items_for_sale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsForSale } from './entities/items_for_sale.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([ItemsForSale])
  ],
  controllers: [ItemsForSaleController],
  providers: [ItemsForSaleService],
})
export class ItemsForSaleModule {}
