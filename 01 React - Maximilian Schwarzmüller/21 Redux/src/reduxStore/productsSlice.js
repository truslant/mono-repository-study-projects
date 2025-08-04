import { createSlice } from "@reduxjs/toolkit";

const productsInitialState = {
    products: [
        { id: 1, title: 'Apple', price: 2, description: 'Fresh apples from Ozbekistan' },
        { id: 2, title: 'Orange', price: 1, description: 'The best oranges in the Country' },
        { id: 3, title: 'Watermelon', price: 4, description: 'These watermelons made a long way to delight you!' },
        { id: 4, title: 'Peach', price: 5, description: 'Very sweet and very tender from the heartlands of Eurasia' },
        { id: 5, title: 'Pear', price: 2, description: 'These pears were grown in the mountenous forests of Kazakhstan to boost your mood!' }
    ],
    notification: null,
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: productsInitialState,
    reducers: {
        showNotification: (state, action) => {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
})

export const productsSliceReducer = productsSlice.reducer;
export const productsSliceActions = productsSlice.actions;