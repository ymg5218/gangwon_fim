import { IsNotEmpty, IsNumber, IsString, } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateDetailedCategoryDto {
    @PrimaryGeneratedColumn()
    detailed_cat_id : number

    @IsNotEmpty()
    @IsString()
    detailed_cat_name : string

    @IsNotEmpty()
    @IsNumber()
    parent_cat_id : number

    
}
