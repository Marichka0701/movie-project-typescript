import React, {FC, PropsWithChildren, useEffect} from 'react';

import styles from './UpcomingMovie.module.scss';
import AppSwiper from "../AppSwiper/AppSwiper";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {movieActions} from "../../store/slices/movieSlice";
import Button from "../UI/Button/Button";
import {MAIN_ROUTES} from "../../routing/main_routes";
import Loader from "../Loader/Loader";

interface IProps extends PropsWithChildren {

}

const UpcomingMovie: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {upcomingMovies, status} = useAppSelector(state => state.movie);
    const {theme} = useAppSelector(state => state.UI);

    useEffect(() => {
        dispatch(movieActions.getUpcomingMovies({page: 1}));
    }, [])

    if (status === 'loading') {
        return <Loader/>
    }

    return (
        <div className={styles.upcomingMovie}>
            <div className={`${styles.upcomingMovie_top} ${theme === 'light' ? styles.light : styles.night}`}>
                <h1 className={`${styles.upcomingMovie_top_title} ${theme === 'light' ? styles.light : styles.night}`}>Upcoming</h1>
                <Button title={'Show all'} path={MAIN_ROUTES.UPCOMING_MOVIE}></Button>
            </div>
            <div>
                <AppSwiper card={'movie'} content={upcomingMovies}/>
            </div>
        </div>
    );
};

export default UpcomingMovie;
