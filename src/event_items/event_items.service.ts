import { Injectable } from '@nestjs/common';
import { CreateEventItemDto } from './dto/create-event_item.dto';
import { UpdateEventItemDto } from './dto/update-event_item.dto';

@Injectable()
export class EventItemsService {
  create(createEventItemDto: CreateEventItemDto) {
    return 'This action adds a new eventItem';
  }

  findAll() {
    return `This action returns all eventItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventItem`;
  }

  update(id: number, updateEventItemDto: UpdateEventItemDto) {
    return `This action updates a #${id} eventItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventItem`;
  }
}
