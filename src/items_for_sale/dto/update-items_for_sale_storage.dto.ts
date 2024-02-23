import { PartialType } from "@nestjs/mapped-types";
import { CreateItemsForSaleStorageDto } from "./create-items_for_sale-storage.dto";

export class UpdateItemsForSaleStorageDto extends PartialType(CreateItemsForSaleStorageDto){
    
}