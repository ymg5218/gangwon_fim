import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseRecordDto } from './create-purchase_record.dto';

export class UpdatePurchaseRecordDto extends PartialType(CreatePurchaseRecordDto) {}
