import {FC} from 'react';
import {BsFillTrash3Fill} from "react-icons/bs";
import {IoArchiveSharp} from "react-icons/io5";
import {BiSolidPencil} from "react-icons/bi";
import {MdUnarchive} from "react-icons/md";

import {INote} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {
    deleteNote,
    setToArchive,
    unArchive, createNote, setUpdateNote
} from "../../redux";

interface IProps {
    note: INote;
    archive: boolean;
    index: number;
}

const Note: FC<IProps> = ({note, archive,  index}) => {
    const {id, name, content, created, dates, category } = note;
    const dispatch = useAppDispatch();

    const updateNote = (note: INote) => {
        dispatch(setUpdateNote(note));
        const creteForm = document.getElementsByClassName("note-form")[0];
        creteForm.classList.toggle("note-form-show");
    };

    const archiveNote = (note: INote) => {
        dispatch(deleteNote({id: note.id}));
        dispatch(setToArchive(note));
    };

    const unArchiveNote = (note: INote) => {
        dispatch(unArchive({id: note.id}));
        dispatch(createNote(note));
    };

    return (
        <>
            <tr key={id}>

                <td>
                    {index + 1}
                </td>
                <td>
                    {name}
                </td>
                <td>
                    {content}
                </td>
                <td>
                    {category}
                </td>
                <td>
                    {created}
                </td>
                <td>
                    {dates}
                </td>

                {!archive

                    ? <>
                        <td onClick={() => updateNote(note)}>
                            <BiSolidPencil/>
                        </td>
                        <td onClick={() => archiveNote(note)}>
                            <IoArchiveSharp/>
                        </td>
                        <td onClick={() => dispatch(deleteNote(note))}>
                            <BsFillTrash3Fill/>
                        </td>
                    </>

                    : <>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td onClick={() => unArchiveNote(note)}>
                            <MdUnarchive/>
                        </td>
                    </>
                }

            </tr>

        </>
    );
};

export {Note};
