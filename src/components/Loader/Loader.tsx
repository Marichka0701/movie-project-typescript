import React, {FC, PropsWithChildren} from 'react';

import styles from './Loader.module.scss';

interface IProps extends PropsWithChildren {

}

const Loader: FC<IProps> = () => {
    return (
        <div className={styles.holder}>
            <div className={styles.preloader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
