import { PartialType } from '@nestjs/mapped-types';
import { CreateItemStorageDto } from './create-item_storage.dto';

export class UpdateItemStorageDto extends PartialType(CreateItemStorageDto) {}
