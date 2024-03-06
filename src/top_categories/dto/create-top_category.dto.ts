import { IsNotEmpty, IsString, } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateTopCategoryDto {
    @PrimaryGeneratedColumn()
    top_cat_id : number

    @IsNotEmpty()
    @IsString()
    top_cat_name : string
}
