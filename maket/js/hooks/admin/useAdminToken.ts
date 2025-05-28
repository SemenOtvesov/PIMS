import { setAdminToken } from '@js/state/admin/adminState';
import useAppDispatch from '../useAppDispatch';

export default () => {
    const dispatch = useAppDispatch();
    let token = document.cookie.split(';').filter(el => el.includes('adminToken'))[0];
    if (token) {
        token = token.split('adminToken=')[1];
        dispatch(setAdminToken(token));
    }
};
