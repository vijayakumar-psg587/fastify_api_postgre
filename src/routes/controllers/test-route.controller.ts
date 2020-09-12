import { FastifyRequest, FastifyReply } from 'fastify';

export class TestRouteHandler {
    constructor() {}

    static async testRoute(req: FastifyRequest, reply: FastifyReply) {
        console.log('test route initiated');
        reply.code(200).send('Test route');
    }
}
