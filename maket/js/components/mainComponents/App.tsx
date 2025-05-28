import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import MainRoute from '../routes/mainRoute';
import Admin from '../routes/admin';
import useAppDispatch from '@js/hooks/useAppDispatch';
import tgAuth from '@js/api/tgAuth';

export default () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        tgAuth(dispatch);
        const reloadTime = localStorage.getItem('lastReload');
        const timestamp = Math.floor(new Date().getTime() / 1000);

        if (reloadTime == null) {
            localStorage.setItem('lastReload', `${timestamp}`);
            location.reload();
        } else if (+reloadTime + 2 < timestamp) {
            localStorage.setItem('lastReload', `${timestamp}`);
            location.reload();
        }
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainRoute />} />
                <Route path="admin" element={<Admin />} />
            </Route>
        </Routes>
    );
};
