import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const saveData = createAsyncThunk('mail/save', async (data: { content: string, title: string }, { rejectWithValue }) => {
    try {

const accessToken =
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/save`, data, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        // Return the result if successful
        return result.data;
    } catch (error) {
        // Return the rejected value with error if request fails
        return rejectWithValue(error.response.data);
    }
});