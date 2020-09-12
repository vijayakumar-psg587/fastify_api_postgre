import {UpdatableEntity} from "./updatable.entity";
import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm/index";

@Entity({name: 't_capability'})
export class CapabilityEntity extends  UpdatableEntity{
    @PrimaryGeneratedColumn({
        type: "uuid",
        name: 'id'
    })
    id: string;

    @Column({
        type: 'varchar',
        name: 'capability'
    })
    capability_name: string;

    @Column({
        type: 'uuid',
        name: 'capability_type_id'
    })
    linkedTypeId: string;

    @Column({
        type: 'uuid',
        name: 'associate_id'
    })
    linkedAssociateId: string;


}