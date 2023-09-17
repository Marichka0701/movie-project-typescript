import React, {ChangeEvent, FC, PropsWithChildren, useEffect, useState} from 'react';

import styles from './MoviePage.module.scss';
import Sorting from "../../components/Sorting/Sorting";
import {useAppSelector} from "../../hooks/useAppSelector";
import MovieCardPage from "../../components/MovieCardPage/MovieCardPage";
import Pagination from "../../components/Pagination/Pagination";
import ErrorPage from "../ErrorPage/ErrorPage";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {movieActions} from "../../store/slices/movieSlice";
import Loader from "../../components/Loader/Loader";

interface IProps extends PropsWithChildren {

}

const MoviePage: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [inputValue, setInputValue] = useState<string>();

    const {filteredMovies, searchingMovie, error, status} = useAppSelector(state => state.movie);
    const {theme} = useAppSelector(state => state.UI);
    const {
        sort_by,
        rating,
        releaseDate,
        categoryId,
        countClicked
    } = useAppSelector(state => state.sort);

    useEffect(() => {
        dispatch(movieActions.getFilteredMovies({
            sort_by,
            vote_average_gte: rating[0],
            vote_average_lte: rating[1],
            genre: categoryId,
            primary_release_date_gte: releaseDate[0].toString(),
            primary_release_date_lte: releaseDate[1].toString(),
            page: currentPage,
        }));
    }, [countClicked, currentPage])

    useEffect(() => {
        if (inputValue) {
            dispatch(movieActions.getSearchingMovie({query: inputValue, page: currentPage}));
        }
    }, [currentPage])

    if (error) {
        return <ErrorPage/>
    }

    if (status === 'loading') {
        return <Loader/>
    }

    const handleSetSearchingValue = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleSetQuery = () => {
        if (currentPage >= 1) {
            setCurrentPage(1);
            dispatch(movieActions.getSearchingMovie({query: inputValue, page: currentPage}));
        } else {
            dispatch(movieActions.getSearchingMovie({query: inputValue, page: currentPage}));
        }
    }

    return (
        <div className={`${styles.moviePageContainer} ${theme === 'light' ? styles.light : styles.night}`}>
            <div className={styles.moviePageContainer_moviePage}>
                {
                    !inputValue ?
                        <div className={styles.moviePageContainer_moviePage_sidebar}>
                            <h1 className={`${styles.moviePageContainer_moviePage_sidebar_title} ${theme === 'light' ? styles.light : styles.night}`}>All
                                movies</h1>
                            <Sorting currentPage={currentPage}/>
                        </div> : null
                }

                <div className={styles.moviePageContainer_moviePage_leftPart}>
                    <form
                        className={styles.moviePageContainer_moviePage_leftPart_form}
                        action="#"
                    >
                        <input
                            onChange={handleSetSearchingValue}
                            value={inputValue}
                            placeholder={'Search movie...'}
                            className={theme === 'light' ? styles.light : styles.night}
                            type="text"
                        />
                        <button
                            onClick={handleSetQuery}
                            className={theme === 'light' ? styles.light : styles.night}
                        >Search
                        </button>
                    </form>

                    <div>
                        {
                            inputValue ?
                                searchingMovie.map((item, index) =>
                                    <MovieCardPage key={index} card={item}/>) :
                                filteredMovies?.map((item, index) =>
                                    <MovieCardPage key={index} card={item}/>)
                        }
                    </div>
                </div>
            </div>

            {
                inputValue && searchingMovie.length > 0 &&
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            }
            {
                !inputValue && filteredMovies.length > 0 &&
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            }
        </div>
    );
}

export default MoviePage;
