import { createSlice } from '@reduxjs/toolkit';

const initialState: { token: string } = { token: '' };

const userState = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        setUserToken: (state, { payload }: { payload: string }) => {
            document.cookie = `usertoken=${payload}; path=/;`;
            state.token = payload;
        },
    },
});

export const { setUserToken } = userState.actions;

export default userState;
