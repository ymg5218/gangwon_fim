import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { CreateItemStorageDto } from "../dto/create-item_storage.dto";
import { ItemsForSale } from "src/items_for_sale/entities/items_for_sale.entity";

@Entity()
export class ItemStorage {
    @PrimaryColumn()
    item_id: number;

    @PrimaryColumn()
    storage: string;

    static from(createItemStorageDto: CreateItemStorageDto){
        const item_storage = new ItemStorage();
        item_storage.item_id = createItemStorageDto.item_id;
        item_storage.storage = createItemStorageDto.storage;

        return item_storage;
    }

    @ManyToOne(() => ItemsForSale, (item) => item.item_id, {
        cascade: true,
    })
    @JoinColumn(
        { name: 'item_id', referencedColumnName: 'item_id'},
    )
    item : ItemsForSale;
}
