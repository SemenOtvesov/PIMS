import { createSlice } from '@reduxjs/toolkit';

const initialState: { allert: string } = { allert: '' };

const allertState = createSlice({
    name: 'allertState',
    initialState,
    reducers: {
        setAllert: (state, { payload }: { payload: string }) => {
            state.allert = payload;
        },
    },
});

export const { setAllert } = allertState.actions;

export default allertState;
