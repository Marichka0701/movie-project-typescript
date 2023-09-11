import React, {FC, PropsWithChildren} from 'react';

import styles from './GenreBadge.module.scss';
import {IGenre} from "../../interfaces/IGenre";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {genreActions} from "../../store/slices/genreSlice";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTES} from "../../routing/main_routes";

interface IProps extends PropsWithChildren {
    genre: IGenre,
}

const GenreBadge: FC<IProps> = ({genre}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleSelectGenre = (genre:IGenre) => {
      dispatch(genreActions.setSelectedGenre(genre));
      navigate(`${MAIN_ROUTES.GENRES}/${genre?.name.toLowerCase()}`);
    }

    return (
        <div
            onClick={() => handleSelectGenre(genre)}
            className={styles.genre}
        >
            {genre?.name}
        </div>
    );
};

export default GenreBadge;
