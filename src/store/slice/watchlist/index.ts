import {createSlice} from "@reduxjs/toolkit";
import { deleteWatchlistElements, getWatchlistElements } from "../../thunks/watchlist";

const initialState: any = {
    assets: [],
    isDeleteElement: false
}

export const watchlistSlice = createSlice({
    name:'watchlist',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getWatchlistElements.fulfilled, (state, action) => {
            state.assets = action.payload
        }),
        builder.addCase(deleteWatchlistElements.fulfilled, (state, action) => {
            state.isDeleteElement = action.payload
        })
    }
})

export default watchlistSlice.reducer