import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemStorageDto } from './dto/create-item_storage.dto';
import { UpdateItemStorageDto } from './dto/update-item_storage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemStorage } from './entities/item_storage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemStorageService {
  constructor(
    @InjectRepository(ItemStorage)
    private itemStorageRepository: Repository<ItemStorage>,
  ){}

  async create(createItemStorageDto: CreateItemStorageDto) {
    const item_storage = ItemStorage.from(createItemStorageDto);

    const { item_id, storage } = await this.itemStorageRepository.save(item_storage);
    return `아이템 id : ${item_id} 의 보관 방법 : ${storage }`;
  }

  async findAll() {
    return await this.itemStorageRepository.find();
  }

  async findSomethings(item_id: number): Promise<ItemStorage[]> {
    const item_storage = await this.itemStorageRepository.find({ where : { item_id: item_id }});

    if (!item_storage){
      throw new NotFoundException(`해당 아이템(아이디 : ${ item_id })의 저장 방법을 찾을 수 없음`);
    }
    return item_storage;
  }

  async update(updateItemStorageDto: UpdateItemStorageDto) {
    const item_id = updateItemStorageDto.item_id;
    const storage = updateItemStorageDto.storage;
    const new_storage = updateItemStorageDto.new_storage;

    const item_storage = await this.itemStorageRepository.findOne({
      where : {
        item_id : item_id,
        storage: storage
      }
    });

    if (!item_storage){
      throw new NotFoundException(`해당 아이템(아이디 : ${ item_id })의 저장 방법을 찾을 수 없음`);
    }

    await this.itemStorageRepository.update({ item_id : item_id, storage: storage }, {storage: new_storage})
    return item_storage;
  }

  async remove(item_id: number, storage: string) {
    return await this.itemStorageRepository.delete({ 
      item_id : item_id,
      storage:  storage 
    });
  }
}
