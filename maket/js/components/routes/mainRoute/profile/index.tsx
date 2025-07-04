import React, { useEffect, useRef, useState } from 'react';

import { userApi } from '@js/api/user/indexQuery';
import useAppSelector from '@js/hooks/useAppSelector';

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

    const {
        Container,
        BackCircle,
        BackCircleMain,
        BackCircleYellow,
        BackCircleGray,
        ImageAbsolute,
        Avatar,
        UserName,
        Phone,
        AvatarBox,
        ImageAbsoluteDiv,
    } = style();

    const userToken = useAppSelector(state => state.userState.token);

    const user = userApi.useGetProfileQuery({
        userToken,
        // @ts-ignore: Unreachable code error
        userUid: tg.initDataUnsafe.user.id,
    });

    return (
        <Container className="allow-scroll">
            <BackCircle>
                <BackCircleMain>
                    <BackCircleYellow />
                    <BackCircleGray />
                </BackCircleMain>
            </BackCircle>

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

                <ImageAbsoluteDiv
                    style={{
                        top: '-25%',
                        left: '-20%',
                        height: '3em',
                        fontSize: '3em',
                        position: 'absolute',
                    }}
                    className="icon-Heeyysexy"
                />
            </AvatarBox>
            <UserName>
                {tg.initDataUnsafe.user.first_name} {tg.initDataUnsafe.user.last_name}
            </UserName>
            <Phone>+7999 999 99 99</Phone>
            <div
                style={{
                    position: 'relative',
                    zIndex: 10,
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
                    top: '0em',
                    right: '0',
                    height: '10em',
                    position: 'absolute',
                }}
                src={AbcoluteImg1}
            />
            <ImageAbsoluteDiv
                style={{
                    bottom: '6em',
                    right: '1em',
                }}
                className="icon-Nice-work"
            />
        </Container>
    );
};
