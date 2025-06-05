import { Taward, TawardUser } from './awards';
import { TbaseReqSchema } from './baseReqSchema';

export type TUser = {
    id: string;
    telegramId: number;
    phone: string;
    username: string;
    firstName: string;
    lastName: string;
    photoUrl: string;
    awards: Array<Taward>;
};

export type TuserUser = {
    id: string;
    telegramId: number;
    phone: string;
    username: string;
    firstName: string;
    lastName: string;
    photoUrl: string;
    employeeAwards: Array<TawardUser>;
};

export type TreqUsers = TbaseReqSchema<TUser>;
