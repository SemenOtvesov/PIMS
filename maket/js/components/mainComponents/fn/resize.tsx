import React, { useEffect } from 'react';

export default () => {
    useEffect(() => {
        const interval = setInterval(() => {
            // @ts-ignore: Unreachable code error
            window.Telegram.WebApp.expand();
            const ios = iOS();

            if (ios) {
                document.documentElement.style.setProperty('--ios-padding', `${110}px`);
            } else {
                document.documentElement.style.setProperty('--ios-padding', `${0}px`);
            }
        }, 500);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return <></>;
};
export function iOS() {
    return (
        ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(
            navigator.platform,
        ) ||
        // iPad on iOS 13 detection
        (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
    );
}
