import React, {FC, PropsWithChildren, useEffect} from 'react';

import styles from './GenrePage.module.scss';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {genreActions} from "../../store/slices/genreSlice";
import Loader from "../../components/Loader/Loader";
import background from '../../constants/images/backgroundGenrePage.jpg';
import GenreItem from "../../components/GenreItem/GenreItem";
import ErrorPage from "../ErrorPage/ErrorPage";

interface IProps extends PropsWithChildren {

}

const GenrePage: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {genres, status, error} = useAppSelector(state => state.genre);

    useEffect(() => {
        dispatch(genreActions.getAllGenres());
    }, [])

    if (status === 'loading') {
        return <Loader/>
    }

    if (error) {
        return <ErrorPage/>
    }

    return (
        <div
            style={{backgroundImage: `url("${background}")`}}
            className={styles.genrePage}
        >
            <div className={styles.genrePage_content}>
                {
                    genres.map((item, index) => <GenreItem key={index} genre={item}/>)
                }
            </div>
        </div>
    );
};

export default GenrePage;
