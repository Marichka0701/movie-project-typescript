import React, {FC, PropsWithChildren} from 'react';

import styles from './MoviePage.module.scss';
import NowPlayingMovie from "../../components/NowPlayingMovie/NowPlayingMovie";
import PopularMovie from "../../components/PopularMovie/PopularMovie";
import TopRatedMovie from "../../components/TopRatedMovie/TopRatedMovie";
import UpcomingMovie from "../../components/UpcomingMovie/UpcomingMovie";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTES} from "../../routing/main_routes";
import ErrorPage from "../ErrorPage/ErrorPage";

interface IProps extends PropsWithChildren {

}

const MoviePage: FC<IProps> = () => {
    const {movieMainPage, error} = useAppSelector(state => state.movie);
    const {theme} = useAppSelector(state => state.UI);
    const navigate = useNavigate();

    const handleNavigateToDetailedInfo = () => {
        navigate(`${MAIN_ROUTES.MOVIES}/${movieMainPage?.id}`);
    }

    if (error) {
        return <ErrorPage/>
    }

    return (
        <>
            <div className={styles.movieMainPage}>
                <div
                    onClick={handleNavigateToDetailedInfo}
                    className={styles.movieMainPage_poster}
                >
                    {
                        movieMainPage?.backdrop_path &&
                        <img
                            src={`${process.env.REACT_APP_IMAGE_URL}/${movieMainPage?.backdrop_path}`}
                            alt={movieMainPage?.title}
                        />
                    }
                </div>

                <div className={styles.movieMainPage_info}>
                    <h2>{movieMainPage?.title}</h2>
                    <p>{movieMainPage?.overview}</p>
                </div>
            </div>
            <div className={`${styles.swipers} ${theme === 'light' ? styles.light : styles.night}`}>
                <NowPlayingMovie/>
                <PopularMovie/>
                <TopRatedMovie/>
                <UpcomingMovie/>
            </div>
        </>
    );
};

export default MoviePage;
