import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { loadState, saveState } from "./../utils/storageUtils";
import api from "./middleware/api";

export default function () {
  const persistedState = loadState();
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState,
    middleware: [...getDefaultMiddleware(), api],
  });

  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
}
