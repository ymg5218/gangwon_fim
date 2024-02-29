import { Module } from '@nestjs/common';
import { DetailedCategoriesService } from './detailed_categories.service';
import { DetailedCategoriesController } from './detailed_categories.controller';

@Module({
  controllers: [DetailedCategoriesController],
  providers: [DetailedCategoriesService],
})
export class DetailedCategoriesModule {}
