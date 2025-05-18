import styled from '@emotion/styled';
import useTheme from '@js/hooks/useTheme';
import useWindowSizeCheck from '@js/hooks/useWindowSizeCheck';

export default (type: 'big' | 'normal', disabled?: boolean) => {
    const size = useWindowSizeCheck();
    const { blueButton, mainWhite, avatarGray } = useTheme();
    return {
        Button: styled.button({
            pointerEvents: 'all',
            backgroundColor: disabled ? avatarGray : blueButton,
            padding: type == 'big' ? '2.5vh' : '1vh',
            color: mainWhite,
            borderRadius: 20,
        }),
        size,
    };
};
