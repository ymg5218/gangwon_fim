import { PartialType } from '@nestjs/mapped-types';
import { CreateShoppingBasketDto } from './create-shopping_basket.dto';

export class UpdateShoppingBasketDto extends PartialType(CreateShoppingBasketDto) {}
