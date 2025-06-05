import useAppSelector from '@js/hooks/useAppSelector';
import React from 'react';

export default () => {
    const blur = useAppSelector(state => state.authBlurState.blur);
    if (!blur) {
        return <></>;
    }
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                position: 'fixed',
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
            }}
        >
            Ваша кандидатура на рассмотрении
        </div>
    );
};
