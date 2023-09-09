import React, {FC, PropsWithChildren, useEffect} from 'react';

import styles from './TopRatedMovie.module.scss';
import MovieSwiper from "../MovieSwiper/MovieSwiper";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {movieActions} from "../../store/slices/movieSlice";

interface IProps extends PropsWithChildren {

}

const TopRatedMovie: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {topRatedMovies} = useAppSelector(state => state.movie);

    useEffect(() => {
        dispatch(movieActions.getTopRatedMovies());
    }, [])

    return (
        <div className={styles.topRatedMovie}>
            <div className={styles.topRatedMovie_top}>
                <h1 className={styles.topRatedMovie_top_title}>Top Rated</h1>
                <button className={styles.topRatedMovie_top_button}>Show all</button>
            </div>
            <div>
                <MovieSwiper content={topRatedMovies}/>
            </div>
        </div>
    );
};

export default TopRatedMovie;
