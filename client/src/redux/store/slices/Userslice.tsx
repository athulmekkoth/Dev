import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("user/login", async (data: { email: string, password: string,}) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, data, { withCredentials: true });
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const createUser = createAsyncThunk("user/create", async (data: { email: string, password: string, name: string }) => {
  console.log(data);
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
});
type user={
  id:string,
  name:string,
  isAdmin:boolean
  token:string
}
type initialState=
{
  user: user|null,
  pending: boolean,
  fulfilled: boolean,
  rejected: boolean
}
  
const initialState:initialState = {
  user: null,
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
      .addCase(loginUser.fulfilled, (state, action:PayloadAction<user>) => {
        state.pending = false;
        state.user = action.payload.user;
        console.log(JSON.stringify(state.user));
      
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
        state.users=[...action.payload];
      })
      .addCase(createUser.rejected, (state, action) => {
        state.pending= false;
        state.rejected = true;  
      });
  },
});

export const { actions, reducer } = userSlice;
export default userSlice.reducer;