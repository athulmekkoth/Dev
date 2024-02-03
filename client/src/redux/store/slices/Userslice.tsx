import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//actions
// actions
export const loginUser = createAsyncThunk("user/login", async (data) => {
  try {
    const res = await axios.post("http://localhost:3000/user/login", data);
    return res.status;
  } catch (error) {
    throw error;  // You might want to handle errors in your reducer or dispatch additional actions
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users:[],
    loading: false,
  error:null
    
   
  },
  reducers: {
    
  },
});

export const { actions, reducer } = userSlice;
export default userSlice.reducer;