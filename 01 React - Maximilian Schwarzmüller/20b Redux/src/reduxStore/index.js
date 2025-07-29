import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    toggleShow: true,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            state.counter++;
        },
        decrement(state, action) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload
        },
        toogleShow(state, action) {
            state.toggleShow = !state.toggleShow;
        },
    }
})

export const counterSliceActions = counterSlice.actions

// const counterReducer = (state = initialState, action) => {
//     console.log('counterReducer Activated')
//     switch (action.type) {
//         case 'increment':
//             console.log('Increment action activated')
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }
//         case 'decrement':
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
//         case 'increase':
//             return {
//                 ...state,
//                 counter: state.counter + action.payload
//             }
//         case 'toggleShow':
//             console.log('Toggle show activated')
//             return {
//                 ...state,
//                 toggleShow: !state.toggleShow
//             }
//         default:
//             console.log('default activated')
//             return state
//     }
// }

// const reduxStore = createStore(counterSlice.reducer);

const reduxStore = configureStore({
    reducer: counterSlice.reducer
})


export default reduxStore;