import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = {
    counter: 0,
    toggleShow: false
}

const counterSlice = createSlice({
    name: 'countSlice',
    initialState: counterInitialState,
    reducers: {
        increment: (state, action) => {
            state.counter++
        },
        decrement: (state, action) => {
            state.counter--
        },
        increase: (state, action) => {
            state.counter = state.counter + action.payload;
        },
        toogleShow: (state, action) => {
            state.toggleShow = !state.toggleShow;
        }
    }
})

export const counterSliceActions = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;