import { Module } from '@nestjs/common';
import { ShoppingBasketService } from './shopping_basket.service';
import { ShoppingBasketController } from './shopping_basket.controller';

@Module({
  controllers: [ShoppingBasketController],
  providers: [ShoppingBasketService],
})
export class ShoppingBasketModule {}
