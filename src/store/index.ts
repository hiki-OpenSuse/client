import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./slice/auth";
import assetsSlice from "./slice/assets";
import watchlistSlice from './slice/watchlist';

const store = configureStore({
    reducer: {
        auth: authSlice,
        assets: assetsSlice,
        watchlist: watchlistSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store