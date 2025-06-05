import { baseUrl } from '@js/constants/values';
import { TappDispatch } from '@js/state/store';
import axios from 'axios';

export default async (
    dispatch: TappDispatch,
    adminToken: string,
    name: string,
    address: string,
    image: [File],
    refetchFn?: () => void,
) => {
    const dto = JSON.stringify({ name, address });

    const formData = new FormData();
    formData.append('location', new Blob([dto], { type: 'application/json' })); // 👈 это важно!
    formData.append('file', image[0]);

    const res = await axios.post<{ token: string }>(
        baseUrl + '/api/admin/create-location',
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json',
                Authorization: `Bearer ${adminToken}`,
            },
        },
    );
    if (refetchFn) {
        refetchFn();
    }
    // return res.data;
};
