import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetailedPurchaseRecordService } from './detailed_purchase_record.service';
import { CreateDetailedPurchaseRecordDto } from './dto/create-detailed_purchase_record.dto';
import { UpdateDetailedPurchaseRecordDto } from './dto/update-detailed_purchase_record.dto';

@Controller('detailed-purchase-record')
export class DetailedPurchaseRecordController {
  constructor(private readonly detailedPurchaseRecordService: DetailedPurchaseRecordService) {}

  @Post()
  create(@Body() createDetailedPurchaseRecordDto: CreateDetailedPurchaseRecordDto) {
    return this.detailedPurchaseRecordService.create(createDetailedPurchaseRecordDto);
  }

  @Get()
  findAll() {
    return this.detailedPurchaseRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detailedPurchaseRecordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetailedPurchaseRecordDto: UpdateDetailedPurchaseRecordDto) {
    return this.detailedPurchaseRecordService.update(+id, updateDetailedPurchaseRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailedPurchaseRecordService.remove(+id);
  }
}
