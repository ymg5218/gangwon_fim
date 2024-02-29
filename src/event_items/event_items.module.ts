import { Module } from '@nestjs/common';
import { EventItemsService } from './event_items.service';
import { EventItemsController } from './event_items.controller';

@Module({
  controllers: [EventItemsController],
  providers: [EventItemsService],
})
export class EventItemsModule {}
