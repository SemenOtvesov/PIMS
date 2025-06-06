import { userApi } from '@js/api/user/indexQuery';
import { TreqAuth } from '@js/types/api/auth';
import { useEffect } from 'react';
import useAppDispatch from '../useAppDispatch';
import { setAuthBlur } from '@js/state/authBlur/authBlurState';
import { setUserToken } from '@js/state/user/userState';

export default () => {
    // @ts-ignore: Unreachable code error
    const tg = window.Telegram.WebApp;
    const dispacth = useAppDispatch();

    window.Telegram.WebApp.MainButton.setText('Подтвердить номер').show();

    // Обработка нажатия
    window.Telegram.WebApp.MainButton.onClick(() => {
        // Открываем чат с ботом для запроса номера
        window.Telegram.WebApp.sendData(JSON.stringify({ action: 'request_phone' }));
        // Или просто закрываем WebApp, чтобы пользователь вручную написал боту
        window.Telegram.WebApp.close();
    });

    const reqBody: TreqAuth = {
        dto: {
            tgId: tg.initDataUnsafe.user.id,
            phoneNumber: '',
            firstName: tg.initDataUnsafe.user.first_name,
            lastName: tg.initDataUnsafe.user.last_name,
            username: tg.initDataUnsafe.user.username,
            photoUrl: `https://t.me/i/userpic/160/${tg.initDataUnsafe.user.id}.jpg`,
            authDate: tg.initDataUnsafe.auth_date,
            hash: tg.initDataUnsafe.hash,
        },
        file: '',
    };

    const [triggerToken, token] = userApi.useAuthorizeMutation();
    const [triggerReg, reg] = userApi.useRegistrationMutation();

    useEffect(() => {
        triggerToken(reqBody);
    }, []);

    useEffect(() => {
        if (token.error) {
            if (token.error.data == 'Current user is not registered') {
                triggerReg(reqBody);
            }
            if (token.error.data == 'Current user is not approved by admin') {
                dispacth(setAuthBlur(true));
            }
        } else if (token.data) {
            dispacth(setUserToken(token.data.token));
        }
    }, [token]);

    useEffect(() => {
        if (reg.data) {
            if (reg.data.originalStatus == 200) {
                dispacth(setAuthBlur(true));
            }
        }
    }, [reg]);
};
