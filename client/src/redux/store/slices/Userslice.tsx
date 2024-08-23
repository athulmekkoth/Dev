import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunks
export const loginUser = createAsyncThunk("user/login", async (data: { email: string; password: string }) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, data, { withCredentials: true });
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const createUser = createAsyncThunk("user/create", async (data: { email: string; password: string; name: string }) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
});

// Types
type User = {
  id: string;
  name: string;
  isAdmin: boolean;
  token: string;
};

type UserState = {
  user: User | null;
  pending: boolean;
  fulfilled: boolean;
  rejected: boolean;
};

// Initial State
const initialState: UserState = {
  user: null,
  pending: false,
  fulfilled: false,
  rejected: false,
};

// Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.pending = false;
        state.fulfilled = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.pending = false;
        state.rejected = true;
      })
      .addCase(createUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.pending = false;
        state.fulfilled = true;
        // Assuming you want to handle the user data for newly created user, which is similar to login
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state) => {
        state.pending = false;
        state.rejected = true;
      });
  },
});

export const { actions, reducer } = userSlice;
export default userSlice.reducer;
