import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import styled from '@emotion/styled';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            borderRadius: '10px',
            overflow: 'hidden',
            minHeight: 'fit-content',
        }),
        TextBox: styled.div({
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25em',
            padding: '0.6em 1em',
            minHeight: '49px',
            height: 'fit-content',
        }),
        TitleNum: styled.span({
            fontSize: '20px',
            transform: 'scale(1, 0.85)',
            fontWeight: 600,
            letterSpacing: '0.43px',
        }),
        Title: styled.div({
            fontSize: '20px',
            transform: 'scale(1, 0.85)',
            fontWeight: 600,
            letterSpacing: '-0.43px',
        }),
        Text: styled.div({
            fontSize: '13px',
            letterSpacing: '-0.43px',
            transition: '0.3s',
            fontWeight: 600,
            transform: 'scale(1, 1.07)',
            '&.hide': {
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                height: '1em',
            },
            '&.open': { height: 'fit-content', minHeight: '1em' },
        }),
        MainContent: styled.div({ fontSize: '0.875em' }),
        size,
    };
};
