import {RouteOptions} from "fastify";
import {CAPABILITY_TYPE_CNTRL_INSTANCE} from "../controllers/capability-type-route.controller";
import {CAPABILITY_TYPE_PREHANDLER_INSTANCE} from "../hooks/preHandler/capability-type.preHandler";
import {CAPABILITY_TYPE_RESPONSE_INSTANCE} from "../hooks/replyPreHandler/capability-type-response.prehandler";

const capabilityTypeCreateRoute: RouteOptions = {
    url: '/capability-type',
    method: 'POST',
    preHandler: CAPABILITY_TYPE_PREHANDLER_INSTANCE.createCapabilityTypes,
    handler:CAPABILITY_TYPE_CNTRL_INSTANCE.createCapabilityTypes,
    onSend: CAPABILITY_TYPE_RESPONSE_INSTANCE.responsePreHandler
};
const capabilityTypeReadRoute: RouteOptions = {
    url: '/capability-type',
    method: 'GET',
    preHandler: CAPABILITY_TYPE_PREHANDLER_INSTANCE.getCapabilityTypes,
    handler: CAPABILITY_TYPE_CNTRL_INSTANCE.getCapabilityTypes,
    onSend: CAPABILITY_TYPE_RESPONSE_INSTANCE.responsePreHandler
};

export const CAPABILITY_TYPE_ROUTES = [capabilityTypeCreateRoute, capabilityTypeReadRoute];