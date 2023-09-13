import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";
import MoviePage from "../pages/MoviePage/MoviePage";
import {MAIN_ROUTES} from "./main_routes";
import DetailedInfoMovieCardPage from "../pages/DetailedInfoMovieCardPage/DetailedInfoMovieCardPage";
import NowPlayingMoviePage from "../pages/NowPlayingMoviePage/NowPlayingMoviePage";
import PopularMoviePage from "../pages/PopularMoviePage/PopularMoviePage";
import TopRatedMoviePage from "../pages/TopRatedMoviePage/TopRatedMoviePage";
import UpcomingMoviePage from "../pages/UpcomingMoviePage/UpcomingMoviePage";
import GenrePage from "../pages/GenrePage/GenrePage";
import MoviesByGenrePage from "../pages/MoviesByGenrePage/MoviesByGenrePage";
import CastCardPage from "../pages/CastCardPage/CastCardPage";

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
                path: MAIN_ROUTES.DETAILED_INFO_MOVIE_ID,
                element: <DetailedInfoMovieCardPage/>
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
            },
            {
                path: MAIN_ROUTES.GENRES,
                element: <GenrePage/>
            },
            {
                path: MAIN_ROUTES.MOVIES_BY_GENRE,
                element: <MoviesByGenrePage/>
            },
            {
                path: MAIN_ROUTES.DETAILED_INFO_PERSON_ID,
                element: <CastCardPage/>
            }
        ]
    }
])
