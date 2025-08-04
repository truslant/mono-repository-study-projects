import { createSlice } from "@reduxjs/toolkit";

const frozenFoodInitialState = [
    { food: 'IceCream', quantity: 10 },
    { food: 'Frozen Candies', quantity: 21 },
    { food: 'Frozen Pizza', quantity: 25 },
]

const frozenFoodSlice = createSlice({
    name: 'frozenFood',
    initialState: frozenFoodInitialState,
    reducers: {
        getFood: (state, action) => {
            return state
        }
    }
})

export const frozenFoodSliceActions = frozenFoodSlice.actions
export const frozenFoodSliceReducers = frozenFoodSlice.reducer