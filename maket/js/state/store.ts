import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userState from './user/userState';
import allertState from './allert/allertState';

const rootReduser = combineReducers({
    [userState.name]: userState.reducer,
    [allertState.name]: allertState.reducer,
});

const store = configureStore({
    reducer: rootReduser,
});
export default store;

export type TrootState = ReturnType<typeof store.getState>;
export type TappDispatch = typeof store.dispatch;
