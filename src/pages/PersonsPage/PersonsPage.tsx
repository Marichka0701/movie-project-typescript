import React, {FC, PropsWithChildren, useEffect, useState} from 'react';

import styles from './PersonsPage.module.scss';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {castActions} from "../../store/slices/castSlice";
import {useAppSelector} from "../../hooks/useAppSelector";
import CastCard from "../../components/CastCard/CastCard";
import Pagination from "../../components/Pagination/Pagination";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loader from "../../components/Loader/Loader";

interface IProps extends PropsWithChildren {

}

const PersonsPage: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {popularPersons, status, error} = useAppSelector(state => state.cast);
    const {theme} = useAppSelector(state => state.UI);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        dispatch(castActions.getPopularPersons({page: currentPage}));
    }, [currentPage])

    if (error) {
        return <ErrorPage/>
    }

    if (status === 'loading') {
        return <Loader/>
    }

    return (
        <div className={`${styles.persons} ${theme === 'light' ? styles.light : styles.night}`}>
            <div className={styles.persons_content}>
                {
                    popularPersons.map((item, index) =>
                        <CastCard cast={item}/>)
                }
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export default PersonsPage;
