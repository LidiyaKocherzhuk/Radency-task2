import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {INote} from '../../interfaces';
import {ISummary, ISummaryCategory} from "../../interfaces/summary.interface";

interface IState {
    summaryNotes: ISummaryCategory<ISummary>,
    sumNoteRes: ISummaryCategory<number>,
    sumArchiveRes: ISummaryCategory<number>,
    categories: string[],
}

const initialState: IState = {
    sumNoteRes: {
        Task: 0,
        Random_Thought: 0,
        Idea: 0,
        Quote: 0,
    },
    sumArchiveRes: {
        Task: 0,
        Random_Thought: 0,
        Idea: 0,
        Quote: 0,
    },
    summaryNotes: {
        Task: {active: 0, archived: 0},
        Random_Thought: {active: 0, archived: 0},
        Idea: {active: 0, archived: 0},
        Quote: {active: 0, archived: 0},
    },
    categories: [
        "Task",
        "Random_Thought",
        "Idea",
        "Quote",
    ]
};

const summarySlice = createSlice({
    name: 'summarySlice',
    initialState,
    reducers: {
        sumData: (state, action: PayloadAction<{ type: string, data: INote[] }>) => {
            const stats = {} as ISummaryCategory<number>;

            action.payload.data.forEach((item) => {
                const category = item.category.replace(' ', '_') as keyof typeof stats;
                if (stats[category]) {
                    stats[category]++;
                } else {
                    stats[category] = 1;
                }
            });

            switch (action.payload.type) {
                case "notes":
                    state.sumNoteRes = stats;
                    break;
                case "archive":
                    state.sumArchiveRes = stats;
                    break;
            }
        },
        sumCategory: (
            state,
            action: PayloadAction<{
                notesRes: ISummaryCategory<number>
                archiveRes: ISummaryCategory<number>
            }>
        ) => {
            const {notesRes, archiveRes} = action.payload;

            const stats = {} as ISummaryCategory<ISummary>;

            for (const key in state.categories) {
                const category = state.categories[key];
                stats[category as keyof ISummaryCategory<number>] = {
                    active: notesRes[category as keyof ISummaryCategory<number>],
                    archived: archiveRes[category as keyof ISummaryCategory<number>],
                };
            }

            state.summaryNotes = stats;
        }
    },
});

const {reducer: summaryReducer} = summarySlice;
export const {sumData, sumCategory} = summarySlice.actions;

export {
    summaryReducer,
}
