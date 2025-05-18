import { Tuser } from '@js/types/state/user';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { user: Tuser; token: string } = { user: null, token: '' };

const userState = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        setUser: (state, { payload }: { payload: Tuser }) => {
            state.user = payload;
        },
        setUserToken: (state, { payload }: { payload: string }) => {
            document.cookie = `usertoken=${payload}; path=/;`;
            state.token = payload;
        },
    },
});

export const { setUser, setUserToken } = userState.actions;

export default userState;
