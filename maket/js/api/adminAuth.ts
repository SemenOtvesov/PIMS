import { baseUrl } from '@js/constants/values';
import { setAdminToken } from '@js/state/admin/adminState';
import { TappDispatch } from '@js/state/store';
import { Tuser } from '@js/types/state/user';
import axios from 'axios';

export default async (dispatch: TappDispatch, username: string, password: string) => {
    const res = await axios.post<{ token: string }>(baseUrl + '/api/auth/admin', {
        username,
        password,
    });
    dispatch(setAdminToken(res.data.token));
    return res.data;
};
