import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { CreateMemberDto } from "../dto/create-member.dto";

@Entity()
export class Member {
    @PrimaryColumn()
    member_id : number

    @PrimaryColumn()
    member_name : string

    @Column()
    member_addr : string

    @Column({ default : 0})
    member_point : number

    @Column({ default : 'N'})
    member_receive_message : string

    @Column({ default : 'N'})
    manager : string

    @Column({ default : 'N'})
    is_admin : string

    static from(createMemberDto: CreateMemberDto){
        const member = new Member();
        member.member_id = createMemberDto.member_id;
        member.member_name = createMemberDto.member_name;
        member.member_addr = createMemberDto.member_addr;
        member.member_point = createMemberDto.member_point;
        member.member_receive_message = createMemberDto.member_receive_message;
        member.manager = createMemberDto.manager;
        member.is_admin = createMemberDto.is_admin;

        return member;
    }

}
