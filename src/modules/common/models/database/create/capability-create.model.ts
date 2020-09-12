import {Expose} from "class-transformer";
import {IsNotEmpty, IsNotEmptyObject, IsString, IsUUID, Length} from "class-validator";

export class CapabilityCreateModel {

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