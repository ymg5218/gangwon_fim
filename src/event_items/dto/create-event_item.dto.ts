import { IsDateString, IsNotEmpty, IsString } from "class-validator";
import { PrimaryColumn } from "typeorm";

export class CreateEventItemDto {
    @PrimaryColumn()
    @IsNotEmpty()
    item_id : number
    
    @PrimaryColumn()
    @IsDateString()
    @IsNotEmpty()
    event_start_date : Date

    @PrimaryColumn()
    @IsDateString()
    @IsNotEmpty()
    event_end_date : Date

    @IsNotEmpty()
    event_price : number

    @IsString()
    event_info : string

}
