import { Module } from '@nestjs/common';
import { DetailedPurchaseRecordService } from './detailed_purchase_record.service';
import { DetailedPurchaseRecordController } from './detailed_purchase_record.controller';

@Module({
  controllers: [DetailedPurchaseRecordController],
  providers: [DetailedPurchaseRecordService],
})
export class DetailedPurchaseRecordModule {}
