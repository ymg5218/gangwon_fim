import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    JoinTable,
    OneToMany,
} from 'typeorm'
import { ItemStorage } from 'src/item_storage/entities/item_storage.entity';
import { CreateItemsForSaleDto } from '../dto/create-items_for_sale.dto';
import { DetailedCategory } from 'src/detailed_categories/entities/detailed_category.entity';
import { EventItem } from 'src/event_items/entities/event_item.entity';

@Entity()
export class ItemsForSale {
    @PrimaryGeneratedColumn()
    item_id: number;

    @Column()
    cat_id: number;

    @Column()
    item_name: string

    @Column()
    item_price: number

    @Column()
    item_unit: number

    @Column()
    item_origin: string

    @Column()
    item_info: string

    static from(createItemsForSaleDto: CreateItemsForSaleDto) {
        const item = new ItemsForSale();
        item.cat_id = createItemsForSaleDto.cat_id;
        item.item_name = createItemsForSaleDto.item_name;
        item.item_price = createItemsForSaleDto.item_price;
        item.item_unit = createItemsForSaleDto.item_unit;
        item.item_origin = createItemsForSaleDto.item_origin;
        item.item_info = createItemsForSaleDto.item_info;
        return item;
    }

    @ManyToOne(() => DetailedCategory, (detailedCategory) => detailedCategory.detailed_cat_id, {
        onDelete: 'CASCADE',
    })
    detailedCategory : DetailedCategory;


    @OneToMany(() => ItemStorage, (itemStorage) => itemStorage.item_id, {
        onDelete: 'CASCADE',
    })
    itemStorage: ItemStorage[];

    @OneToMany(() => EventItem, (eventItem) => eventItem.item_id, {
        cascade: true,
    })
    eventItems: EventItem[];
}
