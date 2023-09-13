import React, {FC, PropsWithChildren, useEffect, useState} from 'react';

import styles from './MoviesByGenrePage.module.scss';
import GenreItem from "../../components/GenreItem/GenreItem";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {movieActions} from "../../store/slices/movieSlice";
import MovieCardPage from "../../components/MovieCardPage/MovieCardPage";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";

interface IProps extends PropsWithChildren {

}

const MoviesByGenrePage: FC<IProps> = () => {
    const {selectedGenre} = useAppSelector(state => state.genre);
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
        <div className={styles.movieByGenrePage}>
            <GenreItem genre={selectedGenre}/>

            <div className={styles.movieByGenrePage_content}>
                {
                    moviesByGenre.map((item, index) =>
                        <MovieCardPage key={index} card={item}/>)
                }
            </div>

            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export default MoviesByGenrePage;
