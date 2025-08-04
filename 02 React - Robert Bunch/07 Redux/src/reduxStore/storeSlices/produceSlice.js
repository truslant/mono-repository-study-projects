import { createSlice } from "@reduxjs/toolkit";

const produceSliceInitialState = [
    { food: "lettuce", quantity: 14 },
    { food: "turnips", quantity: 11 },
    { food: "apples", quantity: 35 },
]

const produceSlice = createSlice({
    name: 'produceSlice',
    initialState: produceSliceInitialState,
    reducers: {
        getProduce: (state, action) => {
            return state
        }
    }
})

export const produceSliceActions = produceSlice.actions;
export const produceSliceReducer = produceSlice.reducer;