import React, {FC, PropsWithChildren} from 'react';

import styles from './GenreItem.module.scss';

interface IProps extends PropsWithChildren {
    name: string,
}

const GenreItem: FC<IProps> = ({name}) => {
    return (
        <div className={styles.genre}>
            <img src={require(`../../constants/images/genreIcons/${name}.png`)} alt={name} />
            <span>{name}</span>
        </div>
    );
};

export default GenreItem;
