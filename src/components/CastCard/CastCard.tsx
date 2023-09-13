import React, {FC, PropsWithChildren} from 'react';

import styles from './CastCard.module.scss';
import ImagePreview from "../ImagePreview/ImagePreview";
import {ICast} from "../../interfaces/ICast";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTES} from "../../routing/main_routes";

interface IProps extends PropsWithChildren {
    cast: ICast,
}

const CastCard: FC<IProps> = ({cast}) => {
    const navigate = useNavigate();

    const handleNavigate = (id: number) => {
        navigate(`${MAIN_ROUTES.PERSONS}/${id}`);
    }

    return (
        <div
            onClick={() => handleNavigate(cast?.id)}
            className={styles.card}
        >
            <div className={styles.card_image}>
                <ImagePreview path={cast?.profile_path} title={cast?.name}/>
            </div>

            <div className={styles.card_info}>
                <h2 className={styles.card_info_title}>{cast?.name}</h2>
                <p className={styles.card_info_role}>{cast?.character}</p>
            </div>
        </div>
    );
};

export default CastCard;
