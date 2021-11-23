import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        wasLogin: (state, action) => {
            state.isLoggedIn = action.payload
        },
        notLogin: (state, _) => {
            state.isLoggedIn = null
        }
    }
})

export const { wasLogin, notLogin} = loginSlice.actions

export default loginSlice.reducer