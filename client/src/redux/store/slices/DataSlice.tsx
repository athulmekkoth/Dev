import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const saveData = createAsyncThunk('mail/save', async (data: { content: string, title: string }, { rejectWithValue }) => {
    try {
        console.log(data)
        const result = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/content/create`,
            data,
            { withCredentials: true }
          );
          
        return result.data;
    } catch (error:any) {
        return rejectWithValue(error.response.data);
    }
});


// export const getData = createAsyncThunk('mail/getall', async () => {
//     try {
//         console.log(data)
//         const result = await axios.post(
//             `${import.meta.env.VITE_BASE_URL}/content/create`,
//             data,
//             { withCredentials: true }
//           );
          
//         return result.data;
//     } catch (error:any) {
//         return rejectWithValue(error.response.data);
//     }
// });