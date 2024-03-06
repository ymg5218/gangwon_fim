import { PartialType } from '@nestjs/mapped-types';
import { CreateItemStorageDto } from './create-item_storage.dto';
import { IsString } from 'class-validator';

export class UpdateItemStorageDto extends PartialType(CreateItemStorageDto) {
    @IsString()
    new_storage: string;
}
