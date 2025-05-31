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
) => {
    // dispatch(setAdminToken(res.data.token));
    // return res.data;

    const reader = new FileReader();

    reader.onload = async function (e) {
        const base64String = e.target.result;
        const res = await axios.post<{}>(
            baseUrl + '/api/admin/add-news',
            {
                dto: { title, description, creator },
                file: base64String,
            },
            {
                headers: {
                    Authorization: `Bearer ${adminToken}`,
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json',
                },
            },
        );
    };

    reader.readAsDataURL(image[0]);
};
