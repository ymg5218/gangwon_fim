import { IsNotEmpty, IsString } from "class-validator";
import { PrimaryColumn } from "typeorm";


export class CreateItemStorageDto {
    @PrimaryColumn()
    @IsNotEmpty()
    item_id : number

    @IsString()
    @IsNotEmpty()
    @PrimaryColumn()
    storage : string
}
