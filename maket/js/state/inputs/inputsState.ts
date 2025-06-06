import { createSlice } from '@reduxjs/toolkit';

const initialState: { searchUser: string } = { searchUser: '' };

const inputsState = createSlice({
    name: 'inputsState',
    initialState,
    reducers: {
        setSearchUser: (state, { payload }: { payload: string }) => {
            state.searchUser = payload;
        },
    },
});

export const { setSearchUser } = inputsState.actions;

export default inputsState;
