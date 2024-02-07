import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("user/login", async (data: { email: string, password: string,}) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const createUser = createAsyncThunk("user/create", async (data: { email: string, password: string, name: string }) => {
  console.log(data);
  try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
});
type User={
  id:number,
  name:string,
  isAdmin:boolean
}
type initialState=
{
  users: User[],
  pending: boolean,
  fulfilled: boolean,
  rejected: boolean
}
  
const initialState:initialState = {
  users: [],
  pending: false,
  fulfilled: false,
  rejected: false,

}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(loginUser.fulfilled, (state, action:PayloadAction<User[]>) => {
        state.pending = false;
        console.log(action.payload);
        state.users.push(action.payload)
        console.log(JSON.stringify(state.users));
      
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.pending= false;
        state.rejected = true;
      })
      .addCase(createUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.pending = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.pending= false;
        state.rejected = true;  
      });
  },
});

export const { actions, reducer } = userSlice;
export default userSlice.reducer;
