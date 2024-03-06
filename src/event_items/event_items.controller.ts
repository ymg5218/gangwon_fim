import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventItemsService } from './event_items.service';
import { CreateEventItemDto } from './dto/create-event_item.dto';
import { UpdateEventItemDto } from './dto/update-event_item.dto';

@Controller('event-items')
export class EventItemsController {
  constructor(private readonly eventItemsService: EventItemsService) {}

  @Post('/createEventItem')
  async create(@Body() createEventItemDto: CreateEventItemDto) {
    return await this.eventItemsService.create(createEventItemDto);
  }

  @Get('/findAll')
  async findAll() {
    return await this.eventItemsService.findAll();
  }

  @Post('/findOne')
  async findOne(@Body() findInfo : any) {
    return await this.eventItemsService.findOne(findInfo);
  }

  @Post('/update')
  update(@Body() updateEventItemDto: UpdateEventItemDto) {
    return this.eventItemsService.update(updateEventItemDto);
  }

  @Post('/delete')
  remove(@Body() deleteInfo: any) {
    return this.eventItemsService.remove(deleteInfo);
  }
}
