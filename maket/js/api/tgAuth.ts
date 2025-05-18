import { baseUrl } from '@js/constants/values';
import { TappDispatch } from '@js/state/store';
import { setUser, setUserToken } from '@js/state/user/userState';
import { Tuser } from '@js/types/state/user';
import axios from 'axios';

export default async (dispatch: TappDispatch) => {
    // @ts-ignore: Unreachable code error
    const tg = window.Telegram.WebApp;
    const res = await axios.post<Tuser>(baseUrl + 'initdata', {
        initData: `${tg.initData}`,
    });
    dispatch(setUserToken(res.headers.jwt_token));
    dispatch(setUser(res.data));
    return res.data;
};
