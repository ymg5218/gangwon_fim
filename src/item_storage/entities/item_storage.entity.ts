import { Column, PrimaryGeneratedColumn } from "typeorm";

export class ItemStorage {
    @PrimaryGeneratedColumn()
    item_id: number;

    @Column()
    storage: string;
}
