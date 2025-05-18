import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default () => {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname == '/') {
            // @ts-ignore: Unreachable code error
            window.Telegram.WebApp.BackButton.hide();
        } else {
            // @ts-ignore: Unreachable code error
            window.Telegram.WebApp.BackButton.show();
            // @ts-ignore: Unreachable code error
            window.Telegram.WebApp.BackButton.onClick(() => {
                navigate('/');
            });
        }
    }, [location.pathname]);
    return <></>;
};
