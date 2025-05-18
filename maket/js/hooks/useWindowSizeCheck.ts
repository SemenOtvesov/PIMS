import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export type TwindowSize = {
    isMicroMobile: boolean;
    isMobile: boolean;
    isTab: boolean;
    isLaptop: boolean;
    isDesktop: boolean;
};

export default (): TwindowSize => {
    const initScWidth = Math.max(
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth,
    );

    const [scrollWidth, setScrollWidth] = useState(initScWidth || 769);
    const ret = {
        isMicroMobile: scrollWidth <= 320,
        isMobile: scrollWidth <= 510,
        isTab: scrollWidth > 510 && scrollWidth < 821,
        isLaptop: scrollWidth > 820 && scrollWidth < 1440,
        isDesktop: scrollWidth >= 1440,
    };

    useEffect(() => {
        resizeFn(setScrollWidth, new Event(''));
        const bindFn = resizeFn.bind(this, setScrollWidth);
        window.addEventListener('resize', bindFn);
        return () => window.removeEventListener('resize', bindFn);
    }, []);

    useEffect(() => {
        ret.isMicroMobile = scrollWidth <= 320;
        ret.isMobile = scrollWidth <= 510;
        ret.isTab = scrollWidth > 510 && scrollWidth < 821;
        ret.isLaptop = scrollWidth > 820 && scrollWidth < 1440;
        ret.isDesktop = scrollWidth >= 1440;
    }, [scrollWidth]);

    return ret;
};
function resizeFn(setScrollWidth: Dispatch<SetStateAction<number>>, e: Event) {
    setScrollWidth(
        Math.max(
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.body.clientWidth,
            document.documentElement.clientWidth,
        ),
    );
}
