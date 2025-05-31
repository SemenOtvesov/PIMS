import { setAdminToken } from '@js/state/admin/adminState';
import useAppDispatch from '../useAppDispatch';

export default () => {
    const dispatch = useAppDispatch();
    return () => {
        dispatch(setAdminToken(''));
    };
};
