import { inviteUrl } from '@js/constants/values';
import useAppSelector from '@js/hooks/useAppSelector';
import { setAllert } from '@js/state/allert/allertState';
import { TappDispatch } from '@js/state/store';
import React from 'react';

export default () => {
    const allert = useAppSelector(state => state.allertState.allert);

    return (
        <div
            id="allertCopy"
            className="copyAllert"
            style={{
                borderRadius: 20,
                padding: '5px 15px',
                color: '#fff',
                backgroundColor: '#969696',
                position: 'fixed',
                top: '90vh',
                left: '50%',
                minWidth: '15em',
                width: 'fit-content',
                maxWidth: '90vw',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                transform: 'translate(-50%, -50%)',
                opacity: 0,
                pointerEvents: 'none',
                transition: '0.3s',
                zIndex: 1000,
            }}
        >
            {allert}
        </div>
    );
};

export function openAllert(dispatch: TappDispatch, text: string) {
    const copyAllertRef = document.getElementById('allertCopy');
    // @ts-ignore: Unreachable code error
    const id = window.Telegram.WebApp.initDataUnsafe.user.id;
    navigator.clipboard.writeText(`${inviteUrl}${id}`);

    copyAllertRef?.classList.add('active');
    dispatch(setAllert(text));
    setTimeout(() => {
        copyAllertRef?.classList.remove('active');
        dispatch(setAllert(''));
    }, 1500);
}
