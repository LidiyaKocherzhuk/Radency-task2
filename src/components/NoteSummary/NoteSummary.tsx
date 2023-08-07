import {FC, useEffect} from 'react';

import './NoteSummary.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {sumCategory, sumData} from "../../redux/slices/summary.slice";
import {ISummary, ISummaryCategory} from "../../interfaces/summary.interface";

const NoteSummary: FC = () => {
    const {notes} = useAppSelector(state => state.noteReducer);
    const {archivedNotes} = useAppSelector(state => state.archiveReducer);
    const {summaryNotes, sumNoteRes, sumArchiveRes, categories} = useAppSelector(state => state.summaryReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(sumData({type: "notes", data: notes}));
        dispatch(sumData({type: "archive", data: archivedNotes}));
    }, [notes, archivedNotes]);

    useEffect(() => {
        dispatch(sumCategory({notesRes: sumNoteRes, archiveRes: sumArchiveRes}));
    },[sumNoteRes, sumArchiveRes])

    return (
        <div className={"notesSummary"}>

            <table className={"notesSummary-table"}>

                <thead>
                <tr className={"notesSummary-table-header"}>
                    <th>
                        name
                    </th>
                    <th>
                        active
                    </th>
                    <th>
                        archived
                    </th>
                </tr>
                </thead>

                <tbody>
                {
                    categories.map((item, index) => <tr key={index}>
                        <td>{item}</td>
                        <td>{summaryNotes[item as keyof ISummaryCategory<ISummary>].active}</td>
                        <td>{summaryNotes[item as keyof ISummaryCategory<ISummary>].archived}</td>
                    </tr>)
                }
                </tbody>

            </table>

        </div>
    );
};

export {NoteSummary};
