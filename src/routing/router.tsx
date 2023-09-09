import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";
import MoviePage from "../pages/MoviePage/MoviePage";
import {MAIN_ROUTES} from "./main_routes";

export const router = createBrowserRouter([
    {
        index: true,
        element: <Navigate to={MAIN_ROUTES.MOVIES}/>,
    },
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                path: MAIN_ROUTES.MOVIES,
                element: <MoviePage/>
            }
        ]
    }
])
