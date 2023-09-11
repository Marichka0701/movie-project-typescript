import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";
import MoviePage from "../pages/MoviePage/MoviePage";
import {MAIN_ROUTES} from "./main_routes";
import DetailedInfoMovieCard from "../components/DetailedInfoMovieCard/DetailedInfoMovieCard";
import NowPlayingMoviePage from "../pages/NowPlayingMoviePage/NowPlayingMoviePage";
import PopularMoviePage from "../pages/PopularMoviePage/PopularMoviePage";
import TopRatedMoviePage from "../pages/TopRatedMoviePage/TopRatedMoviePage";
import UpcomingMoviePage from "../pages/UpcomingMoviePage/UpcomingMoviePage";

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
                element: <MoviePage/>,
            },
            {
                path: MAIN_ROUTES.MOVIE_ID,
                element: <DetailedInfoMovieCard/>
            },
            {
                path: MAIN_ROUTES.NOW_PLAYING_MOVIE_PAGE,
                element: <NowPlayingMoviePage/>
            },
            {
                path: MAIN_ROUTES.POPULAR_MOVIE_PAGE,
                element: <PopularMoviePage/>
            },
            {
                path: MAIN_ROUTES.TOP_RATED_MOVIE_PAGE,
                element: <TopRatedMoviePage/>
            },
            {
                path: MAIN_ROUTES.UPCOMING_MOVIE,
                element: <UpcomingMoviePage/>
            }
        ]
    }
])
