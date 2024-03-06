import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDetailedCategoryDto } from './dto/create-detailed_category.dto';
import { UpdateDetailedCategoryDto } from './dto/update-detailed_category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DetailedCategory } from './entities/detailed_category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DetailedCategoriesService {
  constructor(
    @InjectRepository(DetailedCategory)
    private detailedCategoryRepository: Repository<DetailedCategory>,
  ){}

  async create(createDetailedCategoryDto: CreateDetailedCategoryDto) {
    const detailed_category = DetailedCategory.from(createDetailedCategoryDto);

    const { detailed_cat_id } = await this.detailedCategoryRepository.save(detailed_category);
    return detailed_cat_id;
  }

  async findAll() {
    return await this.detailedCategoryRepository.find();
  }

  async findOne(detaild_cat_id: number): Promise<DetailedCategory> {
    const detailed_category = await this.detailedCategoryRepository.findOne({ where : { detailed_cat_id: detaild_cat_id }})

    if(!detaild_cat_id){
      throw new NotFoundException(`하위 카테고리 아이디 ${ detaild_cat_id }를 찾을 수 없습니다.`);
    }

    return detailed_category;
  }

  async update(detaild_cat_id: number, updateDetailedCategoryDto: UpdateDetailedCategoryDto) {
    const detailed_category = await this.detailedCategoryRepository.findOne({ where : { detailed_cat_id: detaild_cat_id }})

    if(!detaild_cat_id){
      throw new NotFoundException(`하위 카테고리 아이디 ${ detaild_cat_id }를 찾을 수 없습니다.`);
    }

    Object.assign(detailed_category, updateDetailedCategoryDto);
    
    return this.detailedCategoryRepository.save(detailed_category);
  }

  async remove(detaild_cat_id: number) {
    return await this.detailedCategoryRepository.delete(detaild_cat_id);
  }
}
