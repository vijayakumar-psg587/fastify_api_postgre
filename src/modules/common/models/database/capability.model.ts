import {Column, PrimaryGeneratedColumn} from "typeorm/index";
import {Expose} from "class-transformer";
import {IsDateString, IsNotEmpty, IsNotEmptyObject, IsString, IsUUID, Length, Matches} from "class-validator";
import {UpdatableModel} from "./updatable.model";
import {APP_CONSTANTS} from "../../utils/app.constants";

export class CapabilityModel {

    @Expose()
    @IsNotEmptyObject()
    @IsUUID()
    id: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    @Length(2, 60, {always: true})
    capability_name: string;

    @Expose()
    @IsUUID()
    @IsNotEmpty()
    linkedTypeId: string;

    @Expose()
    @IsUUID()
    @IsNotEmpty()
    linkedAssociateId: string;

}

export class CapabilityDetailModel extends CapabilityModel implements UpdatableModel {
    @Expose()
    @IsDateString({always: true})
    recUpdTs: string;

    @Expose()
    @Matches(APP_CONSTANTS.REGEX.USER, {always: true, message: 'User id is not in the proper format'})
    recCrtId: string;
}