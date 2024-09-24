import SignUp from '../pages/SignUp/index.tsx';
import NotFound from '../pages/NotFound/index.tsx';
import AgendaActive from '../pages/AgendaActive/index.tsx'
import AgendaEnded from '../pages/AgendaEnded/index.tsx'
import Logs from '../pages/Logs/index.tsx'
import Users from '../pages/Users/index.tsx';
import UsersValidation from '../pages/UsersValidation/index.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function RoutesProvider() {
    const router = createBrowserRouter([
    {
        path: "/",
        element: <SignUp/>
    },
    {
        path: "/agenda-active",
        element: <AgendaActive/>
    },
    {
        path: "/agenda-ended",
        element: <AgendaEnded/>
    },
    {
        path: "/logs",
        element: <Logs/>
    },
    {
        path: "/user-validation",
        element: <UsersValidation/>
    },
    {
        path: "/users",
        element: <Users/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
    ])

    return(
        <RouterProvider router={router}/>
    )
}