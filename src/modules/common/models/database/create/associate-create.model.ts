import {Expose} from "class-transformer";
import {IsEnum, IsNotEmpty, Matches} from "class-validator";
import {APP_CONSTANTS} from "../../../utils/app.constants";
import {UserRoleEnum} from "../../../../database/models/enums/user-role.enum";

export class AssociateCreateModel {
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