import { createSlice } from '@reduxjs/toolkit';

const initialState: { searchUser: string; searchLocation: string } = {
    searchUser: '',
    searchLocation: '',
};

const inputsState = createSlice({
    name: 'inputsState',
    initialState,
    reducers: {
        setSearchUser: (state, { payload }: { payload: string }) => {
            state.searchUser = payload;
        },
        setSearchLocation: (state, { payload }: { payload: string }) => {
            state.searchLocation = payload;
        },
    },
});

export const { setSearchUser, setSearchLocation } = inputsState.actions;

export default inputsState;
