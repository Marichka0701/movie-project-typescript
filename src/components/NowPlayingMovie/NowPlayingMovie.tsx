import React, {FC, PropsWithChildren, useEffect} from 'react';

import styles from './NowPlayingMovie.module.scss';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {movieActions} from "../../store/slices/movieSlice";
import {useAppSelector} from "../../hooks/useAppSelector";
import MovieSwiper from "../MovieSwiper/MovieSwiper";

interface IProps extends PropsWithChildren {

}

const NowPlayingMovie: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {nowPlayingMovies} = useAppSelector(state => state.movie);

    useEffect(() => {
        dispatch(movieActions.getNowPlayingMovies());
    }, [])

    return (
        <div className={styles.nowPlayingMovie}>
            <div className={styles.nowPlayingMovie_top}>
                <h1 className={styles.nowPlayingMovie_top_title}>Trending</h1>
                <button className={styles.nowPlayingMovie_top_button}>Show all</button>
            </div>
            <div>
                <MovieSwiper content={nowPlayingMovies}/>
            </div>
        </div>
    );
};

export default NowPlayingMovie;
