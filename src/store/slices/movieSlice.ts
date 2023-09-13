import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces/IMovie";
import {movieService} from "../../services/movie.service";
import {AxiosError} from "axios";
import {IResMovie} from "../../interfaces/IResMovie";
import {IResMovieByPerson} from "../../interfaces/IResMovieByPerson";

interface IState {
    nowPlayingMovies: IMovie[],
    popularMovies: IMovie[],
    topRatedMovies: IMovie[],
    upcomingMovies: IMovie[],
    selectedMovie: IMovie,
    movieMainPage: IMovie,
    recommendations: IMovie[],
    moviesByGenre: IMovie[],
    searchingMovie: IMovie[],
    moviesByPerson: IMovie[],
    status: string,
}

const initialState: IState = {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    selectedMovie: null,
    movieMainPage: null,
    recommendations: [],
    moviesByGenre: [],
    searchingMovie: [],
    moviesByPerson: [],
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

const getSearchingMovie = createAsyncThunk<IResMovie, {query: string, page:number}>(
    'movieSlice/getSearchingMovie',
    async ({page, query}, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getSearchingMovie(query, page);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getMovieByPersonId = createAsyncThunk<IResMovieByPerson, {id: number}>(
    'movieSlice/getMovieByPersonId',
    async ({id}, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getMovieByPersonId(id);
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
    reducers: {
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload;
        }
    },
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
            state.movieMainPage = action.payload.results[0];
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

        .addCase(getSearchingMovie.fulfilled, (state, action) => {
            state.searchingMovie = action.payload.results;
            state.status = 'success';
        })
        .addCase(getSearchingMovie.pending, (state, action) => {
            state.status = 'loading';
        })

        .addCase(getMovieByPersonId.fulfilled, (state, action) => {
            state.moviesByPerson = action.payload.cast;
            state.status = 'success';
        })
        .addCase(getMovieByPersonId.pending, (state, action) => {
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
    getRecommendationsByMovieId,
    getMoviesByGenre,
    getSearchingMovie,
    getMovieByPersonId,
}

export {
    movieActions,
    movieReducer,
}