import {FC} from 'react';
import {IoArchiveSharp} from "react-icons/io5";
import {BsFillTrash3Fill} from "react-icons/bs";

import './NoteList.css';
import {Note} from "../Note/Note";
import {INote} from "../../interfaces";
import {MdUnarchive} from "react-icons/md";
import {NoteForm} from "../NoteForm/NoteForm";

interface IProps {
    notes: INote[];
    archive: boolean;
}

const NoteList: FC<IProps> = ({notes, archive}) => {

    function createNote() {
        const creteForm = document.getElementsByClassName("note-form")[0];
        creteForm.classList.toggle("note-form-show");
    }

    return (
        <div className={"notes"}>
            <table className={"notes-table"}>

                <thead>
                <tr className={"notes-table-header"}>
                    <th>
                    </th>
                    <th>
                        name
                    </th>
                    <th>
                        content
                    </th>
                    <th>
                        category
                    </th>
                    <th>
                        created
                    </th>
                    <th>
                        dates
                    </th>
                    <th>
                    </th>
                    {archive
                        ? <>
                            <th>
                                <IoArchiveSharp/>
                            </th>
                            <th>
                                <BsFillTrash3Fill/>
                            </th>
                        </>
                        : <>
                            <th>
                            </th>
                            <th>
                                <MdUnarchive/>
                            </th>
                        </>}
                </tr>
                </thead>

                <tbody>

                {
                    notes.map((note: INote, index) => <Note
                        key={note.id}
                        note={note}
                        archive={archive}
                        index={index}
                    />)
                }

                </tbody>

            </table>

            {!archive && <div className={"btn"}>
              <button onClick={createNote}>Create Note</button>
            </div>}

            <NoteForm/>

        </div>
    );
};

export {NoteList};
