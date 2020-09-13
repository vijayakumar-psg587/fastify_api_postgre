import {FastifyReply, FastifyRequest} from "fastify";
import {CustomErrorModel} from "../models/custom-error.model";

export default async function errorHandlerService (error, request: FastifyRequest, reply: FastifyReply) {
  console.log('coming in errorHandlerservice', error);
  if(error instanceof CustomErrorModel) {
      reply.code((error as CustomErrorModel).status).send(error);
  } else {
      reply.code(500).send(error);
  }
}