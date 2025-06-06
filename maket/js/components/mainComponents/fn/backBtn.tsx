import useAppDispatch from '@js/hooks/useAppDispatch';
import useAppSelector from '@js/hooks/useAppSelector';
import { setActiveNews } from '@js/state/activeSection/activeSectionState';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { activeNews, section } = useAppSelector(state => state.activeSectionState);

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

    useEffect(() => {
        if (section != 'news' || !activeNews) {
            // @ts-ignore: Unreachable code error
            window.Telegram.WebApp.BackButton.hide();
        } else {
            // @ts-ignore: Unreachable code error
            window.Telegram.WebApp.BackButton.show();
            // @ts-ignore: Unreachable code error
            window.Telegram.WebApp.BackButton.onClick(() => {
                if (section == 'news' && activeNews) {
                    dispatch(setActiveNews(null));
                }
            });
        }
    }, [section, activeNews]);
    return <></>;
};
