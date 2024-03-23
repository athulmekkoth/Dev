
import UserReducer from "./slices/Userslice";;
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
  
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  timeout: 24 * 60 * 60 * 1000,
}
const rootReducer = combineReducers({ user: UserReducer});
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
