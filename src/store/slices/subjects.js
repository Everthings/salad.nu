import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as apiActions from "./../api";

// Reducers
const resource = "subjects";

const slice = createSlice({
  name: "subjects",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    subjectsRequested: (subjects, action) => {
      subjects.loading = true;
    },
    subjectsRequestFailed: (subjects, action) => {
      subjects.loading = false;
    },
    subjectsRecieved: (subjects, action) => {
      subjects.list = action.payload.data;
      subjects.loading = false;
    },
  },
});

const {
  subjectsRequested,
  subjectsRequestFailed,
  subjectsRecieved,
} = slice.actions;
export default slice.reducer;

// Action Creators
export const loadSubjects = (schoolSymbol) => (dispatch, getState) => {
  return dispatch(
    apiActions.apiRequested({
      resource,
      data: schoolSymbol,
      onStart: subjectsRequested.type,
      onError: subjectsRequestFailed.type,
      onSuccess: subjectsRecieved.type,
    })
  );
};

// Selectors
export const getSubjects = createSelector(
  (state) => state.subjects,
  (subjects) => subjects.list
);
