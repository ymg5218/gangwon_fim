import { Module } from '@nestjs/common';
import { TopCategoriesService } from './top_categories.service';
import { TopCategoriesController } from './top_categories.controller';
import { TopCategory } from './entities/top_category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailedCategory } from 'src/detailed_categories/entities/detailed_category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TopCategory, 
      DetailedCategory,
    ])
  ],
  controllers: [TopCategoriesController],
  providers: [TopCategoriesService],
})
export class TopCategoriesModule {}
