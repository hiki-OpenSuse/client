import { instanceAuth } from './../../../utils/axios/index';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getWatchlistElements = createAsyncThunk(
    'watchlist/get-elements',
    async (_, { rejectWithValue }) => {
        try {
            const userAssets = await instanceAuth.get('watchlist/get-elements')
            return userAssets.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)

export const deleteWatchlistElements = createAsyncThunk(
    'watchlist/delete-element',
    async (id: number, { rejectWithValue }) => {
        try {
            const deleteElement = await instanceAuth.delete(`watchlist/delete-element?id=${id}`)
            return deleteElement.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)