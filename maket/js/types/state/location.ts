import { Taward, TawardUser } from './awards';
import { TbaseReqSchema } from './baseReqSchema';

export type Tlocation = {
    id: string;
    name: string;
    address: string;
    locationImage: string;
    awards: Array<Taward>;
};
export type TlocationUser = {
    id: string;
    name: string;
    address: string;
    locationImage: string;
    locationAwards: Array<TawardUser>;
};

export type TreqLocation = TbaseReqSchema<Tlocation>;
export type TreqLocationUser = TbaseReqSchema<TlocationUser>;
