import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm/index';
import { UpdatableEntity } from './updatable.entity';

@Entity({ name: 't_capability_type' })
export class CapabilityTypeEntity extends UpdatableEntity {
    @PrimaryColumn({
        type: 'uuid',
        generated: 'uuid',
        name: 'id',
        nullable: false,
    })
    id: string;

    @Column({
        type: 'varchar',
        name: 'capability_type',
    })
    type: string;
}
