import {FC} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import './App.css';
import {MainLayout} from './layouts';
import {NoteArchive, NotePage} from './pages';

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'notes'}/>}/>
                <Route path={'notes'} element={<NotePage/>}>
                </Route>
                <Route path={'notes-archive'} element={<NoteArchive/>}/>
            </Route>
        </Routes>
    );
};

export {App};