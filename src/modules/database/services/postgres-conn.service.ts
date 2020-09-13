import { DatabaseConfigModel } from '../models/database-config.model';
import { DatabaseConfigModelBuilder } from '../models/builder/database-config.builder';
import { APP_CONSTANTS } from 'src/modules/common/utils/app.constants';
import { DatabaseTypeEnum } from '../models/enums/database-type.enum';
import { AppUtilService } from 'src/modules/common/servcies/app-util.service';
import 'reflect-metadata';
import atob = require('atob');
import { createConnection, Connection } from 'typeorm';
import {AssociateEntity} from "../entities/associate.entity";
import {CapabilityEntity} from "../entities/capability.entity";
import {CapabilityTypeEntity} from "../entities/capability-type.entity";
import {AppConfigService} from "../../common/servcies/app-config.service";
import {CommonEntitySubscriber} from "../listeners-subscribers/common-entity.subscriber";

export class DatabaseConnectionService {
    private databaseConfigModel: DatabaseConfigModel;
    private dbConnection:Connection;
    constructor() {}

    getDatabaseConfig(): DatabaseConfigModel {
        const databaseModelBuilder = new DatabaseConfigModelBuilder();
        if (AppUtilService.isNullOrUndefined(this.databaseConfigModel)) {
            this.databaseConfigModel = databaseModelBuilder
                .setConnectionName(APP_CONSTANTS.DATABASE.CONN_NAME)
                .setType(DatabaseTypeEnum.POSTGRES)
                .setUser(process.env.TYPEORM_USER)
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
        console.log('configMode:', configModel);
        if(AppUtilService.isNullOrUndefined(this.dbConnection)) {
            try {
                this.dbConnection = await createConnection({
                    name: APP_CONSTANTS.DATABASE.CONN_NAME,
                    type: DatabaseTypeEnum.POSTGRES,
                    host: configModel.host,
                    schema: 'public',
                    logging: true,
                    username: configModel.username,
                    password: configModel.password,
                    port: configModel.port,
                    synchronize: configModel.synchronize,
                    subscribers: [CommonEntitySubscriber],
                    entities: [AssociateEntity, CapabilityEntity, CapabilityTypeEntity],
                    poolErrorHandler: (err: any) => {
                        console.error('Cannot create connectionpool:', err);
                        throw AppConfigService.getCustomError('FID-DB', `Error creating connection pool - ${err}` );
                    }
                });
            } catch(err) {
                console.log('Db could not be connected:', err);
                throw AppConfigService.getCustomError('FID-DB', `Connection to postgre cannot be created - ${err.message}`);
            }

        }
        console.log('sending dbConn as promise:', this.dbConnection);
        return this.dbConnection;


    }
}
export const DB_CONN_SERVICE_INSTANCE = new DatabaseConnectionService();