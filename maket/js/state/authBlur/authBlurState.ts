import { TNews } from '@js/types/state/news';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { blur: boolean } = {
    blur: false,
};

const authBlurState = createSlice({
    name: 'authBlurState',
    initialState,
    reducers: {
        setAuthBlur: (state, { payload }: { payload: boolean }) => {
            state.blur = payload;
        },
    },
});

export const { setAuthBlur } = authBlurState.actions;

export default authBlurState;
