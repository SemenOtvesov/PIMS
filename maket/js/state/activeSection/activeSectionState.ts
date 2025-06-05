import { TNews } from '@js/types/state/news';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { section: 'news' | 'raiting' | 'profile'; activeNews: null | TNews } = {
    section: 'news',
    activeNews: null,
};

const activeSectionState = createSlice({
    name: 'activeSectionState',
    initialState,
    reducers: {
        setSection: (state, { payload }: { payload: 'news' | 'raiting' | 'profile' }) => {
            state.section = payload;
        },
        setActiveNews: (state, { payload }: { payload: TNews | null }) => {
            state.activeNews = payload;
        },
    },
});

export const { setSection, setActiveNews } = activeSectionState.actions;

export default activeSectionState;
