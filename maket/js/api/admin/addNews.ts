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
    image: Array<File>,
    refetchFn?: () => void,
) => {
    const dto = JSON.stringify({ title, description, creator });

    const formData = new FormData();
    formData.append('dto', new Blob([dto], { type: 'application/json' }));

    // Добавляем каждый файл из массива `image`
    if (Array.isArray(image)) {
        image.forEach(file => {
            formData.append('file', file); // 👈 Axios сам добавит имя файла
        });
    }
    // Если `image` — одиночный файл (обратная совместимость)
    else if (image instanceof File || image instanceof Blob) {
        formData.append('file', image);
    }

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
