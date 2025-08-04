import { configureStore } from '@reduxjs/toolkit';
import { counterSliceReducer } from './counterSlice'
import { authSliceReducer } from './authSlice'


const reduxStore = configureStore({
    reducer: {
        counterSlice: counterSliceReducer,
        authSlice: authSliceReducer
    }
})

export default reduxStore;


// const counterInitialState = {
//     counter: 0,
//     toggleShow: true,
// }

// const counterSlice = createSlice({
//     name: 'counterSlice',
//     initialState: counterInitialState,
//     reducers: {
//         increment(state, action) {
//             state.counter++;
//         },
//         decrement(state, action) {
//             state.counter--;
//         },
//         increase(state, action) {
//             state.counter += action.payload
//         },
//         toogleShow(state, action) {
//             state.toggleShow = !state.toggleShow;
//         },
//     }
// })

// const authInitialState = {
//     isAuthenticated: false
// }

// const authSlice = createSlice({
//     name: 'authSlice',
//     initialState: authInitialState,
//     reducers: {
//         login: (state, action) => {
//             state.isAuthenticated = true
//         },
//         logout: (state, action) => {
//             state.isAuthenticated = false
//         }
//     },
// })

// export const authSliceActions = authSlice.actions;

// export const counterSliceActions = counterSlice.actions