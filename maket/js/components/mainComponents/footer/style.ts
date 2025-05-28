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

            backgroundColor: '#FFF1D2',
            padding: '0.5rem 2rem',
            '-webkit-tap-highlight-color': 'transparent',
        }),
        Item: styled.div({}),
        IconBox: styled.div({}),
        Icon: styled.div({}),
        ItemText: styled.div({}),
        size,
    };
};
