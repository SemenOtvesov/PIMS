import React, { createContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/index';
import Footer from './footer';
import { TlayoutContext } from '@js/types/context/layout';
import Allert from './fn/allert';
import Resize from './fn/resize';
import BackBtn from './fn/backBtn';
import useAdminToken from '@js/hooks/admin/useAdminToken';
import NotLoginBlur from './fn/notLoginBlur';

export const LayoutContext = createContext<TlayoutContext>({});

export default () => {
    const { pathname } = useLocation();

    if (pathname.includes('admin')) {
        useAdminToken();
    }

    useEffect(() => {
        if (pathname.includes('admin')) {
            document.body.setAttribute('style', 'background: #fff');
        } else {
            document.body.setAttribute('style', '');
        }
    });

    return (
        <LayoutContext.Provider value={'val'}>
            {/* <Header /> */}

            <NotLoginBlur />

            <Allert />
            <BackBtn />
            <Resize />

            <Outlet />
            {pathname.includes('admin') ? '' : <Footer />}
        </LayoutContext.Provider>
    );
};
