import { Injectable } from '@nestjs/common';
import { CreateTopCategoryDto } from './dto/create-top_category.dto';
import { UpdateTopCategoryDto } from './dto/update-top_category.dto';

@Injectable()
export class TopCategoriesService {
  create(createTopCategoryDto: CreateTopCategoryDto) {
    return 'This action adds a new topCategory';
  }

  findAll() {
    return `This action returns all topCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} topCategory`;
  }

  update(id: number, updateTopCategoryDto: UpdateTopCategoryDto) {
    return `This action updates a #${id} topCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} topCategory`;
  }
}
