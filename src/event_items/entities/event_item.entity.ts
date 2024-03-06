import { ItemsForSale } from "src/items_for_sale/entities/items_for_sale.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { CreateEventItemDto } from "../dto/create-event_item.dto";

@Entity()
export class EventItem {
    @PrimaryColumn()
    item_id : number

    @PrimaryColumn()
    event_start_date : Date
    
    @PrimaryColumn()
    event_end_date : Date

    @Column()
    event_price : number

    @Column()
    event_info : string

    static from(createEventItemDto: CreateEventItemDto){
        const event_item = new EventItem();
        event_item.item_id = createEventItemDto.item_id;
        event_item.event_start_date = createEventItemDto.event_start_date;
        event_item.event_end_date = createEventItemDto.event_end_date;
        event_item.event_price = createEventItemDto.event_price;
        event_item.event_info = createEventItemDto.event_info;

        return event_item
    }

    @ManyToOne(() => ItemsForSale, (item) => item.item_id, {
        cascade: true,
    })
    @JoinColumn({
        name : 'item_id',
        referencedColumnName: 'item_id'
    })
    item : ItemsForSale;


}
