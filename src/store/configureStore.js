import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import api from "./middleware/api";

export default function (persistedState) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState,
    middleware: [...getDefaultMiddleware(), api],
  });
  return store;
}
