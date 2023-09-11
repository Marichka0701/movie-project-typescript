import React, {FC, PropsWithChildren, useEffect} from 'react';

import styles from './PopularMovie.module.scss';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {movieActions} from "../../store/slices/movieSlice";
import AppSwiper from "../AppSwiper/AppSwiper";
import Button from "../UI/Button/Button";
import {MAIN_ROUTES} from "../../routing/main_routes";

interface IProps extends PropsWithChildren {

}

const PopularMovie: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {popularMovies} = useAppSelector(state => state.movie);

    useEffect(() => {
        dispatch(movieActions.getPopularMovies({page: 1}));
    }, [])

    return (
        <div className={styles.popularMovie}>
            <div className={styles.popularMovie_top}>
                <h1 className={styles.popularMovie_top_title}>What's Popular</h1>
                <Button title={'Show all'} path={MAIN_ROUTES.POPULAR_MOVIE_PAGE}></Button>
            </div>
            <div>
                <AppSwiper card={'movie'} content={popularMovies}/>
            </div>
        </div>
    );
};

export default PopularMovie;
