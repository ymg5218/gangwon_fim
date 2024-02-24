import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class ItemsForSale {
    @PrimaryGeneratedColumn({type: 'int', name: 'item_id'})
    item_id: number;

    @Column()
    cat_id: number;

    @Column()
    item_name: string;

    @Column()
    item_price: number;

    @Column()
    item_unit: number;

    @Column()
    item_origin: string;

    @Column()
    item_info: string;
}
