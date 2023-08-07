import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {INote} from '../../interfaces';

interface IState {
    notes: INote[],
    note: INote | null,
    updateNote: INote | null,
    categories: string[],

}

const initialState: IState = {
    notes: [
        {
            "id": "0",
            "name": "Shopping list",
            "content": "tomato, onion",
            "category": "Task",
            "created": "Mon Jul 31 2023",
            "dates": "Mon Jul 31 2023"
        },
        {
            "id": "1",
            "name": "The theory of evolution",
            "content": "The evolution...",
            "category": "Random Thought",
            "created": "Mon Jul 31 2023",
            "dates": "Mon Jul 31 2023"

        },
        {
            "id": "2",
            "name": "New Feature",
            "content": "Implement new feature...",
            "category": "Idea",
            "created": "Mon Jul 31 2023",
            "dates": "Mon Jul 31 2023"
        },
        {
            "id": "3",
            "name": "Learn",
            "content": "Improvement english speaking...",
            "category": "Task",
            "created": "Mon Jul 31 2023",
            "dates": "Mon Jul 31 2023"
        },
        {
            "id": "4",
            "name": "Dentist",
            "content": "Go to the dentist",
            "category": "Task",
            "created": "Mon Jul 31 2023",
            "dates": "Mon Jul 31 2023"
        },
        {
            "id": "5",
            "name": "William Gaddis",
            "content": "Power doesn't co...",
            "category": "Quote",
            "created": "Mon Jul 31 2023",
            "dates": "Mon Jul 31 2023"
        },
        {
            "id": "6",
            "name": "Books",
            "content": "Read mew book",
            "category": "Task",
            "created": "Mon Jul 31 2023",
            "dates": "Mon Jul 31 2023"
        }
    ],
    note: null,
    updateNote: null,
    categories: [
        "Task",
        "Random Thought",
        "Idea",
        "Quote",
    ]
};

const noteSlice = createSlice({
    name: 'noteSlice',
    initialState,
    reducers: {
        setNote: (state, action: PayloadAction<INote>) => {
            state.note = action.payload;
        },
        setUpdateNote: (state, action: PayloadAction<INote | null>) => {
            state.updateNote = action.payload;
        },
        createNote: (state, action: PayloadAction<INote>) => {
            state.notes.push(action.payload);
        },
        update: (state, action: PayloadAction<INote>) => {
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }
                return note;
            });
            state.updateNote = null;
        },
        deleteNote: (state, action: PayloadAction<{ id: string }>) => {
            state.notes = state.notes.filter(note => note.id !== action.payload.id);
        }
    },
});

const {reducer: noteReducer} = noteSlice;
export const {setNote, setUpdateNote, createNote, update, deleteNote} = noteSlice.actions;

export {
    noteReducer,
}
