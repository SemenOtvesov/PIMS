import { baseUrl } from '@js/constants/values';
import { setAdminToken } from '@js/state/admin/adminState';
import { TappDispatch } from '@js/state/store';
import { Tuser } from '@js/types/state/user';
import axios from 'axios';

export default async (
    dispatch: TappDispatch,
    adminToken: string,
    name: string,
    address: string,
    image: [File],
) => {
    const formData = new FormData();
    formData.append('image', image[0]);

    const res = await axios.post<{ token: string }>(
        baseUrl + '/api/admin/create-location',
        {
            location: { name, address },
            file: formData,
        },
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json',
                Authorization: `Bearer ${adminToken}`,
            },
        },
    );

    // dispatch(setAdminToken(res.data.token));
    // return res.data;
};
