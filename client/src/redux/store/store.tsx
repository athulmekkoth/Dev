import { configureStore } from "@reduxjs/toolkit";
import Userslice from "./slices/Userslice";

export const store = configureStore({
  reducer: {
    user: Userslice, 
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;