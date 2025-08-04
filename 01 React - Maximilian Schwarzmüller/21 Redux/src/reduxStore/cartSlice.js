import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
    isVisible: true,

    items:
        [
            // {
            //     id: 1,
            //     title: 'Apple',
            //     price: 2,
            //     description: 'Fresh apples from Ozbekistan',
            //     qty: 1
            // },
            // {
            //     id: 2,
            //     title: 'Orange',
            //     price: 1,
            //     description: 'The best oranges in the Country',
            //     qty: 1
            // },
        ],
}

const findIndex = (array, id) => {
    return array.findIndex(item => item.id === id)
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: cartInitialState,
    reducers: {
        addProduct: (state, action) => {
            const itemIndex = findIndex(state.items, action.payload.id);
            if (itemIndex < 0) {
                state.items.push({ ...action.payload, qty: 1 })
            } else {
                state.items[itemIndex].qty++
            }
        },

        increaseProduct: (state, action) => {
            const itemIndex = findIndex(state.items, action.payload.id);
            state.items[itemIndex].qty++
        },

        reduceProduct: (state, action) => {
            const itemIndex = findIndex(state.items, action.payload.id);
            if (state.items[itemIndex].qty < 2) {
                state.items.splice(itemIndex, 1);
            } else {
                state.items[itemIndex].qty--
            }
        },
        setVisibility: (state) => {
            state.isVisible = !state.isVisible;
        },
        fetchData: (state, action) => {
            return action.payload;
        }
    }
})

export const cartSliceReducer = cartSlice.reducer;
export const cartSliceActions = cartSlice.actions;