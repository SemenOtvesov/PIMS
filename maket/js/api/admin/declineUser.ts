import { baseUrl } from '@js/constants/values';
import { TappDispatch } from '@js/state/store';
import axios from 'axios';

export default async (
    dispatch: TappDispatch,
    adminToken: string,
    userId: string,
    refetch: () => void,
) => {
    const res = await axios
        .post(
            baseUrl + `/api/admin/decline-registration/${userId}`,
            {
                userId,
            },
            {
                headers: {
                    Authorization: `Bearer ${adminToken}`,
                },
            },
        )
        .then(res => {
            if (refetch) {
                refetch();
            }
        })
        .catch(err => {
            if (refetch) {
                refetch();
            }
        });
};
