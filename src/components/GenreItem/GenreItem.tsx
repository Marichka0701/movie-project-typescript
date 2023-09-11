import React, {FC, PropsWithChildren} from 'react';

import styles from './GenreItem.module.scss';
import {IGenre} from "../../interfaces/IGenre";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {genreActions} from "../../store/slices/genreSlice";
import {MAIN_ROUTES} from "../../routing/main_routes";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre: IGenre,
}

const GenreItem: FC<IProps> = ({genre}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSelectGenre = (genre: IGenre) => {
        dispatch(genreActions.setSelectedGenre(genre));
        navigate(`${MAIN_ROUTES.GENRES}/${genre?.name.toLowerCase()}`);
    }

    return (
        <div
            onClick={() => handleSelectGenre(genre)}
            className={styles.genre}
        >
            <img src={require(`../../constants/images/genreIcons/${genre?.name}.png`)} alt={genre?.name}/>
            <span>{genre?.name}</span>
        </div>
    );
};

export default GenreItem;
