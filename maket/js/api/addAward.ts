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
    const formData = new FormData();
    formData.append('image', image[0]); // Файл

    // Создаем отдельную часть для JSON
    const awardJsonBlob = new Blob([JSON.stringify({ name, description })], {
        type: 'application/json',
    });
    formData.append('dto', awardJsonBlob);

    const res = await axios.post<{ token: string }>(baseUrl + '/api/admin/create-award', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${adminToken}`,
        },
    });
};
