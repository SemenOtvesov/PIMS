import { baseUrl } from '@js/constants/values';
import { setAdminToken } from '@js/state/admin/adminState';
import { TappDispatch } from '@js/state/store';
import axios from 'axios';

export default async (
    dispatch: TappDispatch,
    adminToken: string,
    title: string,
    description: string,
    creator: string,
) => {
    const res = await axios.post<{}>(
        baseUrl + '/api/admin/add-news',
        {
            title,
            description,
            creator,
        },
        {
            headers: {
                Authorization: `Bearer ${adminToken}`,
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json',
            },
        },
    );
    // dispatch(setAdminToken(res.data.token));
    return res.data;
};
