import { getConnection } from 'typeorm/index';
import { DatabaseConfigModel } from '../../modules/database/models/database-config.model';
import {
    DatabaseConnectionService,
    DB_CONN_SERVICE_INSTANCE,
} from '../../modules/database/services/postgres-conn.service';
import { CapabilityTypeEntity } from '../../modules/database/entities/capability-type.entity';
import { v4 as uuidv4 } from 'uuid';
import { CapabilityCreateModel } from '../../modules/common/models/database/create/capability-create.model';
import { plainToClass } from 'class-transformer';
import { CapabilityTypeCreateModel } from '../../modules/common/models/database/create/capability-type-create.model';
import { AppUtilService } from '../../modules/common/servcies/app-util.service';
import { CapabilityTypeModelDetail } from '../../modules/common/models/database/capability-type.model';
import { CapabilityDetailModel } from '../../modules/common/models/database/capability.model';
export class CapabilityTypeDbService {
    private dbConfigModel: DatabaseConfigModel;
    constructor() {
        this.dbConfigModel = DB_CONN_SERVICE_INSTANCE.getDatabaseConfig();
    }

    async getCapabilityTypes() {
        const res = await getConnection(this.dbConfigModel.connectionName)
            .getRepository<CapabilityTypeEntity>(CapabilityTypeEntity)
            .find({
                order: {
                    id: 'ASC',
                },
            });
        return plainToClass(CapabilityTypeModelDetail, res, { excludeExtraneousValues: true });
    }

    async createCapabilityTypeService(createModels: CapabilityTypeCreateModel[]): Promise<CapabilityTypeModelDetail[]> {
        console.log('coming in db service');
        const entities: CapabilityTypeEntity[] = new Array<CapabilityTypeEntity>();
        let entity: CapabilityTypeEntity;
        createModels.forEach((createModel) => {
            entity = new CapabilityTypeEntity();

            entity.type = createModel.type;

            entities.push(entity);
        });

        const capabilityTypeRepo: CapabilityTypeEntity[] = await getConnection(this.dbConfigModel.connectionName)
            .getRepository<CapabilityTypeEntity>(CapabilityTypeEntity)
            .save(entities);

        console.log('getting details of entity', capabilityTypeRepo);
        return plainToClass(CapabilityTypeModelDetail, capabilityTypeRepo, { excludeExtraneousValues: true });
    }
}

export const CAPABILITY_TYPE_DB_SERVICE_INSTANCE = new CapabilityTypeDbService();
