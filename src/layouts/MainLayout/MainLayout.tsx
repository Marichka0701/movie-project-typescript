import React, {FC} from 'react';
import Header from "../../components/Header/Header";
import {Outlet} from "react-router-dom";

import styles from './MainLayout.module.scss';

const MainLayout:FC = () => {
    return (
        <div className={styles.mainLayout}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;