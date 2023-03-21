import {createSlice} from "@reduxjs/toolkit";
import {IAuthState} from "../../../common/types/auth";

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
    isLogged: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login (state, action) {
            state.user = action.payload
            state.isLogged = true
        }
    }
})

export const {login} = authSlice.actions
export default authSlice.reducer