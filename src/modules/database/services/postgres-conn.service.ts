import { DatabaseConfigModel } from '../models/database-config.model';
import { DatabaseConfigModelBuilder } from '../models/builder/database-config.builder';
import { APP_CONSTANTS } from 'src/modules/common/utils/app.constants';
import { DatabaseTypeEnum } from '../models/enums/database-type.enum';
import { AppUtilService } from 'src/modules/common/servcies/app-util.service';
import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import {AssociateEntity} from "../entities/associate.entity";
import {CapabilityEntity} from "../entities/capability.entity";
import {CapabilityTypeEntity} from "../entities/capability-type.entity";

export class DatabaseConnection {
    private databaseConfigModel: DatabaseConfigModel;
    constructor() {}

    getDatabaseConfig(): DatabaseConfigModel {
        const databaseModelBuilder = new DatabaseConfigModelBuilder();
        if (AppUtilService.isNullOrUndefined(this.databaseConfigModel)) {
            this.databaseConfigModel = databaseModelBuilder
                .setConnectionName(APP_CONSTANTS.DATABASE.CONN_NAME)
                .setType(DatabaseTypeEnum.POSTGRES)
                .setUser(process.env.TYPEORM_USERNAME)
                .setPassword(atob(process.env.TYPEORM_PASSWORD))
                .setPort(process.env.TYPEORM_PORT)
                .setDatabase(process.env.TYPEORM_DATABASE)
                .setHost(process.env.TYPEORM_HOST)
                .isSynchronize(process.env.TYPEORM_SYNC === 'true')
                .build();
        }
        return this.databaseConfigModel;
    }

    async createDBConnection() {
        const configModel = this.getDatabaseConfig();
        return await createConnection({
            type: DatabaseTypeEnum.POSTGRES,
            host: this.databaseConfigModel.host,
            schema: 'public',
            username: this.databaseConfigModel.username,
            password: this.databaseConfigModel.password,
            port: this.databaseConfigModel.port,
            synchronize: this.databaseConfigModel.synchronize,
            entities: [AssociateEntity, CapabilityEntity, CapabilityTypeEntity],
            poolErrorHandler: (err: any) => {
                console.error('Cannot create connectionpool:', err);
            }
        });
    }
}
