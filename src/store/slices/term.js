import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as apiActions from "../api";

// Reducers
const resource = "term";

const slice = createSlice({
  name: "term",
  initialState: {
    currentTerm: {},
    loading: false,
  },
  reducers: {
    termRequested: (term, action) => {
      term.loading = true;
    },
    termRequestFailed: (term, action) => {
      term.loading = false;
    },
    termRecieved: (term, action) => {
      term.currentTerm = action.payload.data;
      term.loading = false;
    },
  },
});

const { termRequested, termRequestFailed, termRecieved } = slice.actions;
export default slice.reducer;

// Action Creators
export const loadTerm = (termId) => (dispatch, getState) => {
  return dispatch(
    apiActions.apiRequested({
      resource,
      data: termId,
      onStart: termRequested.type,
      onError: termRequestFailed.type,
      onSuccess: termRecieved.type,
    })
  );
};

// Selectors
export const getTerm = createSelector(
  (state) => state.entities.term,
  (term) => term.currentTerm
);
