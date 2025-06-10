import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import styled from '@emotion/styled';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            padding: '38px 1em 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            maxHeight: 'calc(100vh - 80px)',
            position: 'relative',
        }),
        BackCircle: styled.div({
            position: 'absolute',
            width: '150%',
            aspectRatio: 1 / 1,
            top: '0',
            left: '50%',
            transform: 'translate(-50%, 10%)',
            borderRadius: '50%',
            filter: 'blur(50px)',
            backgroundColor: '#FFF2D395',
            zIndex: 0,
        }),
        Title: styled.div({
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '40px',
            zIndex: 1,
            transform: 'scale(1, 0.857)',
        }),
        Main: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
            overflow: 'auto',
            zIndex: 1,
            borderRadius: 10,
        }),
        ImageAbsolute: styled.div({
            position: 'fixed',
            height: '1em',
        }),
        size,
    };
};
