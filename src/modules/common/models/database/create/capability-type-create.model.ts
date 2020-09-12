import {Expose} from "class-transformer";
import {IsEnum} from "class-validator";
import {CapabilityTypeEnum} from "../enums/capability-type.enum";

export class CapabilityTypeCreateModel {
    @Expose()
    @IsEnum(CapabilityTypeEnum)
    type: string;
}