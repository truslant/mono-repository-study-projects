import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";

import { frozenFoodSlice } from "./storeSlices/frozenFoodSlice";
import { meatSlice } from "./storeSlices/meatSlice";
import { produceSlice } from "./storeSlices/produceSlice";

const reduxStore = configureStore({
    reducer: {
        [frozenFoodSlice.reducerPath]: frozenFoodSlice.reducer,
        [meatSlice.reducerPath]: meatSlice.reducer,
        [produceSlice.reducerPath]: produceSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(frozenFoodSlice.middleware).concat(meatSlice.middleware).concat(produceSlice.middleware);
    }
});

setupListeners(reduxStore.dispatch);

window.store = reduxStore

export { reduxStore }

export { produceSliceActions } from './storeSlices/produceSlice'