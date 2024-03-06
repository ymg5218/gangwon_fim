import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetailedCategoriesService } from './detailed_categories.service';
import { CreateDetailedCategoryDto } from './dto/create-detailed_category.dto';
import { UpdateDetailedCategoryDto } from './dto/update-detailed_category.dto';

@Controller('detailed-categories')
export class DetailedCategoriesController {
  constructor(
    private readonly detailedCategoriesService: DetailedCategoriesService
    ) {}

  @Post('/createDetailCat')
  async create(@Body() createDetailedCategoryDto: CreateDetailedCategoryDto) {
    return await this.detailedCategoriesService.create(createDetailedCategoryDto);
  }

  @Get('/findAll')
  async findAll() {
    return await this.detailedCategoriesService.findAll();
  }

  @Get('/findOne/:detaild_cat_id')
  async findOne(@Param('detaild_cat_id') detaild_cat_id: number) {
    return await this.detailedCategoriesService.findOne(+detaild_cat_id);
  }

  @Patch('/update/:detaild_cat_id')
  async update(@Param('detaild_cat_id') detaild_cat_id: number, @Body() updateDetailedCategoryDto: UpdateDetailedCategoryDto) {
    return await this.detailedCategoriesService.update(+detaild_cat_id, updateDetailedCategoryDto);
  }

  @Delete('/delete/:detaild_cat_id')
  async remove(@Param('detaild_cat_id') detaild_cat_id: number) {
    return await this.detailedCategoriesService.remove(+detaild_cat_id);
  }
}
