import { ItemsForSale } from "src/items_for_sale/entities/items_for_sale.entity";
import { TopCategory } from "src/top_categories/entities/top_category.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DetailedCategory {
    @PrimaryGeneratedColumn()
    detailed_cat_id : number

    @Column()
    detailed_cat_name : string

    @Column()
    parent_cat_id : number

    @ManyToOne(() => TopCategory, (topCategory) => topCategory.top_cat_id, {
        cascade: true,
    })
    topCategory : TopCategory;

    @OneToMany(() => ItemsForSale, (item) => item.cat_id, {
        cascade: true,
    })
    items : ItemsForSale[];
}
