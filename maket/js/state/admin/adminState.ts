import { Tlocation } from '@js/types/state/location';
import { TNews } from '@js/types/state/news';
import { Tuser } from '@js/types/state/user';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { locations: Tlocation[]; token: string; listNews: Array<TNews> } = {
    locations: [],
    token: '',
    listNews: [],
};

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
        setAdminNewsList: (state, { payload }: { payload: Array<TNews> }) => {
            state.listNews = payload;
        },
    },
});

export const { setAdminToken, setAdminLocation, setAdminNewsList } = adminState.actions;

export default adminState;
