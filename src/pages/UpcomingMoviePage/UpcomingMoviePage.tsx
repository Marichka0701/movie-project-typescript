import React, {FC, PropsWithChildren, useEffect, useState} from 'react';

import styles from './UpcomingMoviePage.module.scss';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {movieActions} from "../../store/slices/movieSlice";
import Loader from "../../components/Loader/Loader";
import MovieCardPage from "../../components/MovieCardPage/MovieCardPage";
import Pagination from "../../components/Pagination/Pagination";

interface IProps extends PropsWithChildren {

}

const UpcomingMoviePage: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {upcomingMovies, status} = useAppSelector(state => state.movie);

    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        dispatch(movieActions.getUpcomingMovies({page: currentPage}));
    }, [currentPage])

    if (status === 'loading') {
        return <Loader/>
    }

    return (
        <div className={styles.upcomingMoviePage}>
            <div className={styles.upcomingMoviePage_info}>
                <div className={styles.upcomingMoviePage_info_facts}>
                    <h2 className={styles.upcomingMoviePage_info_facts_title}>Upcoming Movies</h2>

                    <p>
                        Кіно дуже довго не мало назви. Його називали по-різному – «кіномо-, хромо-, фоно-,
                        мега-, скопограф», «ілюзіон», «кікі», «кінемоша» або «кінемошка». Єдине, що дожило
                        до наших днів – це слово «кіношка». А слово «кіно» прийшло з Німеччини.
                    </p>
                    <p>
                        Фільм "The Two Mouseketeers" (1951) має тривалість всього 7 хвилин і отримав Оскар
                        як найкращий короткометражний анімаційний фільм.
                    </p>
                    <p>
                        Фільм "Аватар" режисера Джеймса Кемерона (2009 рік) вважається найдорожчим фільмом
                        усіх часів, оскільки виробництво його обійшлося приблизно в 2,8 мільярди доларів
                        США.
                    </p>
                    <p>
                        Фільм "Напровесні вітри" (1969 рік) режисера Берта И. Перрі став найдорожчим і
                        найдовшим фільмом на кількість слів, бо складається всього з одного слова -
                        "напровесні".
                    </p>
                </div>
                <div>
                    {
                        upcomingMovies.map((item, index) =>
                            <MovieCardPage key={index} card={item} />)
                    }
                </div>
            </div>

            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export default UpcomingMoviePage;
