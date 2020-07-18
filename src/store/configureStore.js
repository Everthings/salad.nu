import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import api from "./middleware/api";

export default function () {
  return configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), api],
  });
}
