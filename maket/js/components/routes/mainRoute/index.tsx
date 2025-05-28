import React from 'react';
import style from './style';

// @ts-ignore: Unreachable code error
import useAppDispatch from '@js/hooks/useAppDispatch';
import useAppSelector from '@js/hooks/useAppSelector';
import CopyButton from './copyButton';
import News from './news';
import Profile from './profile';
import Raiting from './raiting';

export default () => {
    const { Container } = style();
    const section = useAppSelector(state => state.activeSectionState.section);

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
