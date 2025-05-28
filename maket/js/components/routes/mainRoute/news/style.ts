import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import styled from '@emotion/styled';

export default () => {
    const size = useWindowSizeCheck();
    return { Container: styled.div({}), Title: styled.div({}), Main: styled.div({}), size };
};
