import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemsForSaleDto } from './dto/create-items_for_sale.dto';
import { UpdateItemsForSaleDto } from './dto/update-items_for_sale.dto';
import { ItemsForSale } from './entities/items_for_sale.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { throwIfEmpty } from 'rxjs';

@Injectable()
export class ItemsForSaleService {
  constructor(
    @InjectRepository(ItemsForSale) 
    private itemforsaleRepository: Repository<ItemsForSale>,
  ){}

  create(createItemsForSaleDto: CreateItemsForSaleDto) {
    this.itemforsaleRepository.save(createItemsForSaleDto).then(() => throwIfEmpty())
    return 'This action adds a new itemsForSale';
  }

  findAll(): Promise<ItemsForSale[]> {
    return this.itemforsaleRepository.find();
  }

  async findOne(id : number) : Promise<ItemsForSale> {
    const item = await this.itemforsaleRepository.findOneBy({ item_id: id });

    if (!item){
      throw new NotFoundException(`상품 아이디 ${ id }를 찾을 수 없음.`)
    }
    return item;
  }

  async update(item_id: number, updateItemsForSaleDto: UpdateItemsForSaleDto) : Promise<ItemsForSale>{
    const item = await this.itemforsaleRepository.findOneBy({ item_id });

    if (!item){
      throw new NotFoundException(`상품 아이디 ${ item_id }를 찾을 수 없음.`)
    };

    Object.assign(item, updateItemsForSaleDto);

    return await this.itemforsaleRepository.save(item);
  }

  remove(item_id: number) {
    return this.itemforsaleRepository.delete(item_id);
  }
}
