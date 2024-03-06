import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTopCategoryDto } from './dto/create-top_category.dto';
import { UpdateTopCategoryDto } from './dto/update-top_category.dto';
import { TopCategory } from './entities/top_category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TopCategoriesService {
  constructor(
    @InjectRepository(TopCategory)
    private topCategoryRepository: Repository<TopCategory>,
  ){}

  async create(createTopCategoryDto: CreateTopCategoryDto) {
    const top_category = TopCategory.from(createTopCategoryDto);

    const { top_cat_id } = await this.topCategoryRepository.save(top_category);
    return top_cat_id;
  }

  async findAll(): Promise<TopCategory[]> {
    return await this.topCategoryRepository.find();
  }

  async findOne(top_cat_id: number): Promise<TopCategory> {
    const top_category = await this.topCategoryRepository.findOne({ where : { top_cat_id : top_cat_id}});
    
    if (!top_category){
      throw new NotFoundException(`상위 카테고리 아이디 ${ top_cat_id}를 찾을 수 없습니다.`);
    }

    return top_category;
  }

  async update(top_cat_id: number, updateTopCategoryDto: UpdateTopCategoryDto) {
    const top_category = await this.topCategoryRepository.findOne({ where : { top_cat_id : top_cat_id}})
    
    if (!top_category){
      throw new NotFoundException(`상위 카테고리 아이디 ${ top_cat_id}를 찾을 수 없습니다.`);
    }

    Object.assign(top_category, updateTopCategoryDto);

    return this.topCategoryRepository.save(top_category);
  }

  async remove(top_cat_id: number) {
    return await this.topCategoryRepository.delete(top_cat_id);
  }
}
