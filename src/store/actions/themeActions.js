import { createAction } from "@reduxjs/toolkit";

// Constants
export const TOGGLED_THEME = createAction("TOGGLED_THEME");

// Action Creators
export const toggleTheme = () => {
  return TOGGLED_THEME();
};
