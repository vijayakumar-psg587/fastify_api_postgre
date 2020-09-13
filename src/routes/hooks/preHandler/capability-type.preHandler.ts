import {FastifyReply, FastifyRequest} from "fastify";
import {plainToClass} from "class-transformer";
import {CapabilityTypeCreateModel} from "../../../modules/common/models/database/create/capability-type-create.model";
import {validate, ValidationError} from "class-validator";
import {AppConfigService} from "../../../modules/common/servcies/app-config.service";
import fastify from "fastify";
export class CapabilityTypePreHandler {
    constructor() {
    }

    async getCapabilityTypes(req: FastifyRequest, reply: FastifyReply) {
        console.log('in prehandler');
        return ;
    }
    
    async createCapabilityTypes(req: FastifyRequest, reply: FastifyReply) {
        const  convertedCreateModel: CapabilityTypeCreateModel[] = plainToClass(CapabilityTypeCreateModel, (req.body as Array<any>), {excludeExtraneousValues: true});
        try {
          const reqBody =  await validate(convertedCreateModel);
          console.log('reqVo:',reqBody);
          if(reqBody instanceof ValidationError || (Array.isArray(reqBody) && reqBody[0] instanceof ValidationError)) {
              console.log('validation err',reqBody);
              throw AppConfigService.getCustomError('FID-REQ', `Error validating request body - ${reqBody}`);
          }
        } catch(err) {
            console.log('err tjrow',err);
            throw AppConfigService.getCustomError('FID-REQ', `Error validating request body - ${err}`);
        }
       console.log('convertedCreateModel:', convertedCreateModel);
        // @ts-ignore
        req.capabilityTypeCreate = convertedCreateModel;
        return ;
    }
}

export const CAPABILITY_TYPE_PREHANDLER_INSTANCE = new CapabilityTypePreHandler();