import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryRecordService } from './delivery_record.service';
import { CreateDeliveryRecordDto } from './dto/create-delivery_record.dto';
import { UpdateDeliveryRecordDto } from './dto/update-delivery_record.dto';

@Controller('delivery-record')
export class DeliveryRecordController {
  constructor(private readonly deliveryRecordService: DeliveryRecordService) {}

  @Post()
  create(@Body() createDeliveryRecordDto: CreateDeliveryRecordDto) {
    return this.deliveryRecordService.create(createDeliveryRecordDto);
  }

  @Get()
  findAll() {
    return this.deliveryRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryRecordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliveryRecordDto: UpdateDeliveryRecordDto) {
    return this.deliveryRecordService.update(+id, updateDeliveryRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryRecordService.remove(+id);
  }
}
