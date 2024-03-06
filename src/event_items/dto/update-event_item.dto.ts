import { PartialType } from '@nestjs/mapped-types';
import { CreateEventItemDto } from './create-event_item.dto';
import { IsDateString, IsNumber, IsString } from 'class-validator';

export class UpdateEventItemDto extends PartialType(CreateEventItemDto) {
    @IsDateString()
    new_event_start_date?: Date;

    @IsDateString()
    new_event_end_date?: Date;

    @IsNumber()
    new_event_price?: number;

    @IsString()
    new_event_info?: string;
}
