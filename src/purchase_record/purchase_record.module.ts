import { Module } from '@nestjs/common';
import { PurchaseRecordService } from './purchase_record.service';
import { PurchaseRecordController } from './purchase_record.controller';

@Module({
  controllers: [PurchaseRecordController],
  providers: [PurchaseRecordService],
})
export class PurchaseRecordModule {}
