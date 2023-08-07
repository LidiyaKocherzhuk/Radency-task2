import {FC, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {GrClose} from "react-icons/gr";
import { v4 as uuid } from 'uuid';

import './NoteForm.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {createNote, setUpdateNote, update} from "../../redux";
import {INote} from "../../interfaces";

const NoteForm: FC = () => {
    const {register, handleSubmit, reset, setValue} = useForm<INote>();
    let date = new Date().toDateString();
    let id = uuid();

    const {updateNote, categories} = useAppSelector(state => state.noteReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (updateNote) {
            const {name, content, category, dates} = updateNote;

            setValue('name', name);
            setValue('content', content)
            setValue('category', category)
            setValue('dates', dates)
        }
    }, [updateNote]);


    const close = () => {
        const creteForm = document.getElementsByClassName("note-form")[0];
        creteForm.classList.toggle("note-form-show");
        dispatch(setUpdateNote(null));
        reset();
    }

    const getFormData = (data: INote) => {
        if (!updateNote) {
            dispatch(createNote({...data, id, created: date, dates: date}));
        } else {
            let dates = updateNote.dates;

            if (updateNote.dates) {
                dates = data.dates?.split(',').includes(updateNote.dates)
                    ? data.dates
                    : `${data.dates},${updateNote.dates}`;
            }

            dispatch(update({...updateNote, ...data, dates}));
        }

        reset();
        close();
    };

    return (
        <div className={"note-form"}>
            <h2>{updateNote ? "Update Note" : "New Note"}</h2>
            <hr/>

            <form onSubmit={handleSubmit(getFormData)}>
                <label>Name <input type="text" {...register("name")}/></label>
                <label>Content <input type="text" {...register("content")}/></label>
                <label>Category <select{...register("category")}>
                    {
                        categories.map((item, index) => <option key={index} value={item}>{item}</option>)
                    }
                </select></label>

                {updateNote &&
                <label>Dates
                  <input type="text" {...register("dates")}/>
                </label>
                }

                <button>{updateNote ? "Update" : "Create"}</button>
                <GrClose className={"close-btn"} onClick={close}/>
            </form>
        </div>
    );
};

export {NoteForm};
