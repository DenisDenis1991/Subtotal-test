import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { nasaApi } from "./nasaApi";
import { rocketsApi } from "./rocketApi";

const rootReducer = combineReducers({
  [nasaApi.reducerPath]: nasaApi.reducer,
  [rocketsApi.reducerPath]: rocketsApi.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(nasaApi.middleware, rocketsApi.middleware)
});