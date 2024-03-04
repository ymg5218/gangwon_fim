import { Injectable } from '@nestjs/common';
import { CreateDetailedCategoryDto } from './dto/create-detailed_category.dto';
import { UpdateDetailedCategoryDto } from './dto/update-detailed_category.dto';

@Injectable()
export class DetailedCategoriesService {
  create(createDetailedCategoryDto: CreateDetailedCategoryDto) {
    return 'This action adds a new detailedCategory';
  }

  findAll() {
    return `This action returns all detailedCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detailedCategory`;
  }

  update(id: number, updateDetailedCategoryDto: UpdateDetailedCategoryDto) {
    return `This action updates a #${id} detailedCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} detailedCategory`;
  }
}
