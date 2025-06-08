import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import styled from '@emotion/styled';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            marginTop: '2em',
            display: 'flex',
            flexDirection: 'column',
            gap: '2em',
            zIndex: '1',
            width: '100%',

            minWidth: 'calc(100vw - 2em)',
        }),
        Title: styled.div({
            fontSize: '28px',
            fontWeight: 700,
            textAlign: 'center',
            transform: 'scale(1, 0.92)',
            letterSpacing: '-0.43px',
        }),
        Main: styled.div({ display: 'flex', gap: '5px', flexWrap: 'wrap' }),
        Achievement: styled.div({
            width: 'calc((100% - 10px) / 3)',
            aspectRatio: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '1em',

            boxShadow: '0 0 10px 1px #00000010',

            borderRadius: 10,

            '&.type1': {
                backgroundColor: '#EBEBEB',
            },
            '&.type2': {
                backgroundColor: '#fff',
            },
            '&.type3': {
                backgroundColor: '#FA8E7C',
            },
            '&.type4': {
                backgroundColor: '#FFE4D3',
            },
            '&.type5': {
                backgroundColor: '#FCB9A7',
            },
        }),
        AchievementTitle: styled.div({
            fontSize: '20px',
            fontWeight: 700,
            transform: 'scale(1, 1)',
            '&.number': {
                fontSize: '32px',
                transform: 'scale(1, 1)',
            },
        }),
        AchievementText: styled.div({
            fontWeight: 600,
            fontSize: '14px',
            transform: 'scale(1, 1)',
        }),
        size,
    };
};
