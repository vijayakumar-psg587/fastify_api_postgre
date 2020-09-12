import { CommonModel } from './modules/common/models/common.model';
import { AppConfigService } from './modules/common/servcies/app-config.service';
import * as uuid from 'uuid';
import { APP_CONSTANTS } from './modules/common/utils/app.constants';
import fastify, { FastifyInstance } from 'fastify';
import { ROUTES } from './routes';
export class ServerAdpaterClass {
    private configModel: CommonModel;
    constructor() {
        this.configModel = AppConfigService.getAppCommonConfig();
    }

    configCors() {}

    configRouters(server: FastifyInstance) {
        server.register(require('./router.plugin'), { prefix: process.env.APP_CONTEXT_PATH+process.env.APP_VERSION });
    }

    configFastifyServer() {
        return {
            bodyLimit: this.configModel.body_limit,
            requestIdHeader: APP_CONSTANTS.SERVER.REQ_ID,
            genReqId: () => {return uuid.v4().toString()},
            trustProxy: true,
            logger: {
                prettyPrint: true
            },
            ignoreTrailingSlash: true,
        };
    }
}

export const SERVER_ADAPTER_INSTANCE = new ServerAdpaterClass();
