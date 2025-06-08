import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import styled from '@emotion/styled';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            borderRadius: '10px',

            display: 'flex',
            flexDirection: 'column',
        }),
        Image: styled.img({
            width: '100%',
            aspectRatio: '2.25/1',
            borderRadius: '10px 10px 0 0 ',
        }),
        TextBox: styled.div({
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35em',
            padding: '1em',

            flex: '0 1 auto',
            borderRadius: '0 0 10px 10px',
        }),
        TextBoxFull: styled.div({
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35em',
            padding: '1em',

            flex: '0 1 auto',
            borderRadius: '10px 10px 0 0',
        }),
        Title: styled.div({
            fontSize: '20px',
            transform: 'scale(1, 0.9)',
            fontWeight: 700,
            letterSpacing: '-0.43px',
        }),
        Text: styled.div({ fontSize: '14px', fontWeight: 600, letterSpacing: '-0.43px' }),
        MainContent: styled.div({ fontSize: '14px', fontWeight: 600, letterSpacing: '-0.43px' }),
        size,
    };
};
