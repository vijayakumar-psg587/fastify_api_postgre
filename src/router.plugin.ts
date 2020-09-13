import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { ROUTES } from './routes';
import { CAPABILITY_TYPE_ROUTES } from './routes/api/capability-type.route';
import errorHandlerService from './modules/common/servcies/error-handler.service';
import { APP_CONSTANTS } from './modules/common/utils/app.constants';
import { DB_CONN_SERVICE_INSTANCE } from './modules/database/services/postgres-conn.service';
import { AppConfigService } from './modules/common/servcies/app-config.service';
import { ASSOCIATE_ROUTES } from './routes/api/associate-route';

export async function appRouterConfigPlugin(fastify, opts) {
    console.log('opts:', opts);
    ROUTES.forEach((route) => {
        fastify.route(route);
    });

    CAPABILITY_TYPE_ROUTES.forEach((route) => {
        fastify.route(route);
    });

    ASSOCIATE_ROUTES.forEach((route) => {
        fastify.route(route);
    });

    //decorate the requests - for all routes
    fastify.decorate(APP_CONSTANTS.DECORATORS.REQ.CAP_TYPE_CREATE, '');
    fastify.decorate(APP_CONSTANTS.DECORATORS.REQ.ASSOCIATE_CREATE, '');
    fastify.decorateReply(APP_CONSTANTS.DECORATORS.RES.CAP_TYPE_DETAIL, function (template, args) {
        console.log('args in reply', args);
    });

    // CREATE Db conn
    try {
        const conn = await DB_CONN_SERVICE_INSTANCE.createDBConnection();
    } catch (err) {
        console.log('err in creating conn', err);
        throw AppConfigService.getCustomError('FID-DB', err.message);
    }

    fastify.setErrorHandler(errorHandlerService);
}
