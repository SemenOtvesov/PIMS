import { baseUrl } from '@js/constants/values';
import { TappDispatch } from '@js/state/store';
import axios from 'axios';

export default async (adminToken: string, awardId: string, refetchFn?: () => void) => {
    const res = await axios.delete(baseUrl + `/api/admin/delete/award/{awardId}`, {
        params: { awardId },
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
