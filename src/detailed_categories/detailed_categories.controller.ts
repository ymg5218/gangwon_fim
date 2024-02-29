import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetailedCategoriesService } from './detailed_categories.service';
import { CreateDetailedCategoryDto } from './dto/create-detailed_category.dto';
import { UpdateDetailedCategoryDto } from './dto/update-detailed_category.dto';

@Controller('detailed-categories')
export class DetailedCategoriesController {
  constructor(private readonly detailedCategoriesService: DetailedCategoriesService) {}

  @Post()
  create(@Body() createDetailedCategoryDto: CreateDetailedCategoryDto) {
    return this.detailedCategoriesService.create(createDetailedCategoryDto);
  }

  @Get()
  findAll() {
    return this.detailedCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detailedCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetailedCategoryDto: UpdateDetailedCategoryDto) {
    return this.detailedCategoriesService.update(+id, updateDetailedCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailedCategoriesService.remove(+id);
  }
}
