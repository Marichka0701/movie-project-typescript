import React, {FC, PropsWithChildren, useEffect} from 'react';

import styles from './CastCardPage.module.scss';
import {useAppSelector} from "../../hooks/useAppSelector";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {castActions} from "../../store/slices/castSlice";
import Loader from "../../components/Loader/Loader";
import {movieActions} from "../../store/slices/movieSlice";
import AppSwiper from "../../components/AppSwiper/AppSwiper";
import image_null from "../../constants/images/image_null.png";
import ErrorPage from "../ErrorPage/ErrorPage";

interface IProps extends PropsWithChildren {

}

const CastCardPage: FC<IProps> = () => {
    const {id} = useParams();

    const dispatch = useAppDispatch();
    const {selectedPerson, status: castStatus, error: errorCast} = useAppSelector(state => state.cast);
    const {moviesByPerson, status: movieStatus, error: errorMovie} = useAppSelector(state => state.movie);
    const {theme} = useAppSelector(state => state.UI);

    useEffect(() => {
        dispatch(castActions.getDetailedInfoAboutPerson({id: +id}));
        dispatch(movieActions.getMovieByPersonId({id: +id}));
    }, [])

    if (errorCast || errorMovie) {
        return <ErrorPage/>
    }

    console.error('cast error: ', errorCast,'movie error:', errorMovie);

    if ((castStatus || movieStatus) === 'loading') {
        return <Loader/>
    }

    return (
        <div className={`${styles.personContainer} ${theme === 'light' ? styles.light : styles.night}`}>
            <div className={styles.person}>
                <div className={styles.person_photo}>
                    {
                        selectedPerson?.profile_path ?
                        <img src={`${process.env.REACT_APP_IMAGE_URL}${selectedPerson?.profile_path}`}
                          alt={selectedPerson?.name}/> :
                            <img
                                className={styles.null}
                                src={image_null}
                                alt="image_null logo"
                            />
                    }
                </div>

                <div className={`${styles.person_info} ${theme === 'light' ? styles.light : styles.night}`}>
                    <h2 className={`${styles.person_info_title} ${theme === 'light' ? styles.light : styles.night}`}>{selectedPerson?.name}</h2>

                    <div className={styles.person_info_wrapper}>
                        <p className={`${styles.person_info_wrapper_title} ${theme === 'light' ? styles.light : styles.night}`}>Biography {selectedPerson?.biography ? '' : '-'}</p>
                        <p className={`${styles.person_info_wrapper_content} ${theme === 'light' ? styles.light : styles.night}`}>{selectedPerson?.biography}</p>
                    </div>

                    <div className={styles.person_info_wrapper}>
                        <p className={`${styles.person_info_wrapper_title} ${theme === 'light' ? styles.light : styles.night}`}>Known
                            for {selectedPerson?.known_for_department ? '' : '-'}</p>
                        <p className={`${styles.person_info_wrapper_content} ${theme === 'light' ? styles.light : styles.night}`}>{selectedPerson?.known_for_department}</p>
                    </div>

                    <div className={styles.person_info_wrapper}>
                        <p className={`${styles.person_info_wrapper_title} ${theme === 'light' ? styles.light : styles.night}`}>Place of
                            birth {selectedPerson?.place_of_birth ? '' : '-'}</p>
                        <p className={`${styles.person_info_wrapper_content} ${theme === 'light' ? styles.light : styles.night}`}>{selectedPerson?.place_of_birth}</p>
                    </div>

                    <div className={styles.person_info_wrapper}>
                        <p className={`${styles.person_info_wrapper_title} ${theme === 'light' ? styles.light : styles.night}`}>Also known
                            as {selectedPerson?.also_known_as.length > 0 ? '' : '-'}</p>
                        {selectedPerson?.also_known_as?.map((item, index) =>
                            <p
                                key={index}
                                className={`${styles.person_info_wrapper_content} ${theme === 'light' ? styles.light : styles.night}`}
                            >{item}</p>)}
                    </div>

                    <div className={styles.person_info_wrapper}>
                        <p className={`${styles.person_info_wrapper_title} ${theme === 'light' ? styles.light : styles.night}`}>Popularity {selectedPerson?.popularity ? '' : '-'}</p>
                        <p className={`${styles.person_info_wrapper_content}  ${theme === 'light' ? styles.light : styles.night}`}>{selectedPerson?.popularity}</p>
                    </div>
                </div>
            </div>

            {
                moviesByPerson ?
                    <div className={styles.person_info_wrapper}>
                        <p
                            style={{paddingLeft: '20px'}}
                            className={`${styles.person_info_wrapper_title} ${theme === 'light' ? styles.light : styles.night}`}
                        >Known for </p>
                        <div className={styles.person_info_wrapper_slider}>
                            <AppSwiper content={moviesByPerson} card={'movie'}/>
                        </div>
                    </div> :
                    null
            }
        </div>
    );
};


export default CastCardPage;
