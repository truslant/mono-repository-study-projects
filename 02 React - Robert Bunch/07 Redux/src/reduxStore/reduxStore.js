import { configureStore } from "@reduxjs/toolkit";
import { frozenFoodSliceReducers } from "./storeSlices/frozenFoodSlice";
import { produceSliceReducer } from "./storeSlices/produceSlice";
import { meatSliceReducer } from "./storeSlices/meatSlice";
const reduxStore = configureStore({
    reducer: {
        frozenFoodSlice: frozenFoodSliceReducers,
        produceSlice: produceSliceReducer,
        meatSlice: meatSliceReducer,
    }
});

export { reduxStore }

export { frozenFoodSliceActions } from './storeSlices/frozenFoodSlice'
export { produceSliceActions } from './storeSlices/produceSlice'
export { meatSliceActions } from './storeSlices/meatSlice'