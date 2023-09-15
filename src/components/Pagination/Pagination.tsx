import React, {FC, PropsWithChildren} from 'react';

import styles from './Pagination.module.scss';
import {useAppSelector} from "../../hooks/useAppSelector";

interface IProps extends PropsWithChildren {
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
}

const Pagination: FC<IProps> = ({currentPage, setCurrentPage}) => {
    const {theme} = useAppSelector(state => state.UI);
    const handleNextClick = () => {
        setCurrentPage(prev => prev + 1);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const handlePrevClick = () => {
        setCurrentPage(prev => prev - 1);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={styles.pagination}>
            <button
                disabled={currentPage === 1}
                onClick={handlePrevClick}
                className={`${styles.pagination_prev} ${theme === 'light' ? styles.light : styles.night}`}
            >Previous
            </button>
            <p className={styles.pagination_currentPage}>{currentPage}</p>
            <button
                onClick={handleNextClick}
                className={`${styles.pagination_next} ${theme === 'light' ? styles.light : styles.night}`}
            >Next
            </button>
        </div>
    );
};

export default Pagination;
