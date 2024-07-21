import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ItemsForSaleService } from './items_for_sale.service';
import { CreateItemsForSaleDto } from './dto/create-items_for_sale.dto';
import { UpdateItemsForSaleDto } from './dto/update-items_for_sale.dto';
import { ItemsForSale } from './entities/items_for_sale.entity';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/items-for-sale')
export class ItemsForSaleController {
  constructor(
    private readonly itemsForSaleService: ItemsForSaleService
  ) { }

  @Post("/createItem")
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './public/images',
        filename: (req, file, callback) => {
          const ext = extname(file.originalname);
          const filename = `product${Date.now()}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async create(
    @Body() createItemsForSaleDto: CreateItemsForSaleDto,
    @UploadedFile() image: Express.Multer.File) {
    const newItem = { ...createItemsForSaleDto, imagePath: `/images/${image.filename}` };
    const item_id = await this.itemsForSaleService.create(newItem);
    return { item_id };
  }

  @Get('/findAll')
  getAllItem(): Promise<ItemsForSale[]> {
    return this.itemsForSaleService.findAll();
  }

  @Get('/findAllWithCategory')
  async getAllItemWithCategory() {
    return this.itemsForSaleService.findAllWithCategory();
  }

  @Get('/findOneWithCategory/:top_cat_id')
  async getOneWithCategory(@Param('top_cat_id') top_cat_id: number) {
    console.log("findOneWithCategory-Controller");
    return await this.itemsForSaleService.findOneWithCategory(+top_cat_id);
  }

  @Get('findOne/:item_id')
  async getItem(@Param('item_id') item_id: number): Promise<ItemsForSale> {
    return await this.itemsForSaleService.findOne(+item_id);
  }

  @Patch('update/:item_id')
  async update(@Param('item_id') item_id: number, @Body() updateItemsForSaleDto: UpdateItemsForSaleDto) {
    return await this.itemsForSaleService.update(+item_id, updateItemsForSaleDto);
  }

  @Delete('delete/:item_id')
  remove(@Param('item_id') item_id: number) {
    return this.itemsForSaleService.remove(+item_id);
  }
}
