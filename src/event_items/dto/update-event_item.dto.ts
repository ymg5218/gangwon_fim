import { PartialType } from '@nestjs/mapped-types';
import { CreateEventItemDto } from './create-event_item.dto';

export class UpdateEventItemDto extends PartialType(CreateEventItemDto) {}
