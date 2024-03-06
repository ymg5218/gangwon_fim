import { Module } from '@nestjs/common';
import { EventItemsService } from './event_items.service';
import { EventItemsController } from './event_items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsForSale } from 'src/items_for_sale/entities/items_for_sale.entity';
import { EventItem } from './entities/event_item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EventItem,
      ItemsForSale
    ])
  ],
  controllers: [EventItemsController],
  providers: [EventItemsService],
})
export class EventItemsModule {}
