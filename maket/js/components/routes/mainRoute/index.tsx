import React from 'react';
import style from './style';

// @ts-ignore: Unreachable code error
import useAppDispatch from '@js/hooks/useAppDispatch';
import useAppSelector from '@js/hooks/useAppSelector';
import CopyButton from './copyButton';

export default () => {
    const { Container } = style();
    const dispatch = useAppDispatch();
    const token = useAppSelector(state => state.userState.token);

    return (
        <Container className="scrollbar_hidden">
            <CopyButton />
        </Container>
    );
};
