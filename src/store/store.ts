import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genreSlice";

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        genre: genreReducer,
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}