import {createSlice} from "@reduxjs/toolkit";

interface IState {
    theme: string,
}

const initialState:IState = {
    theme: 'light',
}

const UISlice = createSlice({
    name: 'UISlice',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        }
    }
});

const {actions, reducer:UIReducer} = UISlice;

const UIActions = {
    ...actions,
}

export {
    UIActions,
    UIReducer,
}