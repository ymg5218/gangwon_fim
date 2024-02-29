import { Injectable } from '@nestjs/common';
import { CreateItemStorageDto } from './dto/create-item_storage.dto';
import { UpdateItemStorageDto } from './dto/update-item_storage.dto';

@Injectable()
export class ItemStorageService {
  create(createItemStorageDto: CreateItemStorageDto) {
    return 'This action adds a new itemStorage';
  }

  findAll() {
    return `This action returns all itemStorage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemStorage`;
  }

  update(id: number, updateItemStorageDto: UpdateItemStorageDto) {
    return `This action updates a #${id} itemStorage`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemStorage`;
  }
}
