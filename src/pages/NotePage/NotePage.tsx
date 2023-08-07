import {FC} from 'react';
import { Outlet } from 'react-router-dom';

import {NoteList, NoteSummary} from "../../components";
import {useAppSelector} from "../../hooks";

const NotePage: FC = () => {
    const {notes} = useAppSelector(state => state.noteReducer);

    return (
        <div className={'note-page'}>
            <NoteList notes={notes} archive={false}/>
            <NoteSummary/>
            <Outlet/>
        </div>
    );
};

export {NotePage};
