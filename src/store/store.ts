import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genreSlice";
import {castReducer} from "./slices/castSlice";
import {UIReducer} from "./slices/UISlice";
import {sortReducer} from "./slices/sortSlice";

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        genre: genreReducer,
        cast: castReducer,
        UI: UIReducer,
        sort: sortReducer,
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}