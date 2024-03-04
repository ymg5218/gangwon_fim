import { PartialType } from '@nestjs/mapped-types';
import { CreateTopCategoryDto } from './create-top_category.dto';

export class UpdateTopCategoryDto extends PartialType(CreateTopCategoryDto) {}
