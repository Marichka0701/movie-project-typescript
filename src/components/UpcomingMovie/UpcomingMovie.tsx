import React, {FC, PropsWithChildren, useEffect} from 'react';

import styles from './UpcomingMovie.module.scss';
import MovieSwiper from "../MovieSwiper/MovieSwiper";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {movieActions} from "../../store/slices/movieSlice";

interface IProps extends PropsWithChildren {

}

const UpcomingMovie: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {upcomingMovies} = useAppSelector(state => state.movie);

    useEffect(() => {
        dispatch(movieActions.getUpcomingMovies());
    }, [])

    return (
        <div className={styles.upcomingMovie}>
            <div className={styles.upcomingMovie_top}>
                <h1 className={styles.upcomingMovie_top_title}>Upcoming</h1>
                <button className={styles.upcomingMovie_top_button}>Show all</button>
            </div>
            <div>
                <MovieSwiper content={upcomingMovies}/>
            </div>
        </div>
    );
};

export default UpcomingMovie;
