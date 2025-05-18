import styled from '@emotion/styled';
import useTheme from '@js/hooks/useTheme';
import useWindowSizeCheck from '@js/hooks/useWindowSizeCheck';
import { motion } from 'framer-motion';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            height: '10vh',
            width: '100vw',
            position: 'sticky',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1.25em',
            minHeight: '5em',
            zIndex: 100,
        }),
        Avatar: styled.img({
            width: '13vw',
            height: '13vw',
            borderRadius: '50%',
            backgroundColor: '',
        }),
        Name: styled.div({
            color: '',
            fontSize: '1em',
            fontWeight: 700,
        }),
        AvatarBox: styled.div({ display: 'flex', alignItems: 'center', gap: '1em' }),
        BalanceBox: styled.div({
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'center',
            gap: '.6em',
        }),
        BalanceText: styled.div({}),
        BalanceValue: styled.div({
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            justifyContent: 'center',
            gap: '0.5em',
        }),
        BalanceIcon: styled.img({
            width: '2.5em',
            top: 0,
            left: 0,
            transform: 'scale(0.5) translate(-50%, -50%)',
            position: 'absolute',
        }),
        BalanceIconBox: styled.div({
            position: 'relative',
            width: '1.25em',
            height: '1.25em',
        }),
        Lang: styled.div({
            width: '1.25em',
            position: 'relative',
        }),
        LangPopap: styled(motion.div)({
            position: 'absolute',
            width: '8em',
            zIndex: 100,
            top: '150%',
            left: '50%',
            transform: 'translate(-80%)',
            padding: '1em',
            backgroundColor: '',
            borderRadius: 10,
            border: `2px solid ${''}`,

            display: 'flex',
            flexDirection: 'column',
            gap: '0.25em',
        }),
        LangPopapItem: styled.div({}),
        size,
    };
};
