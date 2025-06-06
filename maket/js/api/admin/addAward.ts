import { baseUrl } from '@js/constants/values';
import { TappDispatch } from '@js/state/store';
import axios from 'axios';

export default async (
    dispatch: TappDispatch,
    adminToken: string,
    name: string,
    description: string,
    // image: [File],
    refetchFn?: () => void,
) => {
    const dto = JSON.stringify({ name, description });
    const formData = new FormData();
    formData.append('dto', new Blob([dto], { type: 'application/json' })); // 👈 это важно!
    // formData.append('file', image[0]);

    const res = await axios.post<{ token: string }>(baseUrl + '/api/admin/create-award', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${adminToken}`,
        },
    });

    if (refetchFn) {
        refetchFn();
    }
};
