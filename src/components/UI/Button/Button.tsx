import React, {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import styles from './Button.module.scss';

interface IProps extends PropsWithChildren {
    title: string
    path: string,
}

const Button: FC<IProps> = ({title, path}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(path);
    }

    return (
        <button
            className={styles.button}
            onClick={handleNavigate}
        >
            {title}
        </button>
    );
};

export default Button;
