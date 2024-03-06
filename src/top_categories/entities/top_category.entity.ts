import { DetailedCategory } from "src/detailed_categories/entities/detailed_category.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CreateTopCategoryDto } from "../dto/create-top_category.dto";

@Entity()
export class TopCategory {
    @PrimaryGeneratedColumn()
    top_cat_id : number

    @Column()
    top_cat_name : string

    
    static from(createTopCategoryDto: CreateTopCategoryDto){
        const top_cat = new TopCategory();
        top_cat.top_cat_name = createTopCategoryDto.top_cat_name;

        return top_cat;
    }

    @OneToMany(() => DetailedCategory, (detailedCategory) => detailedCategory.parent_cat_id, {
        cascade: true,
    })
    detailedCategory : DetailedCategory[];
}
