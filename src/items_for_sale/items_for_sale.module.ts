import { Module } from '@nestjs/common';
import { ItemsForSaleService } from './items_for_sale.service';
import { ItemsForSaleController } from './items_for_sale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsForSale } from './entities/items_for_sale.entity';
import { DetailedCategory } from 'src/detailed_categories/entities/detailed_category.entity';
import { ItemStorage } from 'src/item_storage/entities/item_storage.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      ItemsForSale,
      DetailedCategory,
      ItemStorage
    ])
  ],
  controllers: [ItemsForSaleController],
  providers: [ItemsForSaleService],
})
export class ItemsForSaleModule {}
