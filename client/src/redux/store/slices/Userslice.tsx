import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const loginUser = createAsyncThunk("LoginUser", async (data: { email: string, password: string }) => {
  console.log(data)
  try {
    const res = await axios.post("http://localhost:3000/user/login", {email:data.email,password:data.password});
 console.log(res.data)
  } catch (error) {
    throw error; 
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users:[],
    pending: false,
    fulfilled: false,
    rejected: false,
  },
  reducers: {
    
  },
  extraReducers:(builder)=>{
    builder.addCase(loginUser.pending, (state, action) => {
      state.pending = true;
      state.fulfilled = false;
      state.rejected = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.pending = false;
      state.fulfilled = true;
      state.rejected = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.pending = false;
      state.fulfilled = false;
      state.rejected = true;
    });

  }
});

export const { actions, reducer } = userSlice;
export default userSlice.reducer;