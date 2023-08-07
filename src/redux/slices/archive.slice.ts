import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {INote} from '../../interfaces';

interface IState {
    archivedNotes: INote[],
}

const initialState: IState = {
    archivedNotes: [],
};

const archiveSlice = createSlice({
    name: 'archiveSlice',
    initialState,
    reducers: {
        setToArchive: (state, action: PayloadAction<INote>) => {
            state.archivedNotes.push(action.payload);
        },
        unArchive: (state, action: PayloadAction<{id: string}>) => {
            state.archivedNotes = state.archivedNotes.filter(note => note.id !== action.payload.id);
        }
    },
});

const {reducer: archiveReducer} = archiveSlice;
export const {setToArchive, unArchive} = archiveSlice.actions;

export {
    archiveReducer,
}
