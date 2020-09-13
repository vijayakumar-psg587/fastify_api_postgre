import { AssociateCreateModel } from '../../models/database/create/associate-create.model';
import * as faker from 'faker';
import { AssociateEntity } from '../../../database/entities/associate.entity';
import { APP_CONSTANTS } from '../../utils/app.constants';
import { UserRoleEnum } from '../../../database/models/enums/user-role.enum';

const RandExp = require('randexp');

export class DatabaseFakerService {
    constructor() {}

    createFakeAssociateEntities(): AssociateEntity[] {
        let associateModel: AssociateCreateModel;
        let associateEntity: AssociateEntity;
        const associateEntities = new Array<AssociateEntity>();

        let i = 0;
        const itrDest = process.env.FAKE_ASSOCIATES ? parseInt(process.env.FAKE_ASSOCIATES) : 2000;
        while (i < itrDest) {
            associateEntity = new AssociateEntity();
            associateEntity.emailId = faker.internet.email('asv', null, 'gmail');
            associateEntity.corpId = new RandExp(APP_CONSTANTS.REGEX.USER).gen();
            switch (i % 3) {
                case 0:
                    associateEntity.role = UserRoleEnum.DEVELOPER;
                case 1:
                    associateEntity.role = UserRoleEnum.ADMIN;
                case 2:
                    associateEntity.role = UserRoleEnum.HR;
                default:
                    associateEntity.role = UserRoleEnum.HR;
            }

            associateEntities.push(associateEntity);
            i++;
            console.log('val of i:', i);
        }

        return associateEntities;
    }
}
export const FAKER_SERVICE_INST = new DatabaseFakerService();
