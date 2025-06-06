import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import styled from '@emotion/styled';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            padding: '2.5em 1em 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5em',
            maxHeight: 'calc(100vh - 80px)',
            position: 'relative',
        }),
        BackCircle: styled.div({
            position: 'absolute',
            width: '100%',
            aspectRatio: 2 / 1,
            top: '0',
            left: '50%',
            transform: 'translate(-50%, 40%)',
            borderRadius: '50%',
            filter: 'blur(70px)',
            backgroundColor: '#FFF2D3',
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
            gap: '5px',
            overflow: 'auto',
            zIndex: 1,
            borderRadius: 10,
        }),
        ImageAbsolute: styled.img({
            position: 'fixed',
            height: '1em',
        }),
        size,
    };
};
