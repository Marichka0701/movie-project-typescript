import React, {FC, PropsWithChildren, useEffect} from 'react';

import '../../index.css';
import styles from './Sorting.module.scss';
import {Box, FormControl, MenuItem, Select, SelectChangeEvent, Slider} from "@mui/material";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {genreActions} from "../../store/slices/genreSlice";
import {useAppSelector} from "../../hooks/useAppSelector";
import {sortActions} from "../../store/slices/sortSlice";

interface IProps extends PropsWithChildren {
    currentPage: number,
}

const Sorting: FC<IProps> = ({currentPage}) => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genre);
    const {theme} = useAppSelector(state => state.UI);
    const {
        releaseDate,
        rating,
        sort_by,
        categoryId,
        categoryName,
    } = useAppSelector(state => state.sort);

    const currentYear = new Date().getFullYear();

    const handleChangeSorting = (event: SelectChangeEvent) => {
        dispatch(sortActions.setSortBy(event.target.value));
    };

    const handleChangeRating = (event: Event, newValue: number | number[]) => {
        dispatch(sortActions.setRating(newValue as number[]));
    };

    const handleChangeCategory = (event: SelectChangeEvent) => {
        const id = event.target.value;
        if (id) {
            const {name} = genres?.find(item => item?.id === +id);
            dispatch(sortActions.setCategory([id, name]));
        } else {
            dispatch(sortActions.setCategory(['', 'All genres']));
        }
    };

    const handleChangeReleaseDate = (event: Event, newValue: number | number[]) => {
        dispatch(sortActions.setReleaseDate(newValue as number[]));
    };

    useEffect(() => {
        dispatch(genreActions.getAllGenres());
    }, [])

    const handleFilterMovies = () => {
        dispatch(sortActions.setIsClicked(null));
    }

    const handleResetValues = () => {
        dispatch(sortActions.setSortBy('popularity.desc'));
        dispatch(sortActions.setRating([1, 10]));
        dispatch(sortActions.setReleaseDate([1874, currentYear]));
        dispatch(sortActions.setCategory(['', 'All genres']));
    }

    return (
        <div className={styles.sorting}>
            <ul className={styles.sorting_selected}>
                <li
                    className={theme === 'light' ? styles.light : styles.night}
                >Rating: <span>{rating.join('-')}</span></li>
                <li
                    className={theme === 'light' ? styles.light : styles.night}
                >Release date: <span>{releaseDate.join('-')}</span></li>
                <li
                    className={theme === 'light' ? styles.light : styles.night}
                >Sort by: <span>{sort_by}</span></li>
                <li
                    className={theme === 'light' ? styles.light : styles.night}
                >Category: <span>{categoryName}</span></li>
            </ul>

            <div className={styles.sorting_container}>
                <h2 className={`${styles.sorting_container_title} ${theme === 'light' ? styles.light : styles.night}`}>Rating</h2>
                <div className={styles.sorting_container_fields}>
                    <div className={styles.sorting_container_fields_field}>
                        <span className={theme === 'light' ? styles.light : styles.night}>From</span>
                        <input type="number" disabled={true} value={rating[0]}/>
                    </div>

                    <div className={styles.sorting_container_fields_field}>
                        <span className={theme === 'light' ? styles.light : styles.night}>To</span>
                        <input type="number" disabled={true} value={rating[1]}/>
                    </div>
                </div>
                <Slider
                    getAriaLabel={() => 'Rating range'}
                    value={rating}
                    onChange={handleChangeRating}
                    valueLabelDisplay="auto"
                    min={1}
                    max={10}
                />
            </div>

            <div className={styles.sorting_container}>
                <h2 className={`${styles.sorting_container_title} ${theme === 'light' ? styles.light : styles.night}`}>Release
                    date</h2>
                <div className={styles.sorting_container_fields}>
                    <div className={styles.sorting_container_fields_field}>
                        <span className={theme === 'light' ? styles.light : styles.night}>From</span>
                        <input type="number" disabled={true} value={releaseDate[0]}/>
                    </div>

                    <div className={styles.sorting_container_fields_field}>
                        <span className={theme === 'light' ? styles.light : styles.night}>To</span>
                        <input type="number" disabled={true} value={releaseDate[1]}/>
                    </div>
                </div>
                <Slider
                    getAriaLabel={() => 'Release date range'}
                    value={releaseDate}
                    onChange={handleChangeReleaseDate}
                    valueLabelDisplay="auto"
                    min={1874}
                    max={currentYear}
                />
            </div>

            <div className={styles.sorting_container}>
                <h2 className={`${styles.sorting_container_title} ${theme === 'light' ? styles.light : styles.night}`}>Sort
                    result by</h2>
                <Box sx={{minWidth: 200}}>
                    <FormControl fullWidth>
                        <Select
                            value={sort_by}
                            onChange={handleChangeSorting}
                            displayEmpty
                            inputProps={{'aria-label': 'Without label'}}
                        >
                            <MenuItem value={'popularity.asc'}>Popularity ASC</MenuItem>
                            <MenuItem value={'popularity.desc'}>Popularity DESC</MenuItem>
                            <MenuItem value={'revenue.asc'}>Revenue ASC</MenuItem>
                            <MenuItem value={'revenue.desc'}>Revenue DESC</MenuItem>
                            <MenuItem value={'primary_release_date.asc'}>Release date ASC</MenuItem>
                            <MenuItem value={'primary_release_date.desc'}>Release date DESC</MenuItem>
                            <MenuItem value={'vote_average.asc'}>Vote average ASC</MenuItem>
                            <MenuItem value={'vote_average.desc'}>Vote average DESC</MenuItem>
                            <MenuItem value={'vote_count.asc'}>Vote count ASC</MenuItem>
                            <MenuItem value={'vote_count.desc'}>Vote count DESC</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>

            <div className={styles.sorting_container}>
                <h2 className={`${styles.sorting_container_title} ${theme === 'light' ? styles.light : styles.night}`}>Category</h2>
                <Box sx={{minWidth: 200}}>
                    <FormControl fullWidth>
                        <Select
                            value={categoryId}
                            onChange={handleChangeCategory}
                            displayEmpty
                            inputProps={{'aria-label': 'Without label'}}
                        >
                            <MenuItem value={''}>All genres</MenuItem>
                            {
                                genres.map((item, index) =>
                                    <MenuItem key={index} value={item?.id.toString()}>{item?.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Box>
            </div>

            <div className={styles.sorting_buttons}>
                <button
                    onClick={handleResetValues}
                    className={`${styles.sorting_buttons_reset} ${theme === 'light' ? styles.light : styles.night}`}
                >Reset
                </button>
                <button
                    onClick={handleFilterMovies}
                    className={`${styles.sorting_buttons_search} ${theme === 'light' ? styles.light : styles.night}`}
                >Search
                </button>
            </div>
        </div>
    );
};

export default Sorting;
