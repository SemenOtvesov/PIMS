import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userState from './user/userState';
import allertState from './allert/allertState';
import adminState from './admin/adminState';
import activeSectionState from './activeSection/activeSectionState';

const rootReduser = combineReducers({
    [userState.name]: userState.reducer,
    [allertState.name]: allertState.reducer,
    [adminState.name]: adminState.reducer,
    [activeSectionState.name]: activeSectionState.reducer,
});

const store = configureStore(
    {
        reducer: rootReduser,
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;

export type TrootState = ReturnType<typeof store.getState>;
export type TappDispatch = typeof store.dispatch;
