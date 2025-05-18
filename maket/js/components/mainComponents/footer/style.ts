import styled from '@emotion/styled';
import useWindowSizeCheck from '@js/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            position: 'sticky',
            bottom: '1vh',
            left: '0',
            margin: '0 5vw',
            height: '5em',
            maxHeight: '5em',
            width: '90vw',
            minHeight: '5em',

            display: 'flex',
            justifyContent: 'space-between',

            padding: '1em 2em',
            borderRadius: 20,
            backgroundColor: '',
            '-webkit-tap-highlight-color': 'transparent',
        }),
        size,
    };
};
