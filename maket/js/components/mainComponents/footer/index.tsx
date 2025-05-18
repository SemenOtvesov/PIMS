import React, { memo } from 'react';
import style from './style';

// @ts-ignore: Unreachable code error
import IconTasks from '@maket/img/icon/tasks.png';
// @ts-ignore: Unreachable code error
import IconFarm from '@maket/img/icon/farm.png';
// @ts-ignore: Unreachable code error
import IconPari from '@maket/img/icon/pari.png';
import { useLocation, useNavigate } from 'react-router-dom';
import useAppSelector from '@js/hooks/useAppSelector';

export default memo(
    () => {
        const { Container } = style();
        const navigate = useNavigate();
        const location = useLocation();
        return <Container></Container>;
    },
    () => true,
);
