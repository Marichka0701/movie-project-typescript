import React, {FC, PropsWithChildren, useEffect} from 'react';

import styles from './NowPlayingMovie.module.scss';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {movieActions} from "../../store/slices/movieSlice";
import {useAppSelector} from "../../hooks/useAppSelector";
import AppSwiper from "../AppSwiper/AppSwiper";
import {MAIN_ROUTES} from "../../routing/main_routes";
import Button from "../UI/Button/Button";

interface IProps extends PropsWithChildren {

}

const NowPlayingMovie: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {nowPlayingMovies} = useAppSelector(state => state.movie);

    useEffect(() => {
        dispatch(movieActions.getNowPlayingMovies({page: 1}));
    }, [])

    return (
        <div className={styles.nowPlayingMovie}>
            <div className={styles.nowPlayingMovie_top}>
                <h1 className={styles.nowPlayingMovie_top_title}>Trending</h1>
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
