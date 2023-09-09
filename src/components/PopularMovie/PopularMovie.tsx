import React, {FC, PropsWithChildren, useEffect} from 'react';

import styles from './PopularMovie.module.scss';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {movieActions} from "../../store/slices/movieSlice";
import MovieSwiper from "../MovieSwiper/MovieSwiper";

interface IProps extends PropsWithChildren {

}

const PopularMovie: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {popularMovies} = useAppSelector(state => state.movie);

    useEffect(() => {
        dispatch(movieActions.getPopularMovies());
    }, [])

    return (
        <div className={styles.popularMovie}>
            <div className={styles.popularMovie_top}>
                <h1 className={styles.popularMovie_top_title}>What's Popular</h1>
                <button className={styles.popularMovie_top_button}>Show all</button>
            </div>
            <div>
                <MovieSwiper content={popularMovies}/>
            </div>
        </div>
    );
};

export default PopularMovie;
