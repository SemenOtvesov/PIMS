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
            paddingBottom: '5em',

            overscrollBehavior: 'contain',
        }),
        BackCircle: styled.div({
            position: 'absolute',
            width: '115.5vw',
            height: '43.5vh',
            top: '6vh',
            left: '50%',
            transform: 'translate(-50%, 0)',

            zIndex: 0,
        }),
        BackCircleMain: styled.div({
            width: '100%',
            height: '100%',
            position: 'relative',
        }),
        BackCircleYellow: styled.div({
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translate(-50%, 0)',

            width: '100%',
            height: '90%',
            backgroundColor: '#FFF2D3',
            filter: 'blur(100px)',
            borderRadius: '50%',
        }),
        BackCircleGray: styled.div({
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translate(-50%, 0)',

            width: '60%',
            height: '47%',
            backgroundColor: '#FFD08A',
            filter: 'blur(300px)',
            borderRadius: '50%',
        }),
        Title: styled.div({
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '40px',
            zIndex: 1,
            transform: 'scale(1, 0.857)',
        }),
        Main: styled.div({
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            overflow: 'auto',
            minHeight: 'calc(100vh - 80px - 8em );',
            height: 'calc(100vh - 80px - 8em );',

            zIndex: 1,
            borderRadius: 10,
        }),
        ImageAbsolute: styled.img({
            position: 'fixed',
            height: '1em',
        }),
        ImageAbsoluteDiv: styled.div({
            position: 'fixed',
            height: '1em',
        }),
        size,
    };
};
