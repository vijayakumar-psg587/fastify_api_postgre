import { FastifyReply, FastifyRequest } from 'fastify';
import { validate, ValidationError } from 'class-validator';
import { AppConfigService } from '../../../modules/common/servcies/app-config.service';
import {plainToClass} from "class-transformer";
import {AssociateCreateModel} from "../../../modules/common/models/database/create/associate-create.model";

export class AssociateCapabilityPreHandler {
    constructor() {}

    async createPreHandlerValidation(req: FastifyRequest, reply: FastifyReply) {
        console.log('incming req obj', req.body);
        try {
            const reqBody = await validate(req.body);
            if (
                reqBody instanceof ValidationError ||
                (Array.isArray(reqBody) && reqBody[0] instanceof ValidationError)
            ) {
                throw AppConfigService.getCustomError('FID-REQ', `Error validating request body - ${reqBody}`);
            }
        } catch (err) {
            console.log('err validating req', err);
            throw AppConfigService.getCustomError('FID-REQ', `Error validating request body - ${err.message}`);
        }
        //@ts-ignore
        req.associateCreate = plainToClass(AssociateCreateModel, req.body, {excludeExtraneousValues: true});
        return;
    }
}

export const ASSOCIATE_PRE_HANDLER_INSTANCE = new AssociateCapabilityPreHandler();