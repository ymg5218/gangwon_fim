import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseRecordService } from './purchase_record.service';
import { CreatePurchaseRecordDto } from './dto/create-purchase_record.dto';
import { UpdatePurchaseRecordDto } from './dto/update-purchase_record.dto';

@Controller('purchase-record')
export class PurchaseRecordController {
  constructor(private readonly purchaseRecordService: PurchaseRecordService) {}

  @Post()
  create(@Body() createPurchaseRecordDto: CreatePurchaseRecordDto) {
    return this.purchaseRecordService.create(createPurchaseRecordDto);
  }

  @Get()
  findAll() {
    return this.purchaseRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseRecordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseRecordDto: UpdatePurchaseRecordDto) {
    return this.purchaseRecordService.update(+id, updatePurchaseRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseRecordService.remove(+id);
  }
}
