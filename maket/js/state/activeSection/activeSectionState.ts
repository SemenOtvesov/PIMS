import { Tuser } from '@js/types/state/user';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { section: 'news' | 'raiting' | 'profile' } = { section: 'news' };

const activeSectionState = createSlice({
    name: 'activeSectionState',
    initialState,
    reducers: {
        setSection: (state, { payload }: { payload: 'news' | 'raiting' | 'profile' }) => {
            state.section = payload;
        },
    },
});

export const { setSection } = activeSectionState.actions;

export default activeSectionState;
