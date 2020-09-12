import {Column, PrimaryGeneratedColumn} from "typeorm/index";
import {UserRoleEnum} from "../../../database/models/enums/user-role.enum";
import {IsDateString, IsEnum, IsNotEmpty, IsString, IsUUID, Matches} from "class-validator";
import {APP_CONSTANTS} from "../../utils/app.constants";
import {Expose} from "class-transformer";
import {UpdatableModel} from "./updatable.model";

export class AssociateModel {
    @Expose()
    @IsUUID()
    id: string;

    @Expose()
    @IsNotEmpty({always: true})
    @Matches(APP_CONSTANTS.REGEX.USER, {always: true, message:' Corpid is not in the proper format'})
    corpId: string;

    @Expose()
    @IsNotEmpty({always: true})
    @Matches(APP_CONSTANTS.REGEX.EMAIL, {always: true, message: 'EmailId is not in proper format'})
    emailId: string;

    @Expose()
    @IsNotEmpty()
    @IsEnum(UserRoleEnum, {always: true} )
    role: UserRoleEnum;

}

export class AssociateDetailModel extends AssociateModel implements UpdatableModel {
    @Expose()
    @IsDateString({always: true})
    recUpdTs: string;

    @Expose()
    @Matches(APP_CONSTANTS.REGEX.USER, {always: true, message: 'User id is not in the proper format'})
    recCrtId: string;
}