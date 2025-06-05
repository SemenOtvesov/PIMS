export type TreqAuth = { dto: TreqAuthDto; file: string };
export type TreqAuthDto = {
    tgId: number;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    username: string;
    photoUrl: string;
    authDate: number;
    hash: string;
};
