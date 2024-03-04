import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateItemsForSaleDto } from './create-items_for_sale.dto';

export class UpdateItemsForSaleDto extends PartialType(CreateItemsForSaleDto){
    // @IsNumber()
    // @IsNotEmpty()
    // cat_id: number;

    // @IsString()
    // @IsNotEmpty()
    // item_name: string;

    // @IsNumber()
    // item_price: number;

    // @IsNumber()
    // item_unit: number;

    // @IsString()
    // item_origin: string;

    // @IsString()
    // item_info: string;
}
