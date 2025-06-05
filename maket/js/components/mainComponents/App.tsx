import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './layout';
import MainRoute from '../routes/mainRoute';
import Admin from '../routes/admin';
import useAppDispatch from '@js/hooks/useAppDispatch';
import useAuth from '@js/hooks/user/useAuth';

export default () => {
    const { pathname } = useLocation();
    if (!pathname.includes('admin')) {
        useAuth();
    }

    useEffect(() => {
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
