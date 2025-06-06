import React from 'react';

import { userApi } from '@js/api/user/indexQuery';
import useAppSelector from '@js/hooks/useAppSelector';

// @ts-ignore: Unreachable code error
import AbcoluteImg2 from '@maket/img/icon/absoluteImg/Nice work.png';
// @ts-ignore: Unreachable code error
import AbcoluteImg1 from '@maket/img/icon/absoluteImg/cat1.png';
// @ts-ignore: Unreachable code error
import AbcoluteImg4 from '@maket/img/icon/absoluteImg/cat2.png';
// @ts-ignore: Unreachable code error
import AbcoluteImg3 from '@maket/img/icon/absoluteImg/Heeyysexy.png';
import style from './style';
import Achievements from './achievements';

// @ts-ignore: Unreachable code error
import baseAvatar from '@maket/img/icon/baseAvatar.png';

type Tprops = {};

export default ({}: Tprops) => {
    // @ts-ignore: Unreachable code error
    const tg = window.Telegram.WebApp;

    const { Container, BackCircle, ImageAbsolute, Avatar, UserName, Phone, AvatarBox } = style();

    const userToken = useAppSelector(state => state.userState.token);

    const user = userApi.useGetProfileQuery({
        userToken,
        // @ts-ignore: Unreachable code error
        userUid: tg.initDataUnsafe.user.id,
    });

    return (
        <Container>
            <BackCircle />

            <AvatarBox>
                <Avatar
                    style={{ background: `url(${baseAvatar}) 100%/100%` }}
                    src={`https://t.me/i/userpic/160/${tg.initDataUnsafe.user.id}.jpg`}
                    onLoad={(e: any) => {
                        if (e.target.width < 10) {
                            e.target.src = baseAvatar;
                        }
                    }}
                />
                <ImageAbsolute
                    style={{
                        top: '-20%',
                        left: '-20%',
                        height: '3em',
                        position: 'absolute',
                    }}
                    src={AbcoluteImg3}
                />
            </AvatarBox>
            <UserName>
                {tg.initDataUnsafe.user.first_name} {tg.initDataUnsafe.user.last_name}
            </UserName>
            <Phone>Не указан</Phone>
            <div
                style={{
                    position: 'relative',
                }}
            >
                <ImageAbsolute
                    style={{
                        top: '-6em',
                        left: '-1em',
                        height: '12em',
                        position: 'absolute',
                    }}
                    src={AbcoluteImg4}
                />
                <Achievements user={user.data} />
            </div>

            <ImageAbsolute
                style={{
                    bottom: '6em',
                    right: '1em',
                }}
                src={AbcoluteImg2}
            />
            <ImageAbsolute
                style={{
                    top: '0em',
                    right: '0',
                    height: '10em',
                }}
                src={AbcoluteImg1}
            />
        </Container>
    );
};
