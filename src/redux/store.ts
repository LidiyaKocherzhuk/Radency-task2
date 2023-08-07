import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {noteReducer} from "./slices/note.slice";
import {archiveReducer} from "./slices/archive.slice";
import {summaryReducer} from "./slices/summary.slice";

const rootReducer = combineReducers({
    noteReducer,
    archiveReducer,
    summaryReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore
}