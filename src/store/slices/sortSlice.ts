import {createSlice} from "@reduxjs/toolkit";

const currentYear = new Date().getFullYear();

interface IState {
    releaseDate: number[],
    rating: number[],
    sort_by: string,
    categoryId: string,
    categoryName: string,
    countClicked: number,
}

const initialState:IState = {
    releaseDate: [1874, currentYear],
    rating: [1, 10],
    sort_by: 'popularity.desc',
    categoryId: '',
    categoryName: 'All genres',
    countClicked: 0,
}

const sortSlice = createSlice({
    name: 'sortSlice',
    initialState,
    reducers: {
        setReleaseDate: (state, action) => {
            state.releaseDate = action.payload;
        },

        setRating: (state, action) => {
            state.rating = action.payload;
        },

        setSortBy: (state, action) => {
            state.sort_by = action.payload;
        },

        setGenre: (state, action) => {
            state.categoryId = action.payload;
        },

        setCategory: (state, action) => {
            const [id, name] = action.payload;
            state.categoryId = id;
            state.categoryName = name;
        },

        setIsClicked: (state, action) => {
            state.countClicked = state.countClicked + 1;
        }
    }
})

const {actions, reducer: sortReducer} = sortSlice;

const sortActions = {
    ...actions,
}

export {
    sortActions,
    sortReducer,
}
