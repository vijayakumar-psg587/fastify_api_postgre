import { FastifyRequest, FastifyReply } from 'fastify';

export const testPreHandler = async (req: FastifyRequest, reply: FastifyReply) => {
    console.log('coming in testPrehandler');
    return;
};
