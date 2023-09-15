import React, {FC, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Switch from "react-switch";

import styles from './Header.module.scss';
import '../../index.css'
import UserInfo from "../UserInfo/UserInfo";
import {MAIN_ROUTES} from "../../routing/main_routes";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {UIActions} from "../../store/slices/UISlice";
import {useAppSelector} from "../../hooks/useAppSelector";

const Header: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {theme} = useAppSelector(state => state.UI);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleNavigate = (path: string) => {
        navigate(path);
        setIsVisible(false);
    }

    const handleSetIsVisible = () => {
        setIsVisible(true);
    }

    const handleMouseLeave = () => {
        setIsVisible(false);
    }

    const handleChange = () => {
        if (theme === 'light') {
            dispatch(UIActions.setTheme('night'));
        } else {
            dispatch(UIActions.setTheme('light'));
        }
    }

    return (
        <header className={`${styles.header} ${theme === 'light' ? styles.light : styles.night}`}>
            <ul className={styles.header_list}>
                <li onClick={() => handleNavigate(MAIN_ROUTES.MOVIES)}>Main</li>
                <li
                    onClick={handleSetIsVisible}
                    className={styles.header_list_movies}
                >Movies
                </li>
                {
                    isVisible &&
                    <ul
                        onMouseLeave={handleMouseLeave}
                        className={`${styles.header_list_movies_content} ${theme === 'light' ? styles.light : styles.night}`}>
                        <li onClick={() => handleNavigate(MAIN_ROUTES.NOW_PLAYING_MOVIE_PAGE)}>Now playing</li>
                        <li onClick={() => handleNavigate(MAIN_ROUTES.POPULAR_MOVIE_PAGE)}>Popular</li>
                        <li onClick={() => handleNavigate(MAIN_ROUTES.UPCOMING_MOVIE)}>Upcoming</li>
                        <li onClick={() => handleNavigate(MAIN_ROUTES.TOP_RATED_MOVIE_PAGE)}>Top rated</li>
                    </ul>
                }
                <li>TV Shows</li>
                <li>People</li>
                <li onClick={() => navigate(MAIN_ROUTES.GENRES)}>Genres</li>
            </ul>
            <div className={styles.header_rightSide}>
                <Switch
                    onChange={handleChange}
                    checked={theme === 'light'}
                    color={'blue'}
                    onColor={'black'}
                    checkedIcon={<img className={styles.nightMode}
                                      src='https://img.icons8.com/ios/50/partly-cloudy-night--v1.png'
                                      alt="night mode icon"/>}
                    uncheckedIcon={<img className={styles.lightMode}
                                        src="https://img.icons8.com/external-flat-papa-vector/78/external-Light-Mode-interface-flat-papa-vector.png"
                                        alt="light mode icon"/>}
                />
                <UserInfo/>
            </div>
        </header>
    );
};

export default Header;