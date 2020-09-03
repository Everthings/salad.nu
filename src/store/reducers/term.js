import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  TERM_REQUESTED,
  TERM_REQUEST_FAILED,
  TERM_RECIEVED,
} from "./../actions/termActions";

// Reducers
const slice = createSlice({
  name: "term",
  initialState: {
    currentTerm: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [TERM_REQUESTED]: (term, action) => {
      term.loading = true;
    },
    [TERM_REQUEST_FAILED]: (term, action) => {
      term.loading = false;
    },
    [TERM_RECIEVED]: (term, action) => {
      term.currentTerm = action.payload.data;
      term.loading = false;
    },
  },
});
export default slice.reducer;

// Selectors
export const getTerm = createSelector(
  (state) => state.term,
  (term) => term.currentTerm
);
