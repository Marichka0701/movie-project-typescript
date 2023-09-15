import React, {FC, PropsWithChildren, useEffect, useState} from 'react';

import styles from './MoviesByGenrePage.module.scss';
import GenreItem from "../../components/GenreItem/GenreItem";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {movieActions} from "../../store/slices/movieSlice";
import MovieCardPage from "../../components/MovieCardPage/MovieCardPage";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import ErrorPage from "../ErrorPage/ErrorPage";

interface IProps extends PropsWithChildren {

}

const MoviesByGenrePage: FC<IProps> = () => {
    const {selectedGenre} = useAppSelector(state => state.genre);
    const {theme} = useAppSelector(state => state.UI);
    const {moviesByGenre, status} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();

    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        dispatch(movieActions.getMoviesByGenre({genre: selectedGenre?.id.toString(), page: currentPage}));
    }, [currentPage])

    if (status === 'loading') {
        return <Loader/>
    }

    return (
        <>
            {
                selectedGenre ?
                    <div
                        className={`${styles.movieByGenrePageContainer} ${theme === 'light' ? styles.light : styles.night}`}>
                        <div
                            className={`${styles.movieByGenrePage} ${theme === 'light' ? styles.light : styles.night}`}>
                            <GenreItem genre={selectedGenre}/>

                            <div className={styles.movieByGenrePage_content}>
                                {
                                    moviesByGenre.map((item, index) =>
                                        <MovieCardPage key={index} card={item}/>)
                                }
                            </div>

                            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                        </div>
                    </div> :
                    <ErrorPage/>
            }
        </>
    );
};

export default MoviesByGenrePage;
