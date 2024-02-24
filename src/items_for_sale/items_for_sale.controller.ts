import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemsForSaleService } from './items_for_sale.service';
import { CreateItemsForSaleDto } from './dto/create-items_for_sale.dto';
import { UpdateItemsForSaleDto } from './dto/update-items_for_sale.dto';

@Controller('items-for-sale')
export class ItemsForSaleController {
  constructor(private readonly itemsForSaleService: ItemsForSaleService) {}

  @Post()
  create(@Body() createItemsForSaleDto: CreateItemsForSaleDto) {
    return this.itemsForSaleService.create(createItemsForSaleDto);
  }

  @Get()
  findAll() {
    return this.itemsForSaleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsForSaleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemsForSaleDto: UpdateItemsForSaleDto) {
    return this.itemsForSaleService.update(+id, updateItemsForSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsForSaleService.remove(+id);
  }
}
