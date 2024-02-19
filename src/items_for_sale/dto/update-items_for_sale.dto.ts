import { PartialType } from '@nestjs/mapped-types';
import { CreateItemsForSaleDto } from './create-items_for_sale.dto';

export class UpdateItemsForSaleDto extends PartialType(CreateItemsForSaleDto) {}
