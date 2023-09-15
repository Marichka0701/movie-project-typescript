import React, {FC, PropsWithChildren, useEffect, useState} from 'react';

import styles from './DetailedInfoMovieCardPage.module.scss';
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {movieActions} from "../../store/slices/movieSlice";
import {useAppSelector} from "../../hooks/useAppSelector";
import StarsRating from "../../components/StarsRating/StarsRating";
import GenreBadge from "../../components/GenreBadge/GenreBadge";
import Loader from "../../components/Loader/Loader";
import AppSwiper from "../../components/AppSwiper/AppSwiper";
import {castActions} from "../../store/slices/castSlice";
import image_null from "../../constants/images/image_null.png";

interface IProps extends PropsWithChildren {

}

const DetailedInfoMovieCardPage: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {selectedMovie, status: statusMovie, recommendations} = useAppSelector(state => state.movie);
    const {theme} = useAppSelector(state => state.UI);
    const {mainCasts, status: statusCast} = useAppSelector(state => state.cast);
    const {id} = useParams();

    const [selectedTab, setSelectedTab] = useState<string>('Recommendations');

    useEffect(() => {
        if (id) {
            dispatch(movieActions.getMovieById({id: +id}));
            dispatch(castActions.getMainCastsByMovieId({id: +id}));
            dispatch(movieActions.getRecommendationsByMovieId({id: +id}));
        }
    }, [id])

    if ((statusMovie || statusCast) === 'loading') {
        return <Loader/>
    }

    const handleSelectTab = (name: string) => {
        setSelectedTab(name);
    };

    return (
        <div className={`${styles.detailedMovieCardContainer} ${theme === 'light' ? styles.light : styles.night}`}>
            <div
                style={{backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}/${selectedMovie?.backdrop_path})`}}
                className={styles.detailedMovieCard}
            >
                <div className={styles.detailedMovieCard_info}>
                    <div className={styles.detailedMovieCard_info_image}>
                        {
                            selectedMovie?.poster_path ?
                            <img
                                src={`${process.env.REACT_APP_IMAGE_URL}${selectedMovie?.poster_path}`}
                                alt={selectedMovie?.title}
                            /> :
                                <img
                                    className={styles.null}
                                    src={image_null}
                                    alt="image_null logo"
                                />
                        }
                    </div>
                    <div className={styles.detailedMovieCard_info_description}>
                        <h2 className={styles.detailedMovieCard_info_description_title}>{selectedMovie?.title}</h2>
                        <ul className={styles.detailedMovieCard_info_description_group}>
                            <div className={styles.detailedMovieCard_info_description_group_genres}>
                                {
                                    selectedMovie?.genres.map((item, index) =>
                                        <GenreBadge key={index} genre={item}></GenreBadge>)
                                }
                            </div>
                            <li className={styles.detailedMovieCard_info_description_group_overview}>
                                <span>Overview</span> - {selectedMovie?.overview}</li>
                            <li className={styles.detailedMovieCard_info_description_group_slogan}>
                                <span>Slogan</span> - {selectedMovie?.tagline}</li>
                            <li className={styles.detailedMovieCard_info_description_group_budget}>
                                <span>Budget</span> - {selectedMovie?.budget} $
                            </li>
                            <li className={styles.detailedMovieCard_info_description_group_release}>
                                <span>Release</span> - {selectedMovie?.release_date}</li>
                            <li className={styles.detailedMovieCard_info_description_group_stars}>
                                <span>Stars</span> - <StarsRating stars={selectedMovie?.vote_average}/>
                            </li>
                            <li className={styles.detailedMovieCard_info_description_group_duration}>
                                <span>Duration</span> - {selectedMovie?.runtime}m
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.detailedMovieCardSwipers}>
                <ul className={`${styles.detailedMovieCardSwipers_tabs} ${theme === 'light' ? styles.light : styles.night}`}>
                    <li
                        className={`${selectedTab === 'Recommendations' ? styles.active : ''} ${theme === 'light' ? styles.light : styles.night}`}
                        onClick={() => handleSelectTab('Recommendations')}
                    >Recommendations
                    </li>
                    <li
                        className={`${selectedTab === 'Main cast' ? styles.active : ''} ${theme === 'light' ? styles.light : styles.night}`}
                        onClick={() => handleSelectTab('Main cast')}
                    >Main cast
                    </li>
                </ul>
                <div
                    className={styles.detailedMovieCardSwipers_tabs_content}
                >
                    {
                        selectedTab === 'Main cast' &&
                        <AppSwiper card={'cast'} content={mainCasts}/>
                    }
                    {
                        selectedTab === 'Recommendations' &&
                        <AppSwiper card={'movie'} content={recommendations}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default DetailedInfoMovieCardPage;
