import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ItemStorageService } from './item_storage.service';
import { CreateItemStorageDto } from './dto/create-item_storage.dto';
import { UpdateItemStorageDto } from './dto/update-item_storage.dto';

@Controller('item-storage')
export class ItemStorageController {
  constructor(
    private readonly itemStorageService: ItemStorageService
    ) {}

  @Post('/createItemStorage')
  async create(@Body() createItemStorageDto: CreateItemStorageDto) {
    return await this.itemStorageService.create(createItemStorageDto);
  }

  @Get('/findAll')
  async findAll() {
    return await this.itemStorageService.findAll();
  }

  @Get('/select/:id')
  async findOne(@Param('item_id') item_id: number) {
    return await this.itemStorageService.findSomethings(+item_id);
  }

  @Post('/update')
  async update(@Body() updateItemStorageDto: UpdateItemStorageDto) {
    return await this.itemStorageService.update(updateItemStorageDto);
  }

  @Post('/delete')
  async remove(@Body() createItemStorageDto: CreateItemStorageDto) {
    const item_id = createItemStorageDto.item_id;
    const storage = createItemStorageDto.storage;
    return this.itemStorageService.remove(+item_id, storage);
  }
}
