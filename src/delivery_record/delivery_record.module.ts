import { Module } from '@nestjs/common';
import { DeliveryRecordService } from './delivery_record.service';
import { DeliveryRecordController } from './delivery_record.controller';

@Module({
  controllers: [DeliveryRecordController],
  providers: [DeliveryRecordService],
})
export class DeliveryRecordModule {}
