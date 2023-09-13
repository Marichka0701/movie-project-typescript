import React, {FC, PropsWithChildren} from 'react';

import styles from './MovieCardPage.module.scss'
import {IMovie} from "../../interfaces/IMovie";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTES} from "../../routing/main_routes";
import image_null from "../../constants/images/image_null.png";

interface IProps extends PropsWithChildren {
    card: IMovie,
}

const MovieCardPage: FC<IProps> = ({card}) => {
    const navigate = useNavigate();

    const handleNavigate = (id: number) => {
        navigate(`${MAIN_ROUTES.MOVIES}/${id}`);
    }

    return (
        <div
            className={styles.card}
            onClick={() => handleNavigate(card?.id)}
        >
            <div className={styles.card_poster}>
                {
                    card?.poster_path ?
                        <img
                            src={`${process.env.REACT_APP_IMAGE_URL}/${card?.poster_path}`}
                            alt={card?.title}
                        /> :
                        <img
                            className={styles.null}
                            src={image_null}
                            alt="image_null logo"
                        />
                }
            </div>

            <div className={styles.card_info}>
                <div className={styles.card_info_description}>
                    <h2 className={styles.card_info_description_title}>{card?.title}</h2>
                    <p className={styles.card_info_description_date}>{card?.release_date}</p>
                    <p className={styles.card_info_description_overview}>{card?.overview}</p>
                </div>

                <div className={styles.card_info_rating}>
                    <p>{card?.vote_average}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCardPage;
