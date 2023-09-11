import React, {FC} from 'react';

import styles from './Header.module.scss';
import UserInfo from "../UserInfo/UserInfo";
import {MAIN_ROUTES} from "../../routing/main_routes";
import {useNavigate} from "react-router-dom";

const Header:FC = () => {
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <ul className={styles.header_list}>
                <li onClick={() => navigate(MAIN_ROUTES.MOVIES)}>Main</li>
                <li>Movies</li>
                <li>TV Shows</li>
                <li>People</li>
                <li onClick={() => navigate(MAIN_ROUTES.GENRES)}>Genres</li>
            </ul>
            {/*<select name="movies" id="movies">*/}
            {/*    <option value="" disabled={true}>Movies</option>*/}
            {/*    <option value={MAIN_ROUTES.POPULAR_MOVIE_PAGE}>Popular</option>*/}
            {/*    <option value={MAIN_ROUTES.NOW_PLAYING_MOVIE_PAGE}>Now playing</option>*/}
            {/*    <option value={MAIN_ROUTES.UPCOMING_MOVIE}>Upcoming</option>*/}
            {/*    <option value={MAIN_ROUTES.TOP_RATED_MOVIE_PAGE}>Top Rated</option>*/}
            {/*</select>*/}
            <UserInfo/>
        </header>
    );
};

export default Header;