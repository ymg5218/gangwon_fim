import { IsNotEmpty, IsNumber, IsString, } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateItemsForSaleDto {

    @PrimaryGeneratedColumn()
    item_id : number;

    @IsNumber()
    @IsNotEmpty()
    cat_id: number;


    @IsString()
    @IsNotEmpty()
    item_name: string;

    @IsNumber()
    item_price: number;

    @IsNumber()
    item_unit: number;

    @IsString()
    item_origin: string;

    @IsString()
    item_info: string;
}
