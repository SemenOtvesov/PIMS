import { baseUrl } from '@js/constants/values';
import { TappDispatch } from '@js/state/store';
import axios from 'axios';

export default async (
    adminToken: string,
    userId: string,
    locationId: string,
    refetchFn?: () => void,
) => {
    const res = await axios.post(
        baseUrl + `/api/admin/assign-user-location/${userId}`,
        locationId,
        {
            params: { userId },
            headers: {
                Authorization: `Bearer ${adminToken}`,
            },
        },
    );

    if (refetchFn) {
        refetchFn();
    }
};
