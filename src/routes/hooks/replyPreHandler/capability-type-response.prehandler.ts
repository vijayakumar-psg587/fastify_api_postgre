import {FastifyReply, FastifyRequest} from "fastify";
import {APP_CONSTANTS} from "../../../modules/common/utils/app.constants";

export class CapabilityTypeResponsePrehandler {
    constructor() {
    }

    async responsePreHandler(request: FastifyRequest, reply: FastifyReply, payload) {
        // const key =APP_CONSTANTS.DECORATORS.RES.CAP_TYPE_DETAIL;
        // const newJ = JSON.parse(payload);
        // let newPayLoad = {};
        // newPayLoad[key] = newJ;
        // console.log('paylod:', newPayLoad)
        // return Buffer.from(JSON.stringify(newPayLoad));
        return payload;
    }
}

export const CAPABILITY_TYPE_RESPONSE_INSTANCE = new CapabilityTypeResponsePrehandler();