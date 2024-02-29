import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoppingBasketService } from './shopping_basket.service';
import { CreateShoppingBasketDto } from './dto/create-shopping_basket.dto';
import { UpdateShoppingBasketDto } from './dto/update-shopping_basket.dto';

@Controller('shopping-basket')
export class ShoppingBasketController {
  constructor(private readonly shoppingBasketService: ShoppingBasketService) {}

  @Post()
  create(@Body() createShoppingBasketDto: CreateShoppingBasketDto) {
    return this.shoppingBasketService.create(createShoppingBasketDto);
  }

  @Get()
  findAll() {
    return this.shoppingBasketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingBasketService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShoppingBasketDto: UpdateShoppingBasketDto) {
    return this.shoppingBasketService.update(+id, updateShoppingBasketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingBasketService.remove(+id);
  }
}
