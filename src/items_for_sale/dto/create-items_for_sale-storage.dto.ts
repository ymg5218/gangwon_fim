import { IsArray, IsNumber } from "class-validator";


export class CreateItemsForSaleStorageDto {

    @IsNumber()
    item_id: number;

    @IsArray()
    item_storage: String[];
}