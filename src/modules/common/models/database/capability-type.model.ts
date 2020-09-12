import {UpdatableModel} from "./updatable.model";
import {Expose} from "class-transformer";
import {IsDateString, IsEnum, IsUUID, isUUID, Matches} from "class-validator";
import {APP_CONSTANTS} from "../../utils/app.constants";
import {Column, PrimaryGeneratedColumn} from "typeorm/index";
import {CapabilityTypeEnum} from "./enums/capability-type.enum";

export class CapabilityTypeModel {
    @Expose()
    @IsUUID()
    id: string;

    @Expose()
    @IsEnum(CapabilityTypeEnum, {always: true, message: 'Incorrect capability type'})
    type: string;
}

export class CapabilityTypeModelDetail extends  CapabilityTypeModel implements UpdatableModel {
    @Expose()
    @IsDateString({always: true})
    recUpdTs: string;

    @Expose()
    @Matches(APP_CONSTANTS.REGEX.USER, {always: true, message: 'User id is not in the proper format'})
    recCrtId: string;

}