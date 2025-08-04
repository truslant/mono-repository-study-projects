import { createSlice } from "@reduxjs/toolkit";

const meatSliceInitialState = [
    { food: 'chicken breast', quantity: 34 },
    { food: 'bacon', quantity: 35 },
    { food: 'mahi mahi', quantity: 1 },
    { food: 'salmon', quantity: 23 },
]

const meatSlice = createSlice({
    name: 'meatSlice',
    initialState: meatSliceInitialState,
    reducers: {
        getMeat: (state, action) => {
            return state
        }
    }
})

export const meatSliceActions = meatSlice.actions;
export const meatSliceReducer = meatSlice.reducer;