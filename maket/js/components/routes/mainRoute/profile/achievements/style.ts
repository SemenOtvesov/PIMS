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
            zIndex: '2',
            width: '100%',

            minWidth: 'calc(100vw - 2em)',
        }),
        Title: styled.div({
            fontSize: '28px',
            fontWeight: 700,
            textAlign: 'center',
            transform: 'scale(1, 1)',
            letterSpacing: '-0.43px',
        }),
        Main: styled.div({
            display: 'grid',
            gridTemplateRows: 'repeat(2, calc((100vw - 50px) / 3))',
            gridAutoColumns: 'calc((100vw - 50px) / 3)',
            gridAutoFlow: 'column',
            gap: '5px',

            // Горизонтальная прокрутка
            overflowX: 'auto',
            overflowY: 'hidden',

            // Защита для теней (подбирайте padding под размер ваших теней)
            padding: '50px',
            margin: '-50px',

            // Скрытие скроллбара (опционально)
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none',
            },

            // Фиксируем ширину
            width: 'calc(100vw + 50px)',
            boxSizing: 'border-box',
        }),
        Achievement: styled.div({
            width: 'calc((100vw - 50px) / 3)',
            minWidth: 'calc((100vw - 50px) / 3)',
            aspectRatio: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '1em',

            boxShadow: '0 14px 50px 0 #42424220',

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
                background:
                    'linear-gradient(180deg,rgba(252, 185, 167, 1) 50%, rgba(252, 185, 167, 1) 50%)',
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
            transform: 'scale(1.1, 1)',
            letterSpacing: '0.025px',
            lineHeight: '1em',
        }),
        size,
    };
};
