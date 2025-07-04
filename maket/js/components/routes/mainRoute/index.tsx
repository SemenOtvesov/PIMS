import React, { useEffect } from 'react';
import style from './style';

// @ts-ignore: Unreachable code error
import useAppDispatch from '@js/hooks/useAppDispatch';
import useAppSelector from '@js/hooks/useAppSelector';
import CopyButton from './copyButton';
import News from './news';
import Profile from './profile';
import Raiting from './raiting';
import { setSection } from '@js/state/activeSection/activeSectionState';

export default () => {
    const { Container } = style();
    const dispatch = useAppDispatch();
    const section = useAppSelector(state => state.activeSectionState.section);

    useEffect(() => {
        const page = localStorage.getItem('path');
        dispatch(setSection(page || 'news'));
    }, []);
    useEffect(() => {
        localStorage.setItem('path', section);
    }, [section]);

    if (section == 'news') {
        return <News />;
    }
    if (section == 'profile') {
        return <Profile />;
    }
    if (section == 'raiting') {
        return <Raiting />;
    }
};
