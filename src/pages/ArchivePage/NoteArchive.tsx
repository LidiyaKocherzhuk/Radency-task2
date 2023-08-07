import {FC} from 'react';
import {Outlet} from 'react-router-dom';

import './NoteArchive.css';
import {NoteList} from "../../components";
import {useAppSelector} from "../../hooks";

const NoteArchive: FC = () => {
    const {archivedNotes} = useAppSelector(state => state.archiveReducer);

    return (
        <div>
            {archivedNotes.length
                ? <NoteList notes={archivedNotes} archive={true}/>
                : <h2>Archive is empty!</h2>}
            <Outlet/>
        </div>
    );
};

export {NoteArchive};
