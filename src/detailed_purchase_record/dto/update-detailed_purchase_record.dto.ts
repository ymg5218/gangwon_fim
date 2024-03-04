import { PartialType } from '@nestjs/mapped-types';
import { CreateDetailedPurchaseRecordDto } from './create-detailed_purchase_record.dto';

export class UpdateDetailedPurchaseRecordDto extends PartialType(CreateDetailedPurchaseRecordDto) {}
