import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre} from "../../interfaces/IGenre";
import {IResGenre} from "../../interfaces/IResGenre";
import {genreService} from "../../services/genre.service";
import {AxiosError} from "axios";

interface IState {
    genres: IGenre[],
    selectedGenre: IGenre,
    status: string,
}

const initialState:IState = {
    genres: [],
    selectedGenre: null,
    status: 'loading',
}

const getAllGenres = createAsyncThunk<IResGenre, void>(
    'genreSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response.data);
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setSelectedGenre: (state, action) => {
            state.selectedGenre = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(getAllGenres.fulfilled, (state, action) => {
            state.genres = action.payload.genres;
            state.status = 'success';
        })
        .addCase(getAllGenres.pending, (state, action) => {
            state.status = 'loading';
        })
});

const {actions, reducer: genreReducer} = genreSlice;

const genreActions = {
    ...actions,
    getAllGenres,
}

export {
    genreActions,
    genreReducer,
}