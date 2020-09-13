import { BeforeInsert, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm/index';
import { AppUtilService } from '../../common/servcies/app-util.service';
import { v4 as uuidv4 } from 'uuid';
import { APP_CONSTANTS } from '../../common/utils/app.constants';
import * as faker from 'faker';
const RandExp = require('randexp');
@EventSubscriber()
export class CommonEntitySubscriber implements EntitySubscriberInterface {
    constructor() {}

    /**
     * Called before entity insertion.
     */
    beforeInsert(event: InsertEvent<any>) {
        console.log(`BEFORE ENTITY INSERTED: `, event.entity);

        if (AppUtilService.isNullOrUndefined(event.entity.recCrtId)) {
            event.entity.recCrtId = new RandExp(APP_CONSTANTS.REGEX.USER).gen();
        }

        if (AppUtilService.isNullOrUndefined(event.entity.id)) {
            event.entity.id = faker.random.uuid().toString();
        }

        if (AppUtilService.isNullOrUndefined(event.entity.recUpdTs)) {
            event.entity.recUpdTs = faker.date.recent();
        }
    }
}
