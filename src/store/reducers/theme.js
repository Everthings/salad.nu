import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { TOGGLED_THEME } from "../actions/themeActions";

const defaultTheme = "green";

// Reducers
const slice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: defaultTheme,
  },
  reducers: {},
  extraReducers: {
    [TOGGLED_THEME]: (theme, action) => {
      theme.currentTheme = theme.currentTheme === "green" ? "dark" : "green";
    },
  },
});
export default slice.reducer;

// Selectors
export const getTheme = createSelector(
  (state) => state.theme,
  (theme) => theme.currentTheme
);
