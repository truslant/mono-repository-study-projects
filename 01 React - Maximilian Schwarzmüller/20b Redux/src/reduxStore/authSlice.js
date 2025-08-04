import { createSlice } from '@reduxjs/toolkit'

const authInitialState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState: authInitialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true
        },
        logout: (state, action) => {
            state.isAuthenticated = false
        }
    }
})

export const authSliceActions = authSlice.actions;
export const authSliceReducer = authSlice.reducer;