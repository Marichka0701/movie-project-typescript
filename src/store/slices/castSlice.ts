import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICast} from "../../interfaces/ICast";
import {IResCast} from "../../interfaces/IResCast";
import {AxiosError} from "axios/index";
import {castService} from "../../services/cast.service";
import {ICastDetailed} from "../../interfaces/ICastDetailed";
import {IResPopularPerson} from "../../interfaces/IResPopularPerson";
import {IPopularPerson} from "../../interfaces/IPopularPerson";

interface IState {
    mainCasts: ICast[],
    status: string,
    selectedPerson: ICastDetailed,
    popularPersons: IPopularPerson[],
    error: string,
}

const initialState:IState = {
    mainCasts: [],
    status: 'loading',
    selectedPerson: null,
    popularPersons: [],
    error: '',
}

const getMainCastsByMovieId = createAsyncThunk<IResCast, {id:number}>(
    'castSlice/getMainCastsByMovieId',
    async ({id}, { rejectWithValue }) => {
        try {
            const { data } = await castService.getMainCastsByMovieId(id);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getDetailedInfoAboutPerson = createAsyncThunk<ICastDetailed, {id:number}>(
    'castSlice/getDetailedInfoAboutPerson',
    async ({id}, { rejectWithValue }) => {
        try {
            const { data } = await castService.getDetailedInfoAboutPerson(id);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getPopularPersons = createAsyncThunk<IResPopularPerson, {page:number}>(
    'castSlice/getPopularPersons',
    async ({page}, { rejectWithValue }) => {
        try {
            const { data } = await castService.getPopularPersons(page);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const castSlice = createSlice({
    name: 'castSlice',
    initialState,
    reducers: {
    },
    extraReducers: builder => builder
        .addCase(getMainCastsByMovieId.fulfilled, (state, action) => {
            state.mainCasts = action.payload.cast;
            state.status = 'success';
            state.error = '';
        })
        .addCase(getMainCastsByMovieId.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(getMainCastsByMovieId.rejected, (state, action) => {
            state.error = action.payload as string;
        })

        .addCase(getDetailedInfoAboutPerson.fulfilled, (state, action) => {
            state.selectedPerson = action.payload;
            state.status = 'success';
            state.error = '';
        })
        .addCase(getDetailedInfoAboutPerson.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(getDetailedInfoAboutPerson.rejected, (state, action) => {
            state.error = action.payload as string;
        })

        .addCase(getPopularPersons.fulfilled, (state, action) => {
            state.popularPersons = action.payload.results;
            state.status = 'success';
            state.error = '';
        })
        .addCase(getPopularPersons.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(getPopularPersons.rejected, (state, action) => {
            state.error = action.payload as string;
        })
})

const {actions, reducer: castReducer} = castSlice;

const castActions = {
    ...actions,
    getMainCastsByMovieId,
    getDetailedInfoAboutPerson,
    getPopularPersons
}

export {
    castActions,
    castReducer
}