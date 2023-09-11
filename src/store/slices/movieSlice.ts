import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces/IMovie";
import {movieService} from "../../services/movie.service";
import {AxiosError} from "axios";
import {IResMovie} from "../../interfaces/IResMovie";
import {ICast} from "../../interfaces/ICast";
import {IResCast} from "../../interfaces/IResCast";

interface IState {
    nowPlayingMovies: IMovie[],
    popularMovies: IMovie[],
    topRatedMovies: IMovie[],
    upcomingMovies: IMovie[],
    selectedMovie: IMovie,
    mainCasts: ICast[],
    recommendations: IMovie[],
    moviesByGenre: IMovie[],
    status: string,
}

const initialState: IState = {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    selectedMovie: null,
    mainCasts: [],
    recommendations: [],
    moviesByGenre: [],
    status: '',
}

const getNowPlayingMovies = createAsyncThunk<IResMovie, {page: number}>(
    'movieSlice/getNowPlayingMovies',
    async ({page}, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getNowPlayingMovies(page);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getPopularMovies = createAsyncThunk<IResMovie, {page:number}>(
    'movieSlice/getPopularMovies',
    async ({page}, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getPopularMovies(page);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getTopRatedMovies = createAsyncThunk<IResMovie, {page: number}>(
    'movieSlice/getTopRatedMovies',
    async ({page}, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getTopRatedMovies(page);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getUpcomingMovies = createAsyncThunk<IResMovie, { page: number }>(
    'movieSlice/getUpcomingMovies',
    async ({page}, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getUpcomingMovies(page);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getMovieById = createAsyncThunk<IMovie, {id:number}>(
    'movieSlice/getMovieById',
    async ({id}, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getMovieById(id);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getMainCastsByMovieId = createAsyncThunk<IResCast, {id:number}>(
    'movieSlice/getMainCastsByMovieId',
    async ({id}, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getMainCastsByMovieId(id);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getRecommendationsByMovieId = createAsyncThunk<IResMovie, {id:number}>(
    'movieSlice/getRecommendationsByMovieId',
    async ({id}, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getRecommendationsByMovieId(id);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getMoviesByGenre = createAsyncThunk<IResMovie, {genre: string, page:number}>(
    'movieSlice/getMoviesByGenre',
    async ({page, genre}, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getMoviesByGenre(genre, page);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getNowPlayingMovies.fulfilled, (state, action) => {
            state.nowPlayingMovies = action.payload.results;
            state.status = 'success';
        })
        .addCase(getNowPlayingMovies.pending, (state, action) => {
            state.status = 'loading';
        })

        .addCase(getPopularMovies.fulfilled, (state, action) => {
            state.popularMovies = action.payload.results;
            state.status = 'success';
        })
        .addCase(getPopularMovies.pending, (state, action) => {
            state.status = 'loading';
        })

        .addCase(getTopRatedMovies.fulfilled, (state, action) => {
            state.topRatedMovies = action.payload.results;
            state.status = 'success';
        })
        .addCase(getTopRatedMovies.pending, (state, action) => {
            state.status = 'loading';
        })

        .addCase(getUpcomingMovies.fulfilled, (state, action) => {
            state.upcomingMovies = action.payload.results;
            state.status = 'success';
        })
        .addCase(getUpcomingMovies.pending, (state, action) => {
            state.status = 'loading';
        })

        .addCase(getMovieById.fulfilled, (state, action) => {
            state.selectedMovie = action.payload;
            state.status = 'success';
        })
        .addCase(getMovieById.pending, (state, action) => {
            state.status = 'loading';
        })

        .addCase(getMainCastsByMovieId.fulfilled, (state, action) => {
            state.mainCasts = action.payload.cast;
            state.status = 'success';
        })
        .addCase(getMainCastsByMovieId.pending, (state, action) => {
            state.status = 'loading';
        })

        .addCase(getRecommendationsByMovieId.fulfilled, (state, action) => {
            state.recommendations = action.payload.results;
            state.status = 'success';
        })
        .addCase(getRecommendationsByMovieId.pending, (state, action) => {
            state.status = 'loading';
        })

        .addCase(getMoviesByGenre.fulfilled, (state, action) => {
            state.moviesByGenre = action.payload.results;
            state.status = 'success';
        })
        .addCase(getMoviesByGenre.pending, (state, action) => {
            state.status = 'loading';
        })
});

const {actions, reducer: movieReducer} = movieSlice;

const movieActions = {
    ...actions,
    getNowPlayingMovies,
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
    getMovieById,
    getMainCastsByMovieId,
    getRecommendationsByMovieId,
    getMoviesByGenre,
}

export {
    movieActions,
    movieReducer,
}