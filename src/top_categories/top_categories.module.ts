import { Module } from '@nestjs/common';
import { TopCategoriesService } from './top_categories.service';
import { TopCategoriesController } from './top_categories.controller';

@Module({
  controllers: [TopCategoriesController],
  providers: [TopCategoriesService],
})
export class TopCategoriesModule {}
