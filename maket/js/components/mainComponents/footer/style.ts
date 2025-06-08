import styled from '@emotion/styled';
import useWindowSizeCheck from '@js/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            position: 'absolute',
            bottom: '0vh',
            left: '0',
            height: '5em',
            maxHeight: '5em',
            width: '100vw',
            minHeight: '5em',

            display: 'flex',
            justifyContent: 'space-between',

            backgroundColor: '#E3E3E3',
            padding: '0.5rem 2rem',
            WebkitTapHighlightColor: 'transparent',

            boxShadow: '0 0 5px 1px #00000010',
        }),
        Item: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: '0em',
            alignItems: 'center',
            justifyContent: 'center',

            color: '#6E777F',
            transition: '0.3s',

            '&.active': {
                color: '#000',
            },
        }),
        IconBox: styled.div({}),
        Icon: styled.div({ fontSize: '2.5em', color: 'inherit' }),
        ItemText: styled.div({
            fontWeight: 700,
            fontSize: '14px',
            color: 'inherit',
            letterSpacing: '-0.43px',
        }),
        size,
    };
};
