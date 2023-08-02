import {FC} from 'react';
import { Outlet } from 'react-router-dom';

const NotePage: FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {NotePage};
