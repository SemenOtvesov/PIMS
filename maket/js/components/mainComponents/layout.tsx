import React, { createContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/index';
import Footer from './footer';
import { TlayoutContext } from '@js/types/context/layout';
import Allert from './fn/allert';
import Resize from './fn/resize';
import useAppDispatch from '@js/hooks/useAppDispatch';
import BackBtn from './fn/backBtn';

export const LayoutContext = createContext<TlayoutContext>({});

export default () => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    const checkAdmin = location.pathname.includes('admin');
    return (
        <LayoutContext.Provider value={'val'}>
            {!checkAdmin && <Header />}
            {!checkAdmin && <Allert />}
            <BackBtn />
            <Resize />
            <div style={location.pathname.includes('admin') ? {} : { pointerEvents: 'none' }}>
                <Outlet />
            </div>
            {!checkAdmin && <Footer />}
        </LayoutContext.Provider>
    );
};
