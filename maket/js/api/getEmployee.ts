import { baseUrl } from '@js/constants/values';
import { setAdminLocation, setAdminToken } from '@js/state/admin/adminState';
import { TappDispatch } from '@js/state/store';
import { Tlocation } from '@js/types/state/location';
import { Tuser } from '@js/types/state/user';
import axios from 'axios';

export default async (dispatch: TappDispatch, adminToken: string) => {
    const res = await axios.get<Tlocation[]>(baseUrl + '/api/users/all', {
        params: {
            page: 0,
            size: 100,
        },
        headers: { Authorization: `Bearer ${adminToken}` },
    });
    dispatch(setAdminLocation(res.data));
    return res.data;
};
