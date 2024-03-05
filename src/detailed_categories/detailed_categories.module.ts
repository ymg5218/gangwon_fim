import { Module } from '@nestjs/common';
import { DetailedCategoriesService } from './detailed_categories.service';
import { DetailedCategoriesController } from './detailed_categories.controller';
import { DetailedCategory } from './entities/detailed_category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopCategory } from 'src/top_categories/entities/top_category.entity';
import { ItemsForSale } from 'src/items_for_sale/entities/items_for_sale.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DetailedCategory,
      TopCategory,
      ItemsForSale,
    ])
  ],
  controllers: [DetailedCategoriesController],
  providers: [DetailedCategoriesService],
})
export class DetailedCategoriesModule {}
