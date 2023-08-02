import {FC} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {MainLayout} from './layouts';
import {NoteArchive, NotePage} from './pages';
// import {CarDetails} from './components';

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'notes'}/>}/>
                <Route path={'notes'} element={<NotePage/>}>
                    {/*<Route path={':id'} element={<CarDetails/>}/>*/}

                </Route>
                <Route path={'notes-archive'} element={<NoteArchive/>}/>
            </Route>
        </Routes>
    );
};

export {App};