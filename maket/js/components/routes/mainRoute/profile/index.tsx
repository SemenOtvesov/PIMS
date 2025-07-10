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

    console.log(user);

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
                {user?.data?.firstName} {user?.data?.middleName} {user?.data?.lastName}
            </UserName>
            <Phone>{user?.data?.phone ? formatPhoneNumber(user.data.phone) : 'Не указан'}</Phone>
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

function formatPhoneNumber(phoneNumber) {
    // Преобразуем число в строку
    const str = phoneNumber.toString();

    // Проверяем, что номер начинается с 7 и имеет 11 цифр
    if (str.length === 11 && str[0] === '7') {
        // Форматируем номер согласно шаблону +7999 999 99 99
        return `+${str[0]}${str.substring(1, 4)} ${str.substring(4, 7)} ${str.substring(
            7,
            9,
        )} ${str.substring(9)}`;
    }

    // Возвращаем исходное значение, если формат не соответствует ожидаемому
    return phoneNumber;
}
