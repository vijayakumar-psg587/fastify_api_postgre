import {Column, Entity, PrimaryGeneratedColumn} from "typeorm/index";
import {UpdatableEntity} from "./updatable.entity";

@Entity({name: 't_capability_type'})
export class CapabilityTypeEntity extends UpdatableEntity{
    @PrimaryGeneratedColumn({
        type: 'uuid',
        name:'id'
    })
    id: string;

    @Column({
        type: 'varchar',
        name: 'capability_type'
    })
    type: string;
}