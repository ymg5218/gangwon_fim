import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemsForSaleDto } from './dto/create-items_for_sale.dto';
import { UpdateItemsForSaleDto } from './dto/update-items_for_sale.dto';
import { ItemsForSale } from './entities/items_for_sale.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsForSaleService {
  constructor(
    @InjectRepository(ItemsForSale) 
    private itemforsaleRepository: Repository<ItemsForSale>,
  ){}

  async create(createItemsForSaleDto: CreateItemsForSaleDto) {
    const item = ItemsForSale.from(createItemsForSaleDto);

    const { item_id } = await this.itemforsaleRepository.save(item);

    // this.itemforsaleRepository.save(createItemsForSaleDto).then(() => throwIfEmpty())
    return item_id;
  }

  async findAll(): Promise<ItemsForSale[]> {
    return await this.itemforsaleRepository.find();
  }

  async findOne(item_id : number) : Promise<ItemsForSale> {
    const item = await this.itemforsaleRepository.findOne({ where : { item_id : item_id}});

    if (!item){
      throw new NotFoundException(`상품 아이디 ${ item_id }를 찾을 수 없음.`)
    }
    return await item;
  }

  async update(item_id: number, updateItemsForSaleDto: UpdateItemsForSaleDto) : Promise<ItemsForSale>{
    const item = await this.itemforsaleRepository.findOne({ where : { item_id : item_id}});

    if (!item){
      throw new NotFoundException(`상품 아이디 ${ item_id }를 찾을 수 없음.`)
    };

    Object.assign(item, updateItemsForSaleDto);

    return await this.itemforsaleRepository.save(item);
  }

  async remove(item_id: number) {
    return await this.itemforsaleRepository.delete(item_id);
  }
}
