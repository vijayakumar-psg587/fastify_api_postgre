import {Expose} from "class-transformer";
import {IsDateString, Matches} from "class-validator";
import {APP_CONSTANTS} from "../../utils/app.constants";


export interface UpdatableModel {
    recUpdTs: string;

    recCrtId: string;
}