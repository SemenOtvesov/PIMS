import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import styled from '@emotion/styled';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            borderRadius: '10px',
            overflow: 'hidden',
            minHeight: 'fit-content',
            height: 'fit-content',
        }),
        Image: styled.img({
            width: '100%',
            aspectRatio: '2.25/1',
        }),
        TextBox: styled.div({
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25em',
            padding: '1em',
        }),
        Title: styled.div({ fontSize: '1.25em', fontWeight: 600 }),
        Text: styled.div({ fontSize: '0.875em' }),
        MainContent: styled.div({ fontSize: '0.875em' }),
        size,
    };
};
