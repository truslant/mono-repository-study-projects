import { createSlice } from "@reduxjs/toolkit";

const produceSliceInitialState = [
    { foor: "lettuce", quantity: 14 },
    { foor: "turnips", quantity: 11 },
    { foor: "apples", quantity: 35 },
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