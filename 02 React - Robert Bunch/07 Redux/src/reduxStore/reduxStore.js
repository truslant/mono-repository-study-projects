import { configureStore } from "@reduxjs/toolkit";
import { produceSliceReducer } from "./storeSlices/produceSlice";
import { meatSliceReducer } from "./storeSlices/meatSlice";

import { frozenFoodSlice } from "./storeSlices/frozenFoodSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const reduxStore = configureStore({
    reducer: {
        [frozenFoodSlice.reducerPath]: frozenFoodSlice.reducer,
        produceSlice: produceSliceReducer,
        meatSlice: meatSliceReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(frozenFoodSlice.middleware);
    }
});

setupListeners(reduxStore.dispatch);

export { reduxStore }

export { useFetchFrozenFoodQuery } from "./storeSlices/frozenFoodSlice";

export { produceSliceActions } from './storeSlices/produceSlice'
export { meatSliceActions } from './storeSlices/meatSlice'