import styled from '@emotion/styled';
import { iOS } from '@js/components/mainComponents/fn/resize';
import useTheme from '@js/hooks/useTheme';
import useWindowSizeCheck from '@js/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    const {} = useTheme();
    const ios = iOS();
    return {
        Container: styled.div({
            position: 'sticky',
            top: '10vh',
            left: '0',
            height: 'calc(90vh - (5em + 1vh))',
            width: '100vw',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: ios ? 'start' : 'center',
            gap: '3vh',
        }),
        size,
    };
};
