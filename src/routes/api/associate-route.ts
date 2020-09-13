import {RouteOptions} from "fastify";
import {ASSOCIATE_ROUTE_CNTRL_INSTANCE} from "../controllers/associate-route.controller";
import {ASSOCIATE_PRE_HANDLER_INSTANCE} from "../hooks/preHandler/associate-capability.preHandler";

const associateCreateRoute: RouteOptions = {
    method: 'POST',
    url: '/associate-capability',
    preHandler: ASSOCIATE_PRE_HANDLER_INSTANCE.createPreHandlerValidation,
    handler:ASSOCIATE_ROUTE_CNTRL_INSTANCE.createAssociates
};
const associateReadRoute: RouteOptions = {
    method: 'GET',
    url: '/associate-capability',
    handler:ASSOCIATE_ROUTE_CNTRL_INSTANCE.getAssociates
}

const fakeAssociateCreateRoute: RouteOptions = {
    method: 'PUT',
    url: '/fake/associate-capability',
    handler:ASSOCIATE_ROUTE_CNTRL_INSTANCE.createFakeAssociates
}

export const ASSOCIATE_ROUTES = [associateCreateRoute, associateReadRoute, fakeAssociateCreateRoute];