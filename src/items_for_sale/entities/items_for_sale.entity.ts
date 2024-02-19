import {
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm'

@Entity({schema: 'example1' , name: 'users'})
export class ItemsForSale {
    @PrimaryGeneratedColumn({type: 'int', name: 'item_id'})
    item_id: number;

    @Column
}
