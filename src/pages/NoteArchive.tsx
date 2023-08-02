import {FC} from 'react';
import {Outlet} from 'react-router-dom';

const NoteArchive: FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {NoteArchive};
