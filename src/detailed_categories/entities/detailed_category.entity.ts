import { ItemsForSale } from "src/items_for_sale/entities/items_for_sale.entity";
import { TopCategory } from "src/top_categories/entities/top_category.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CreateDetailedCategoryDto } from "../dto/create-detailed_category.dto";

@Entity()
export class DetailedCategory {
    @PrimaryGeneratedColumn()
    detailed_cat_id : number

    @Column()
    detailed_cat_name : string

    @Column()
    parent_cat_id : number

    static from(createDetailedCategoryDto : CreateDetailedCategoryDto){
        const detailed_cat = new DetailedCategory();
        detailed_cat.detailed_cat_name = createDetailedCategoryDto.detailed_cat_name;
        detailed_cat.parent_cat_id = createDetailedCategoryDto.parent_cat_id;

        return detailed_cat;
    }


    @ManyToOne(() => TopCategory, (topCategory) => topCategory.top_cat_id, {
        cascade: true,
    })
    @JoinColumn({
        name : 'parent_cat_id',
        referencedColumnName: 'top_cat_id'
    })
    topCategory : TopCategory;

    @OneToMany(() => ItemsForSale, (item) => item.cat_id, {
        cascade: true,
    })
    items : ItemsForSale[];
}
