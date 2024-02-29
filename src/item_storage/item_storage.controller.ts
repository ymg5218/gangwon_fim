import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemStorageService } from './item_storage.service';
import { CreateItemStorageDto } from './dto/create-item_storage.dto';
import { UpdateItemStorageDto } from './dto/update-item_storage.dto';

@Controller('item-storage')
export class ItemStorageController {
  constructor(private readonly itemStorageService: ItemStorageService) {}

  @Post()
  create(@Body() createItemStorageDto: CreateItemStorageDto) {
    return this.itemStorageService.create(createItemStorageDto);
  }

  @Get()
  findAll() {
    return this.itemStorageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemStorageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemStorageDto: UpdateItemStorageDto) {
    return this.itemStorageService.update(+id, updateItemStorageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemStorageService.remove(+id);
  }
}
