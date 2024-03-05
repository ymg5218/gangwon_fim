import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopCategoriesService } from './top_categories.service';
import { CreateTopCategoryDto } from './dto/create-top_category.dto';
import { UpdateTopCategoryDto } from './dto/update-top_category.dto';
import { TopCategory } from './entities/top_category.entity';

@Controller('top-categories')
export class TopCategoriesController {
  constructor(
    private readonly topCategoriesService: TopCategoriesService
    ) {}

  @Post('/createTopCat')
  async create(@Body() createTopCategoryDto: CreateTopCategoryDto) {
    return await this.topCategoriesService.create(createTopCategoryDto);
  }

  @Get('findAll')
  async findAll(): Promise<TopCategory[]> {
    return await this.topCategoriesService.findAll();
  }

  @Get('findOne/:top_cat_id')
  findOne(@Param('top_cat_id') top_cat_id: number) : Promise<TopCategory> {
    return this.topCategoriesService.findOne(+top_cat_id);
  }

  @Patch('update/:top_cat_id')
  update(@Param('top_cat_id') top_cat_id: number, @Body() updateTopCategoryDto: UpdateTopCategoryDto) {
    return this.topCategoriesService.update(+top_cat_id, updateTopCategoryDto);
  }

  @Delete('delete/:top_cat_id')
  remove(@Param('top_cat_id') top_cat_id: number) {
    return this.topCategoriesService.remove(+top_cat_id);
  }
}
