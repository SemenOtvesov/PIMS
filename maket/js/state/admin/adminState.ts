import { Tlocation } from '@js/types/state/location';
import { Tuser } from '@js/types/state/user';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { locations: Tlocation[]; token: string } = { locations: [], token: '' };

const adminState = createSlice({
    name: 'adminState',
    initialState,
    reducers: {
        setAdminToken: (state, { payload }: { payload: string }) => {
            document.cookie = `adminToken=${payload}; path=/;`;
            state.token = payload;
        },
        setAdminLocation: (state, { payload }: { payload: Tlocation[] }) => {
            state.locations = payload;
        },
    },
});

export const { setAdminToken, setAdminLocation } = adminState.actions;

export default adminState;
