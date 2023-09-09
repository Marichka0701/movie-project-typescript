import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";

export const store = configureStore({
    reducer: {
        movie: movieReducer,
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}