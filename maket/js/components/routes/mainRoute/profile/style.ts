import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import styled from '@emotion/styled';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            padding: '3.5em 1em 5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyItems: 'center',
            gap: '1em',
            height: 'calc(100vh - 80px)',
            maxHeight: 'calc(100vh - 80px)',
            position: 'relative',

            overflow: 'auto',
        }),
        AvatarBox: styled.div({ position: 'relative' }),
        BackCircle: styled.div({
            position: 'absolute',
            width: '100%',
            aspectRatio: 1.25 / 1,
            top: '0',
            left: '50%',
            transform: 'translate(-50%, 10%)',
            borderRadius: '50%',
            filter: 'blur(70px)',
            backgroundColor: '#FFF2D395',
            zIndex: 0,
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
            transform: 'scale(1, 1.07)',
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
