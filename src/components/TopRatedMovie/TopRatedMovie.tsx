import React, {FC, PropsWithChildren, useEffect} from 'react';

import styles from './TopRatedMovie.module.scss';
import AppSwiper from "../AppSwiper/AppSwiper";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {movieActions} from "../../store/slices/movieSlice";
import Button from "../UI/Button/Button";
import {MAIN_ROUTES} from "../../routing/main_routes";
import Loader from "../Loader/Loader";

interface IProps extends PropsWithChildren {

}

const TopRatedMovie: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {topRatedMovies, status} = useAppSelector(state => state.movie);
    const {theme} = useAppSelector(state => state.UI);

    useEffect(() => {
        dispatch(movieActions.getTopRatedMovies({page: 1}));
    }, [])

    if (status === 'loading') {
        return <Loader/>
    }

    return (
        <div className={styles.topRatedMovie}>
            <div className={styles.topRatedMovie_top}>
                <h1 className={`${styles.topRatedMovie_top_title} ${theme === 'light' ? styles.light : styles.night}`}>Top Rated</h1>
                <Button title={'Show all'} path={MAIN_ROUTES.TOP_RATED_MOVIE_PAGE}></Button>
            </div>
            <div>
                <AppSwiper card={'movie'} content={topRatedMovies}/>
            </div>
        </div>
    );
};

export default TopRatedMovie;
