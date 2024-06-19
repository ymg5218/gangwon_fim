import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { PrimaryColumn } from "typeorm";

export class CreateMemberDto {
    @PrimaryColumn()
    @IsNotEmpty()
    @IsNumber()
    member_id : number

    @IsNotEmpty()
    @IsString()
    @IsNotEmpty()
    member_name : string

    @IsNotEmpty()
    @IsString()
    member_addr : string

    @IsNumber()
    member_point : number

    @IsString()
    member_receive_message : string

    @IsString()
    manager : string

    @IsString()
    is_admin : string

}
