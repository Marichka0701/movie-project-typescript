import React, {FC, PropsWithChildren} from 'react';

import styles from './Pagination.module.scss';

interface IProps extends PropsWithChildren {
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
}

const Pagination: FC<IProps> = ({currentPage, setCurrentPage}) => {
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
                className={styles.pagination_prev}
            >Previous
            </button>
            <p className={styles.pagination_currentPage}>{currentPage}</p>
            <button
                onClick={handleNextClick}
                className={styles.pagination_next}
            >Next
            </button>
        </div>
    );
};

export default Pagination;
