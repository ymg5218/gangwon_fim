import { Injectable } from '@nestjs/common';
import { CreateDeliveryRecordDto } from './dto/create-delivery_record.dto';
import { UpdateDeliveryRecordDto } from './dto/update-delivery_record.dto';

@Injectable()
export class DeliveryRecordService {
  create(createDeliveryRecordDto: CreateDeliveryRecordDto) {
    return 'This action adds a new deliveryRecord';
  }

  findAll() {
    return `This action returns all deliveryRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliveryRecord`;
  }

  update(id: number, updateDeliveryRecordDto: UpdateDeliveryRecordDto) {
    return `This action updates a #${id} deliveryRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliveryRecord`;
  }
}
