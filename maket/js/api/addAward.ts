import { baseUrl } from '@js/constants/values';
import { setAdminToken } from '@js/state/admin/adminState';
import { TappDispatch } from '@js/state/store';
import { Tuser } from '@js/types/state/user';
import axios from 'axios';

export default async (
    dispatch: TappDispatch,
    adminToken: string,
    name: string,
    description: string,
    image: [File],
) => {
    // dispatch(setAdminToken(res.data.token));
    // return res.data;

    const reader = new FileReader();

    reader.onload = async function (e) {
        const base64String = e.target.result;
        const res = await axios.post<{ token: string }>(
            baseUrl + '/api/admin/create-award',
            {
                dto: { name, description },
                file: base64String,
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json',
                    Authorization: `Bearer ${adminToken}`,
                },
            },
        );
    };

    reader.readAsDataURL(image[0]);
};
