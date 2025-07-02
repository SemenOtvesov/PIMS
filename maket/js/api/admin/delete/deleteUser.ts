import { baseUrl } from '@js/constants/values';
import { TappDispatch } from '@js/state/store';
import axios from 'axios';

export default async (adminToken: string, userId: string, refetchFn?: () => void) => {
    const res = await axios.delete(baseUrl + `/api/admin/delete/user/{userId}`, {
        params: { userId },
        headers: {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
            Authorization: `Bearer ${adminToken}`,
        },
    });
    if (refetchFn) {
        refetchFn();
    }
    // return res.data;
};
