import React, {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import styles from './MovieCard.module.scss';
import {IMovie} from "../../interfaces/IMovie";
import {MAIN_ROUTES} from "../../routing/main_routes";
import ImagePreview from "../ImagePreview/ImagePreview";

interface IProps extends PropsWithChildren {
    card: IMovie,
}

const MovieCard: FC<IProps> = ({card}) => {
    const {poster_path, title, release_date, id} = card;

    const navigate = useNavigate();

    const handleNavigate = (id:number) => {
        navigate(`${MAIN_ROUTES.MOVIES}/${id}`);
    }

    return (
        <div
            onClick={() => handleNavigate(id)}
            className={styles.card}
        >
            <div className={styles.card_image}>
                {/*<img src={`${process.env.REACT_APP_IMAGE_URL}${poster_path}`} alt={title}/>*/}
                <ImagePreview path={poster_path} title={title} />
            </div>

            <div className={styles.card_info}>
                <h2 className={styles.card_info_title}>{title}</h2>
                <p className={styles.card_info_date}>{release_date}</p>
            </div>
        </div>
    );
};

export default MovieCard;
