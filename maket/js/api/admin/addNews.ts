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
    image: [File],
    refetchFn?: () => void,
) => {
    const dto = JSON.stringify({ title, description, creator });

    const formData = new FormData();
    formData.append('dto', new Blob([dto], { type: 'application/json' })); // 👈 это важно!
    formData.append('file', image[0]);

    const res = await axios.post(baseUrl + '/api/admin/add-news', formData, {
        headers: {
            Authorization: `Bearer ${adminToken}`,
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
        },
    });

    if (refetchFn) {
        refetchFn();
    }

    // dispatch(setAdminNewsList(res.data.token));
    // return res.data;
};
