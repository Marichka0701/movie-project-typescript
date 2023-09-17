import React, {FC, PropsWithChildren, useEffect, useState} from 'react';

import styles from './NowPlayingMoviePage.module.scss';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {movieActions} from "../../store/slices/movieSlice";
import {useAppSelector} from "../../hooks/useAppSelector";
import MovieCardPage from "../../components/MovieCardPage/MovieCardPage";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import ErrorPage from "../ErrorPage/ErrorPage";

interface IProps extends PropsWithChildren {

}

const NowPlayingMoviePage: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {nowPlayingMovies, status, error} = useAppSelector(state => state.movie);
    const {theme} = useAppSelector(state => state.UI);

    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        dispatch(movieActions.getNowPlayingMovies({page: currentPage}));
    }, [currentPage])

    if (error) {
        return <ErrorPage/>
    }

    if (status === 'loading') {
        return <Loader/>
    }

    return (
        <div className={`${styles.nowPlayingMoviePageContainer} ${theme === 'light' ? styles.light : styles.night}`}>
            <div className={styles.nowPlayingMoviePage}>
                <div className={styles.nowPlayingMoviePage_info}>
                    <div className={styles.nowPlayingMoviePage_info_facts}>
                        <h2 className={`${styles.nowPlayingMoviePage_info_facts_title} ${theme === 'light' ? styles.light : styles.night}`}>Now
                            Playing Movies</h2>

                        <p className={theme === 'light' ? styles.light : styles.night}>
                            Кіно дуже довго не мало назви. Його називали по-різному – «кіномо-, хромо-, фоно-,
                            мега-, скопограф», «ілюзіон», «кікі», «кінемоша» або «кінемошка». Єдине, що дожило
                            до наших днів – це слово «кіношка». А слово «кіно» прийшло з Німеччини.
                        </p>
                        <p className={theme === 'light' ? styles.light : styles.night}>
                            Фільм "The Two Mouseketeers" (1951) має тривалість всього 7 хвилин і отримав Оскар
                            як найкращий короткометражний анімаційний фільм.
                        </p>
                        <p className={theme === 'light' ? styles.light : styles.night}>
                            Фільм "Аватар" режисера Джеймса Кемерона (2009 рік) вважається найдорожчим фільмом
                            усіх часів, оскільки виробництво його обійшлося приблизно в 2,8 мільярди доларів
                            США.
                        </p>
                        <p className={theme === 'light' ? styles.light : styles.night}>
                            Фільм "Напровесні вітри" (1969 рік) режисера Берта И. Перрі став найдорожчим і
                            найдовшим фільмом на кількість слів, бо складається всього з одного слова -
                            "напровесні".
                        </p>
                    </div>
                    <div>
                        {
                            nowPlayingMovies.map((item, index) =>
                                <MovieCardPage key={index} card={item}/>)
                        }
                    </div>
                </div>

                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    );
};

export default NowPlayingMoviePage;
