import { baseUrl } from '@js/constants/values';
import axios from 'axios';

export default async (token: string) => {
    const res = axios.get(baseUrl + 'getspors', {
        headers: {
            token: token,
            'Content-Type': 'application/json',
            'access-control-expose-headers': 'jwt_token',
            'access-control-allow-origin': '*',
            accept: 'application/json',
        },
    });
    return res;
};
