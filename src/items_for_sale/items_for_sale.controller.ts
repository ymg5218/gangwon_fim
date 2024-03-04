import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemsForSaleService } from './items_for_sale.service';
import { CreateItemsForSaleDto } from './dto/create-items_for_sale.dto';
import { UpdateItemsForSaleDto } from './dto/update-items_for_sale.dto';
import { ItemsForSale } from './entities/items_for_sale.entity';

@Controller('/items-for-sale')
export class ItemsForSaleController {
  constructor(
    private readonly itemsForSaleService: ItemsForSaleService
    ) {}

  @Post("/createItem")
  create(@Body() createItemsForSaleDto: CreateItemsForSaleDto) {
    return this.itemsForSaleService.create(createItemsForSaleDto);
  }

  @Get('findAll')
  getAllItem() : Promise<ItemsForSale[]>{
    return this.itemsForSaleService.findAll();
  }

  @Get(':id')
  async getItem(@Param('id') id: number) : Promise<ItemsForSale>{
    return await this.itemsForSaleService.findOne(+id);
  }

  @Patch(':item_id')
  async update(@Param('item_id') item_id: number, @Body() updateItemsForSaleDto: UpdateItemsForSaleDto) {
    return await this.itemsForSaleService.update(+item_id, updateItemsForSaleDto);
  }

  @Delete(':item_id')
  remove(@Param('item_id') item_id: number) {
    return this.itemsForSaleService.remove(+item_id);
  }
}
