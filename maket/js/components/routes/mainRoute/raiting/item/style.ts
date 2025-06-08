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
            padding: '0.5em 1em',
        }),
        TitleNum: styled.span({ fontSize: '1.25em', fontWeight: 600, letterSpacing: '0.43px' }),
        Title: styled.div({ fontSize: '1.25em', fontWeight: 600, letterSpacing: '-0.43px' }),
        Text: styled.div({
            fontSize: '13px',
            letterSpacing: '-0.43px',
            transition: '0.3s',
            fontWeight: 700,
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
