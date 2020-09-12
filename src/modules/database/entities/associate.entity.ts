import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm/index";
import {UpdatableEntity} from "./updatable.entity";
import {UserRoleEnum} from "../models/enums/user-role.enum";

@Entity({name:'t_associate'})
export class AssociateEntity extends UpdatableEntity{
    @PrimaryGeneratedColumn({
        type: "uuid",
        name: 'id'
    })
    id: string;

   @Column({
       type: 'varchar',
       name: 'corpId'
   })
    corpId: string;

   @Column({
       type: 'varchar',
       name: 'emailId'
   })
    emailId: string;

   @Column({
       type: 'varchar',
       name: 'role'
   })
    role: UserRoleEnum;

}