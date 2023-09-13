import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genreSlice";
import {castReducer} from "./slices/castSlice";
import {UIReducer} from "./slices/UISlice";

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        genre: genreReducer,
        cast: castReducer,
        UI: UIReducer,
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}