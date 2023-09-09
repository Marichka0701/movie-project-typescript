import React, {FC, PropsWithChildren} from 'react';

import styles from './MovieCard.module.scss';
import {IMovie} from "../../interfaces/IMovie";

interface IProps extends PropsWithChildren {
    card: IMovie,
}

const MovieCard: FC<IProps> = ({card}) => {
    const {poster_path, title, release_date} = card;

    return (
        <div className={styles.card}>
            <div className={styles.card_image}>
                <img src={`${process.env.REACT_APP_IMAGE_URL}${poster_path}`} alt={title}/>
            </div>

            <div className={styles.card_info}>
                <h2 className={styles.card_info_title}>{title}</h2>
                <p className={styles.card_info_date}>{release_date}</p>
            </div>
        </div>
    );
};

export default MovieCard;
