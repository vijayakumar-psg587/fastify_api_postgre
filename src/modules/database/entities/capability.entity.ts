import {UpdatableEntity} from "./updatable.entity";
import {Column, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm/index";

@Entity({name: 't_capability'})
export class CapabilityEntity extends  UpdatableEntity{
    @PrimaryColumn({
        type: "uuid",
        generated: "uuid",
        name: 'id',
        nullable: false
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