import { Injectable } from '@nestjs/common';
import { CreateItemImageDto } from './dto/create-item_image.dto';
import { UpdateItemImageDto } from './dto/update-item_image.dto';

@Injectable()
export class ItemImageService {
  create(createItemImageDto: CreateItemImageDto) {
    return 'This action adds a new itemImage';
  }

  findAll() {
    return `This action returns all itemImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemImage`;
  }

  update(id: number, updateItemImageDto: UpdateItemImageDto) {
    return `This action updates a #${id} itemImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemImage`;
  }
}
