import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliveryRecordDto } from './create-delivery_record.dto';

export class UpdateDeliveryRecordDto extends PartialType(CreateDeliveryRecordDto) {}
