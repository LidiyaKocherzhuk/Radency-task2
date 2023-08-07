import {FC} from 'react';
import {NavLink, Outlet} from 'react-router-dom';

import './MainLayout.css';

const MainLayout: FC = () => {
    return (
        <div>
            <div className={'header'}>
                <NavLink to={'notes'}>Notes</NavLink>
                <NavLink to={'notes-archive'}>Archive</NavLink>
            </div>

            <Outlet/>
        </div>
    );
};

export {MainLayout};