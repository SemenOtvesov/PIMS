import React, { useState } from 'react';
import style from './style';

import useAppSelector from '@js/hooks/useAppSelector';
import useAppDispatch from '@js/hooks/useAppDispatch';

const header = () => {
    const dispatch = useAppDispatch();
    const {
        Container,
        Avatar,
        Name,
        AvatarBox,
        BalanceBox,
        BalanceText,
        BalanceValue,

        BalanceIconBox,
    } = style();

    const user = useAppSelector(state => state.userState.user);
    const [languageListActive, setlanguageListActive] = useState(false);

    return (
        <Container>
            <AvatarBox>
                <Avatar src={`https://t.me/i/userpic/160/${user?.username}.jpg`}></Avatar>
                <Name>{user ? user.username : ''}</Name>
            </AvatarBox>
            <BalanceBox>
                <BalanceText></BalanceText>
                <BalanceValue>
                    {user ? user.coins : ''}
                    <BalanceIconBox>
                        {/* <BalanceIcon alt="" src={IconCoin}></BalanceIcon> */}
                    </BalanceIconBox>
                </BalanceValue>
            </BalanceBox>
        </Container>
    );
};

export default header;
