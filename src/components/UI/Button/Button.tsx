import React, {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import styles from './Button.module.scss';
import {useAppSelector} from "../../../hooks/useAppSelector";

interface IProps extends PropsWithChildren {
    title: string
    path: string,
}

const Button: FC<IProps> = ({title, path}) => {
    const navigate = useNavigate();
    const {theme} = useAppSelector(state => state.UI);

    const handleNavigate = () => {
        navigate(path);
    }

    return (
        <button
            className={`${styles.button} ${theme === 'light' ? styles.light : styles.night}`}
            onClick={handleNavigate}
        >
            {title}
        </button>
    );
};

export default Button;
