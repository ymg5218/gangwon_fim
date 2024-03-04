import { Injectable } from '@nestjs/common';
import { CreateShoppingBasketDto } from './dto/create-shopping_basket.dto';
import { UpdateShoppingBasketDto } from './dto/update-shopping_basket.dto';

@Injectable()
export class ShoppingBasketService {
  create(createShoppingBasketDto: CreateShoppingBasketDto) {
    return 'This action adds a new shoppingBasket';
  }

  findAll() {
    return `This action returns all shoppingBasket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shoppingBasket`;
  }

  update(id: number, updateShoppingBasketDto: UpdateShoppingBasketDto) {
    return `This action updates a #${id} shoppingBasket`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingBasket`;
  }
}
