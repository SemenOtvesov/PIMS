import React from 'react';

import { userApi } from '@js/api/user/indexQuery';
import useAppSelector from '@js/hooks/useAppSelector';

// @ts-ignore: Unreachable code error
import AbcoluteImg2 from '@maket/img/icon/absoluteImg/Nice work.png';
// @ts-ignore: Unreachable code error
import AbcoluteImg1 from '@maket/img/icon/absoluteImg/cat1.png';
// @ts-ignore: Unreachable code error
import AbcoluteImg4 from '@maket/img/icon/absoluteImg/cat2.png';
import style from './style';
import Achievements from './achievements';

// @ts-ignore: Unreachable code error
import baseAvatar from '@maket/img/icon/baseAvatar.png';

type Tprops = {};

export default ({}: Tprops) => {
    // @ts-ignore: Unreachable code error
    const tg = window.Telegram.WebApp;

    const { Container, BackCircle, ImageAbsolute, Avatar, UserName, Phone } = style();

    const userToken = useAppSelector(state => state.userState.token);

    const user = userApi.useGetProfileQuery({
        userToken,
        // @ts-ignore: Unreachable code error
        userUid: tg.initDataUnsafe.user.id,
    });

    return (
        <Container>
            <BackCircle />

            <Avatar
                style={{ background: `url(${baseAvatar}) 100%/100%` }}
                src={`https://t.me/i/userpic/160/${tg.initDataUnsafe.user.id}.jpg`}
                onLoad={(e: any) => {
                    if (e.target.width < 10) {
                        e.target.src = baseAvatar;
                    }
                }}
            />
            <UserName>
                {tg.initDataUnsafe.user.first_name} {tg.initDataUnsafe.user.last_name}
            </UserName>
            <Phone>Не указан</Phone>
            <Achievements user={user.data} />

            <ImageAbsolute
                style={{
                    bottom: '8em',
                    left: '50%',
                    transform: 'translate(-50%)',
                }}
                src={AbcoluteImg2}
            />
            <ImageAbsolute
                style={{
                    top: '0em',
                    right: '0',
                    height: '7em',
                }}
                src={AbcoluteImg1}
            />
            <ImageAbsolute
                style={{
                    bottom: '10em',
                    left: '0',
                    height: '12em',
                }}
                src={AbcoluteImg4}
            />
        </Container>
    );
};
