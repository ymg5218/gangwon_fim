import { Injectable } from '@nestjs/common';
import { CreatePurchaseRecordDto } from './dto/create-purchase_record.dto';
import { UpdatePurchaseRecordDto } from './dto/update-purchase_record.dto';

@Injectable()
export class PurchaseRecordService {
  create(createPurchaseRecordDto: CreatePurchaseRecordDto) {
    return 'This action adds a new purchaseRecord';
  }

  findAll() {
    return `This action returns all purchaseRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchaseRecord`;
  }

  update(id: number, updatePurchaseRecordDto: UpdatePurchaseRecordDto) {
    return `This action updates a #${id} purchaseRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseRecord`;
  }
}
