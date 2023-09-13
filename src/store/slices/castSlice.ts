import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICast} from "../../interfaces/ICast";
import {IResCast} from "../../interfaces/IResCast";
import {AxiosError} from "axios/index";
import {castService} from "../../services/cast.service";
import {ICastDetailed} from "../../interfaces/ICastDetailed";

interface IState {
    mainCasts: ICast[],
    status: string,
    selectedPerson: ICastDetailed,
}

const initialState:IState = {
    mainCasts: [],
    status: 'loading',
    selectedPerson: null,
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

const castSlice = createSlice({
    name: 'castSlice',
    initialState,
    reducers: {
    },
    extraReducers: builder => builder
        .addCase(getMainCastsByMovieId.fulfilled, (state, action) => {
            state.mainCasts = action.payload.cast;
            state.status = 'success';
        })
        .addCase(getMainCastsByMovieId.pending, (state, action) => {
            state.status = 'loading';
        })

        .addCase(getDetailedInfoAboutPerson.fulfilled, (state, action) => {
            state.selectedPerson = action.payload;
            state.status = 'success';
        })
        .addCase(getDetailedInfoAboutPerson.pending, (state, action) => {
            state.status = 'loading';
        })
})

const {actions, reducer: castReducer} = castSlice;

const castActions = {
    ...actions,
    getMainCastsByMovieId,
    getDetailedInfoAboutPerson,
}

export {
    castActions,
    castReducer
}