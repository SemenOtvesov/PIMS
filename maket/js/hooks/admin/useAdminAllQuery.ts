import { useEffect } from 'react';
import useAppSelector from '../useAppSelector';
import getLocations from '@js/api/getLocations';
import useAppDispatch from '../useAppDispatch';

export default () => {
    const dispatch = useAppDispatch();
    const adminToken = useAppSelector(state => state.adminState.token);

    useEffect(() => {
        getLocations(dispatch, adminToken);
    }, [adminToken]);
};
