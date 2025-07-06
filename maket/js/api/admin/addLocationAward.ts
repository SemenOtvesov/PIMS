import { baseUrl } from '@js/constants/values';
import { TappDispatch } from '@js/state/store';
import axios from 'axios';

export default async (
    dispatch: TappDispatch,
    adminToken: string,
    awardId: string,
    targetId: string,
    locationAwards: Array<{}>,
) => {
    const res = await axios.post(
        baseUrl + '/api/admin/assign-location-award',
        {
            awardId,
            targetId,
        },
        {
            headers: {
                Authorization: `Bearer ${adminToken}`,
            },
        },
    );
    if (locationAwards) {
        locationAwards.push(res.data);
    } else {
        locationAwards = [res.data];
    }

    // dispatch(setAdminNewsList(res.data.token));
    // return res.data;
};
