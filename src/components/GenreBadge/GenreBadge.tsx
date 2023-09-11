import React, {FC, PropsWithChildren} from 'react';

import styles from './GenreBadge.module.scss';
import {IGenre} from "../../interfaces/IGenre";

interface IProps extends PropsWithChildren {
    genre: IGenre,
}

const GenreBadge: FC<IProps> = ({genre: {id, name}}) => {
    return (
        <div className={styles.genre}>
            {name}
        </div>
    );
};

export default GenreBadge;
