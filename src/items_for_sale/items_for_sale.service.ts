import { Injectable } from '@nestjs/common';
import { CreateItemsForSaleDto } from './dto/create-items_for_sale.dto';
import { UpdateItemsForSaleDto } from './dto/update-items_for_sale.dto';

@Injectable()
export class ItemsForSaleService {
  create(createItemsForSaleDto: CreateItemsForSaleDto) {
    return 'This action adds a new itemsForSale';
  }

  findAll() {
    return `This action returns all itemsForSale`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemsForSale`;
  }

  update(id: number, updateItemsForSaleDto: UpdateItemsForSaleDto) {
    return `This action updates a #${id} itemsForSale`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemsForSale`;
  }
}
