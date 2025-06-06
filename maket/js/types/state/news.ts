import { TbaseReqSchema } from './baseReqSchema';

export type TNews = {
    id: string;
    title: string;
    content: string;
    creator: string;
    category: string;
    publishDate: string | null;
    images: Array<string>;
};

export type TreqNews = TbaseReqSchema<TNews>;
