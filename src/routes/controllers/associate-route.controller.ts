import { FastifyReply, FastifyRequest } from 'fastify';
import { CAPABILITY_TYPE_DB_SERVICE_INSTANCE } from '../services/capability-type-db.service';
import fastify from 'fastify';
import {ASSOCIATE_DB_SERVICE_INSTANCE} from "../services/associate-capability-db.service";
export class AssociateRouteController {
    constructor() {}

    async getAssociates(req: FastifyRequest, reply: FastifyReply) {
        const payload = ASSOCIATE_DB_SERVICE_INSTANCE.getAssociateCapabilities();
        reply.send(payload);
    }

    async createAssociates(req: FastifyRequest, reply: FastifyReply) {
        //@ts-ignore
        console.log('coming in create', req.associateCreate);
        // call the database to save
        //@ts-ignore
        const result = await ASSOCIATE_DB_SERVICE_INSTANCE.createAssociateCapabilities(req.associateCreate);
        reply.code(201).send(result);
    }

    async createFakeAssociates(req: FastifyRequest, reply: FastifyReply) {

        const result = await ASSOCIATE_DB_SERVICE_INSTANCE.createFakerAssociateCapabilities();
        reply.code(201).send(result);
    }
}

export const ASSOCIATE_ROUTE_CNTRL_INSTANCE = new AssociateRouteController();
