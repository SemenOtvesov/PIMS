import { TbaseReqSchema } from './baseReqSchema';

export type Taward = {
    id: string;
    name: string;
    description: string;
    awardImage: string;
};
export type TawardUser = {
    id: string;
    awardTitle: string;
    awardDescription: string;
    assignedDate: string;
};

export type TreqAwards = TbaseReqSchema<Taward>;
