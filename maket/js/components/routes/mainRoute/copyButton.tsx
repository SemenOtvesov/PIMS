import React from 'react';
import style from './style';
import { inviteUrl } from '@js/constants/values';
import Button from '@js/components/middleComponents/button';
import useAppDispatch from '@js/hooks/useAppDispatch';
import { TappDispatch } from '@js/state/store';
import { openAllert } from '@js/components/mainComponents/fn/allert';
import { TactiveLanguage } from '@js/types/state/language';

export default () => {
    const {} = style();
    const dispatch = useAppDispatch();

    return (
        <>
            <Button onClick={() => {}} style={{ width: '80vw', fontSize: '1.25em' }} type="normal">
                '
            </Button>
        </>
    );
};

function copyClickboard(dispatch: TappDispatch, activeLanguage: TactiveLanguage) {
    // @ts-ignore: Unreachable code error
    const id = window.Telegram.WebApp.initDataUnsafe.user.id;
    navigator.clipboard.writeText(`${inviteUrl}${id}`);

    openAllert(dispatch, activeLanguage['Allert.Friends']);
}
