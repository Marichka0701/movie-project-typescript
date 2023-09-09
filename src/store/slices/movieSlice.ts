import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces/IMovie";
import {movieService} from "../../services/movie.service";
import {AxiosError} from "axios";
import {IResMovie} from "../../interfaces/IResMovie";

interface IState {
    nowPlayingMovies: IMovie[],
    popularMovies: IMovie[],
    topRatedMovies: IMovie[],
    upcomingMovies: IMovie[],
    status: string,
}

const initialState: IState = {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    status: '',
}

const getNowPlayingMovies = createAsyncThunk<IResMovie, void>(
    'movieSlice/getNowPlayingMovies',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getNowPlayingMovies();
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getPopularMovies = createAsyncThunk<IResMovie, void>(
    'movieSlice/getPopularMovies',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getPopularMovies();
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getTopRatedMovies = createAsyncThunk<IResMovie, void>(
    'movieSlice/getTopRatedMovies',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getTopRatedMovies();
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getUpcomingMovies = createAsyncThunk<IResMovie, void>(
    'movieSlice/getUpcomingMovies',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getUpcomingMovies();
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
        .addCase(getNowPlayingMovies.rejected, (state, action) => {
            state.status = 'loading';
        })

        .addCase(getPopularMovies.fulfilled, (state, action) => {
            state.popularMovies = action.payload.results;
            state.status = 'success';
        })
        .addCase(getPopularMovies.rejected, (state, action) => {
            state.status = 'loading';
        })

        .addCase(getTopRatedMovies.fulfilled, (state, action) => {
            state.topRatedMovies = action.payload.results;
            state.status = 'success';
        })
        .addCase(getTopRatedMovies.rejected, (state, action) => {
            state.status = 'loading';
        })

        .addCase(getUpcomingMovies.fulfilled, (state, action) => {
            state.upcomingMovies = action.payload.results;
            state.status = 'success';
        })
        .addCase(getUpcomingMovies.rejected, (state, action) => {
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
}

export {
    movieActions,
    movieReducer,
}