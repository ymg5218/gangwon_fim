import { PartialType } from '@nestjs/mapped-types';
import { CreateItemImageDto } from './create-item_image.dto';

export class UpdateItemImageDto extends PartialType(CreateItemImageDto) {}
