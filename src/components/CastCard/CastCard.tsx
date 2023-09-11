import React, {FC, PropsWithChildren} from 'react';

import styles from './CastCard.module.scss';
import ImagePreview from "../ImagePreview/ImagePreview";
import {ICast} from "../../interfaces/ICast";

interface IProps extends PropsWithChildren {
    cast: ICast,
}

const CastCard: FC<IProps> = ({cast}) => {
    return (
        <div
            // onClick={() => handleNavigate(id)}
            className={styles.card}
        >
            <div className={styles.card_image}>
                <ImagePreview path={cast?.profile_path} title={cast?.name} />
            </div>

            <div className={styles.card_info}>
                <h2 className={styles.card_info_title}>{cast?.name}</h2>
                <p className={styles.card_info_role}>{cast?.character}</p>
            </div>
        </div>
    );
};

export default CastCard;
