import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopCategoriesService } from './top_categories.service';
import { CreateTopCategoryDto } from './dto/create-top_category.dto';
import { UpdateTopCategoryDto } from './dto/update-top_category.dto';

@Controller('top-categories')
export class TopCategoriesController {
  constructor(private readonly topCategoriesService: TopCategoriesService) {}

  @Post()
  create(@Body() createTopCategoryDto: CreateTopCategoryDto) {
    return this.topCategoriesService.create(createTopCategoryDto);
  }

  @Get()
  findAll() {
    return this.topCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTopCategoryDto: UpdateTopCategoryDto) {
    return this.topCategoriesService.update(+id, updateTopCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.topCategoriesService.remove(+id);
  }
}
