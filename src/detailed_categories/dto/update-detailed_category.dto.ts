import { PartialType } from '@nestjs/mapped-types';
import { CreateDetailedCategoryDto } from './create-detailed_category.dto';

export class UpdateDetailedCategoryDto extends PartialType(CreateDetailedCategoryDto) {}
