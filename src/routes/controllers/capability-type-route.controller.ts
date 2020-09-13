import { FastifyReply, FastifyRequest } from 'fastify';
import { CAPABILITY_TYPE_DB_SERVICE_INSTANCE } from '../services/capability-type-db.service';
import fastify from 'fastify';
export class CapabilityTypeRouteController {
    constructor() {}

    async getCapabilityTypes(req: FastifyRequest, reply: FastifyReply) {
        const payload = await CAPABILITY_TYPE_DB_SERVICE_INSTANCE.getCapabilityTypes();
        reply.send(payload);
    }

    async createCapabilityTypes(req: FastifyRequest, reply: FastifyReply) {
        //@ts-ignore
        console.log('coming in create', req.capabilityTypeCreate);
        // call the database to save
        //@ts-ignore
        const result = await CAPABILITY_TYPE_DB_SERVICE_INSTANCE.createCapabilityTypeService(req.capabilityTypeCreate);
        reply.code(201).send(result);
    }
}

export const CAPABILITY_TYPE_CNTRL_INSTANCE = new CapabilityTypeRouteController();
