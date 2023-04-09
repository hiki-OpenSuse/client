import {createSlice} from "@reduxjs/toolkit";
import {IAuthState} from "../../../common/types/auth";
import {loginUser, registerUser} from "../../thunks/auth";

const initialState: IAuthState = {
    user: {
        id: null,
        firstName: '',
        userName: '',
        email: '',
        createdAT: '',
        updateAT: '',
        watchlist: [
            {
                id: null,
                name: '',
                assetId: '',
                createdAT: '',
                updateAT: '',
                user: null
            }
        ]
    },
    isLogged: false,
    isLoading: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogged = true
            state.isLoading = false
        })
        builder.addCase(loginUser.pending, (state, action) => {
            state.user = action.payload
            state.isLogged = false
            state.isLoading = true
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLogged = false
            state.isLoading = false
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogged = true
            state.isLoading = false
        })
        builder.addCase(registerUser.pending, (state, action) => {
            state.user = action.payload
            state.isLogged = false
            state.isLoading = true
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.isLogged = false
            state.isLoading = false
        })
    }
})
export default authSlice.reducer