import { useEffect } from 'react';
import useAppSelector from '../useAppSelector';
import useAppDispatch from '../useAppDispatch';
import getEmployee from '@js/api/getEmployee';
import getAwards from '@js/api/getAwards';
import getNews from '@js/api/getNews';
import getLocationsCopy from '@js/api/getLocations copy';

export default () => {
    const dispatch = useAppDispatch();
    const adminToken = useAppSelector(state => state.adminState.token);

    useEffect(() => {
        getLocationsCopy(dispatch, adminToken);
        getEmployee(dispatch, adminToken);
        getAwards(dispatch, adminToken);
        getNews(dispatch, adminToken);
    }, [adminToken]);
};
