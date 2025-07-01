import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import styled from '@emotion/styled';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            borderRadius: '10px',
            overflow: 'hidden',
        }),
        TextBox: styled.div({
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1',
            gap: '4px',
            padding: '10px 20px 8px',
        }),
        TitleNum: styled.span({
            fontSize: '20px',
            transform: 'scale(1, 0.85)',
            fontWeight: 600,
            letterSpacing: '0.43px',
        }),
        Title: styled.div({
            fontSize: '20px',
            transform: 'scale(1, 0.9)',
            fontWeight: 600,
            letterSpacing: '-0.43px',
        }),
        Text: styled.div({
            fontSize: '16px',
            letterSpacing: '-0.43px',
            transition: '0.3s',
            fontWeight: 600,
            transform: 'scale(1, 0.78)',
            '&.hide': {
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
            },
            '&.open': { height: 'inherit', minHeight: '1em' },
        }),
        MainContent: styled.div({ fontSize: '0.875em' }),
        size,
    };
};
