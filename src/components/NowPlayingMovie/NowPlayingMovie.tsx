import React, {FC, PropsWithChildren, useEffect} from 'react';

import styles from './NowPlayingMovie.module.scss';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {movieActions} from "../../store/slices/movieSlice";
import {useAppSelector} from "../../hooks/useAppSelector";
import AppSwiper from "../AppSwiper/AppSwiper";
import {MAIN_ROUTES} from "../../routing/main_routes";
import Button from "../UI/Button/Button";
import Loader from "../Loader/Loader";

interface IProps extends PropsWithChildren {

}

const NowPlayingMovie: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {nowPlayingMovies, status} = useAppSelector(state => state.movie);
    const {theme} = useAppSelector(state => state.UI);

    useEffect(() => {
        dispatch(movieActions.getNowPlayingMovies({page: 1}));
    }, [])

    if (status === 'loading') {
        return <Loader/>
    }

    return (
        <div className={styles.nowPlayingMovie}>
            <div className={`${styles.nowPlayingMovie_top} ${theme === 'light' ? styles.light : styles.night}`}>
                <h1 className={`${styles.nowPlayingMovie_top_title} ${theme === 'light' ? styles.light : styles.night}`}>Trending</h1>
                <Button
                    title={'Show all'}
                    path={MAIN_ROUTES.NOW_PLAYING_MOVIE_PAGE}
                ></Button>
            </div>

            <div>
                <AppSwiper card={'movie'} content={nowPlayingMovies}/>
            </div>
        </div>
    );
};

export default NowPlayingMovie;
