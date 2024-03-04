import { Injectable } from '@nestjs/common';
import { CreateDetailedPurchaseRecordDto } from './dto/create-detailed_purchase_record.dto';
import { UpdateDetailedPurchaseRecordDto } from './dto/update-detailed_purchase_record.dto';

@Injectable()
export class DetailedPurchaseRecordService {
  create(createDetailedPurchaseRecordDto: CreateDetailedPurchaseRecordDto) {
    return 'This action adds a new detailedPurchaseRecord';
  }

  findAll() {
    return `This action returns all detailedPurchaseRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detailedPurchaseRecord`;
  }

  update(id: number, updateDetailedPurchaseRecordDto: UpdateDetailedPurchaseRecordDto) {
    return `This action updates a #${id} detailedPurchaseRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} detailedPurchaseRecord`;
  }
}
