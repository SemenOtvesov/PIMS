import { baseUrl } from '@js/constants/values';
import { TreqAuth } from '@js/types/api/auth';
import { TreqLocation, TreqLocationUser } from '@js/types/state/location';
import { TreqNews } from '@js/types/state/news';
import { TuserUser } from '@js/types/state/users';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: build => ({
        authorize: build.mutation<'', TreqAuth>({
            query: ({
                dto: { tgId, phoneNumber, firstName, lastName, username, photoUrl, authDate, hash },
                file,
            }: TreqAuth) => ({
                url: '/api/auth/telegram',
                method: 'POST',
                body: {
                    tgId,
                    phoneNumber,
                    firstName,
                    lastName,
                    username,
                    photoUrl,
                    authDate,
                    hash,
                },
            }),
        }),
        registration: build.mutation<'', TreqAuth>({
            query: ({
                dto: { tgId, phoneNumber, firstName, lastName, username, photoUrl, authDate, hash },
                file,
            }: TreqAuth) => ({
                url: '/api/users/register',
                method: 'POST',
                body: {
                    tgId,
                    phoneNumber,
                    firstName,
                    lastName,
                    username,
                    photoUrl,
                    authDate,
                    hash,
                },
            }),
        }),
        getNews: build.query<TreqNews, string>({
            query: (userToken: string) => ({
                url: '/api/news/all',
                params: {
                    page: 0,
                    size: 100,
                },
                headers: { Authorization: `Bearer ${userToken}` },
            }),
        }),
        getLocation: build.query<TreqLocationUser, string>({
            query: (userToken: string) => ({
                url: '/api/location/all',
                params: {
                    page: 0,
                    size: 100,
                },
                headers: { Authorization: `Bearer ${userToken}` },
            }),
        }),
        getProfile: build.query<TuserUser, { userToken: string; userUid: string }>({
            query: ({ userToken, userUid }: { userToken: string; userUid: string }) => ({
                url: `/api/users/tgprofile/${userUid}`,
                params: { tgId: userUid },
                headers: { Authorization: `Bearer ${userToken}` },
            }),
        }),
    }),
});
