import React, {FC, PropsWithChildren} from 'react';

import styles from './ErrorPage.module.scss';
import Button from "../../components/UI/Button/Button";
import {MAIN_ROUTES} from "../../routing/main_routes";

interface IProps extends PropsWithChildren {

}

const ErrorPage: FC<IProps> = () => {
    return (
        <div className={styles.errorPage}>
            <div className={styles.errorPage_error}>
                <h2 className={styles.errorPage_error_title}>Oops... Page not found</h2>
                <p className={styles.errorPage_error_paragraph}>Sorry, the page you`re looking for doesn`t exist. You can return
                    to the main page.</p>
                <Button title={'Main Page'} path={MAIN_ROUTES.MAIN}></Button>
            </div>
        </div>
    );
};

export default ErrorPage;
