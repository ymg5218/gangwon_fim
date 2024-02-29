import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
} from 'typeorm'
import { ItemStorage } from 'src/item_storage/entities/item_storage.entity';

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

    // @ManyToOne(
    //     () => ItemStorage, 
    //     (itemStorage) => itemStorage.item_id)
    // itemStorage: ItemStorage
}
