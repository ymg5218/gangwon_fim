import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventItemDto } from './dto/create-event_item.dto';
import { UpdateEventItemDto } from './dto/update-event_item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EventItem } from './entities/event_item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventItemsService {
  constructor(
    @InjectRepository(EventItem)
    private eventItemRepository: Repository<EventItem>
  ){}

  async create(createEventItemDto: CreateEventItemDto) {
    const event_item = EventItem.from(createEventItemDto);

    await this.eventItemRepository.save(event_item);
    return event_item;
  }

  async findAll(): Promise<EventItem[]> {
    return await this.eventItemRepository.find();
  }

  async findOne(findInfo : any) {
    const event_item = await this.eventItemRepository.find({
      where : {
        item_id : findInfo.item_id,
        event_start_date : findInfo.event_start_date,
        event_end_date : findInfo.event_end_date
      }
    });

    if (!event_item){
      throw new NotFoundException(`해당 행사 아이템(아이디 : ${ findInfo.item_id } 정보는 없습니다.)`)
    }
    return event_item;
  }

  async update(updateEventItemDto: UpdateEventItemDto) {
    const item_id = updateEventItemDto.item_id;
    const event_start_date = updateEventItemDto.event_start_date;
    const event_end_date = updateEventItemDto.event_end_date;

    const new_start_date = updateEventItemDto.new_event_start_date;
    const new_end_date = updateEventItemDto.new_event_end_date;
    const new_event_price = updateEventItemDto.new_event_price;
    const new_event_info = updateEventItemDto.new_event_info;

    const event_item = await this.eventItemRepository.findOne({
      where : {
        item_id : item_id,
        event_start_date : event_start_date,
        event_end_date : event_end_date
      }
    });

    if (!event_item){
      throw new NotFoundException(`해당 행사 아이템(아이디 : ${ item_id } 정보는 없습니다.)`);
    }

    await this.eventItemRepository.update(
      {
       item_id : item_id , 
       event_start_date : event_start_date, 
       event_end_date : event_end_date
      },
      {
        event_start_date : new_start_date,
        event_end_date : new_end_date,
        event_price : new_event_price,
        event_info : new_event_info
      });


    return event_item;
  }

  async remove(deleteInfo : any) {
    return await this.eventItemRepository.delete({
      item_id : deleteInfo.item_id,
      event_start_date : deleteInfo.event_start_date,
      event_end_date : deleteInfo.event_end_date
    });
  }
}
