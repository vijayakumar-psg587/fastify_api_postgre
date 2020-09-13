import { getConnection } from 'typeorm/index';
import { DatabaseConfigModel } from '../../modules/database/models/database-config.model';
import { DB_CONN_SERVICE_INSTANCE } from '../../modules/database/services/postgres-conn.service';
import { v4 as uuidv4 } from 'uuid';
import { plainToClass } from 'class-transformer';
import { AppUtilService } from '../../modules/common/servcies/app-util.service';

import { AssociateCreateModel } from '../../modules/common/models/database/create/associate-create.model';
import { AssociateDetailModel } from '../../modules/common/models/database/associate.model';
import { AssociateEntity } from '../../modules/database/entities/associate.entity';
import {FAKER_SERVICE_INST} from "../../modules/common/servcies/database/database-faker.service";
export class AssociateCapabilityDbService {
    private dbConfigModel: DatabaseConfigModel;
    constructor() {
        this.dbConfigModel = DB_CONN_SERVICE_INSTANCE.getDatabaseConfig();
    }

    async getAssociateCapabilities() {
        const res = await getConnection(this.dbConfigModel.connectionName)
            .getRepository<AssociateEntity>(AssociateEntity)
            .find({
                order: {
                    id: 'ASC',
                },
            });
        return plainToClass(AssociateDetailModel, res, { excludeExtraneousValues: true });
    }

    async createFakerAssociateCapabilities() {
        const entities:AssociateEntity[] = FAKER_SERVICE_INST.createFakeAssociateEntities();
        const res = await getConnection(this.dbConfigModel.connectionName)
            .getRepository<AssociateEntity>(AssociateEntity).save(entities);
        return `${res.length} - Fake Associates have been created`;
    }

    async createAssociateCapabilities(createModels: AssociateCreateModel[]): Promise<AssociateDetailModel[]> {
        console.log('coming in db service');
        const entities: AssociateEntity[] = new Array<AssociateEntity>();
        let entity: AssociateEntity;
        createModels.forEach((createModel) => {
            entity = new AssociateEntity();

            entity.corpId = createModel.corpId;
            entity.emailId = createModel.emailId;
            entity.role = createModel.role;

            entities.push(entity);
        });

        const associateCapabilityEntities: AssociateEntity[] = await getConnection(this.dbConfigModel.connectionName)
            .getRepository<AssociateEntity>(AssociateEntity)
            .save(entities);

        console.log('getting details of entity', associateCapabilityEntities);
        return plainToClass(AssociateDetailModel, associateCapabilityEntities, { excludeExtraneousValues: true });
    }
}

export const ASSOCIATE_DB_SERVICE_INSTANCE = new AssociateCapabilityDbService();
