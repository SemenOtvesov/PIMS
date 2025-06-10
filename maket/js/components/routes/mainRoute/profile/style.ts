import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import styled from '@emotion/styled';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            padding: '3.5em 0 5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyItems: 'center',
            gap: '1em',
            height: 'calc(100vh - 80px)',
            maxHeight: 'calc(100vh - 80px)',
            position: 'relative',

            overflowY: 'auto',
            overflowX: 'hidden',
        }),
        AvatarBox: styled.div({ position: 'relative' }),
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
        Avatar: styled.img({
            width: '30vw',
            minWidth: '30vw',
            minHeight: '30vw',
            aspectRatio: 1,
            zIndex: 1,
            boxShadow: '0 0 3px 1px #00000010',
            borderRadius: '50%',
            overflow: 'hidden',
        }),
        UserName: styled.div({
            zIndex: 1,
            fontSize: '30px',
            fontWeight: 600,
            textAlign: 'center',
            transform: 'scale(1, 0.866)',
            letterSpacing: '-0.43px',
        }),
        Phone: styled.div({
            zIndex: 1,
            fontSize: '26px',
            fontWeight: 600,
            textAlign: 'center',
            transform: 'scale(1, 0.866)',
            letterSpacing: '-0.43px',
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
