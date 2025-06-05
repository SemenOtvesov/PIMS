import { baseUrl } from '@js/constants/values';
import { TreqAprovals } from '@js/types/state/aprovals';
import { TreqAwards } from '@js/types/state/awards';
import { TreqLocation } from '@js/types/state/location';
import { TreqNews } from '@js/types/state/news';
import { TreqUsers } from '@js/types/state/users';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: build => ({
        getNews: build.query<TreqNews, string>({
            query: (adminToken: string) => ({
                url: '/api/news/all',
                params: {
                    page: 0,
                    size: 100,
                },
                headers: { Authorization: `Bearer ${adminToken}` },
            }),
        }),
        getLocation: build.query<TreqLocation, string>({
            query: (adminToken: string) => ({
                url: '/api/location/all',
                params: {
                    page: 0,
                    size: 100,
                },
                headers: { Authorization: `Bearer ${adminToken}` },
            }),
        }),
        getUsers: build.query<TreqUsers, string>({
            query: (adminToken: string) => ({
                url: '/api/users/all',
                params: {
                    page: 0,
                    size: 100,
                },
                headers: { Authorization: `Bearer ${adminToken}` },
            }),
        }),
        getAwards: build.query<TreqAwards, string>({
            query: (adminToken: string) => ({
                url: '/api/awards/all',
                params: {
                    page: 0,
                    size: 100,
                },
                headers: { Authorization: `Bearer ${adminToken}` },
            }),
        }),
        getPendingApprovals: build.query<TreqAprovals, string>({
            query: (adminToken: string) => ({
                url: '/api/admin/pending-approvals',
                headers: { Authorization: `Bearer ${adminToken}` },
            }),
        }),
    }),
});
