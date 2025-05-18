export type TsporeState = {
    sporeList: Array<Tspore>;
    sporeListFulfiled: Array<TsporeFullfiled>;
    activeSporeCoefs: Tcoefs;
};
export interface Tspore extends TsporeAdd {
    Id: number;
    coef1?: number;
    coef2?: number;
    amount1?: number;
    amount2?: number;
}
export interface TsporeFullfiled {
    sporid: string;
    result: number;
}
export type TsporeAdd = {
    start: string;
    end: string;
    desc: string;
    name: string;
    question: string;
    photo: string;
    result1: string;
    result2: string;
    answer: number;
    commision: number;
};
export type Tcoefs = {
    coef1: number;
    coef2: number;
    amount1: number;
    amount2: number;
} | null;
