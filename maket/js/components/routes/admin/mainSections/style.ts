import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import styled from '@emotion/styled';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({ display: 'flex', flexDirection: 'column', gap: '5em' }),
        Item: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
        }),
        ItemTitle: styled.div({}),
        CardList: styled.div({
            display: 'flex',
            gap: 'calc((80vw - 19vw * 4) / 3)',

            flexWrap: 'wrap',
            justifyContent: 'space-between',
        }),
        FromWrapper: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
            width: '40vw',
        }),
        FormLoginBox: styled.div({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100vh',
        }),
        size,
    };
};
