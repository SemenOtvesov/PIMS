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

    useEffect(() => {
        const fn = function (e) {
            const isScrollable = e.target.closest('.allow-scroll'); // Ищем ближайший разрешённый элемент
            const atTop = window.scrollY <= 0;
            const atBottom = window.scrollY >= document.body.scrollHeight - window.innerHeight;

            // Если скроллим не внутри разрешённого контейнера и достигли границы — блокируем
            if (!isScrollable && (atTop || atBottom)) {
                e.preventDefault();
            }
        };
        document.addEventListener('touchmove', fn, { passive: false });
        return () => {
            document.removeEventListener('touchmove', fn);
        };
    });

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
