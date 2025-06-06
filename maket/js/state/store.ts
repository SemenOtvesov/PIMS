import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userState from './user/userState';
import allertState from './allert/allertState';
import adminState from './admin/adminState';
import activeSectionState from './activeSection/activeSectionState';
import { adminApi } from '@js/api/admin/indexQuery';
import { userApi } from '@js/api/user/indexQuery';
import authBlurState from './authBlur/authBlurState';
import inputsState from './inputs/inputsState';

const rootReduser = combineReducers({
    [userState.name]: userState.reducer,
    [allertState.name]: allertState.reducer,
    [adminState.name]: adminState.reducer,
    [activeSectionState.name]: activeSectionState.reducer,
    [authBlurState.name]: authBlurState.reducer,
    [inputsState.name]: inputsState.reducer,

    [adminApi.reducerPath]: adminApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
});

const store = configureStore(
    {
        reducer: rootReduser,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(adminApi.middleware, userApi.middleware),
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;

export type TrootState = ReturnType<typeof store.getState>;
export type TappDispatch = typeof store.dispatch;
