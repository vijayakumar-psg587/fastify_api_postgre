import {AppUtilService} from "../../common/servcies/app-util.service";
import {Column, UpdateDateColumn} from "typeorm/index";
import {APP_CONSTANTS} from "../../common/utils/app.constants";

export class UpdatableEntity {
    @UpdateDateColumn({
        type: "timestamp with time zone",
        nullable: false,
        name: "rec_upd_ts",
        default: () => AppUtilService.defaultISOTime(),
    })
    recUpdTs: string;

    @Column({
        name: "rec_crt_id",
        default: APP_CONSTANTS.COMMON.USER_ID,
        nullable: false,
    })
    recCrtId: string;
}