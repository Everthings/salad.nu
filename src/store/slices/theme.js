import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const defaultTheme = "green";

// Reducers
const slice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: defaultTheme,
  },
  reducers: {
    toggledTheme: (theme, action) => {
      const newTheme = action.payload.theme === "green" ? "dark" : "green";
      theme.currentTheme = newTheme;
    },
  },
});

const { toggledTheme } = slice.actions;
export default slice.reducer;

// Action Creators
export const toggleTheme = (theme) => {
  return toggledTheme({ theme });
};

// Selectors
export const getTheme = createSelector(
  (state) => state.entities.theme,
  (theme) => theme.currentTheme
);
