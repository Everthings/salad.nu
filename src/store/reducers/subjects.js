import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  SUBJECTS_REQUESTED,
  SUBJECTS_REQUEST_FAILED,
  SUBJECTS_RECIEVED,
} from "./../actions/subjectActions";

// Reducers
const slice = createSlice({
  name: "subjects",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [SUBJECTS_REQUESTED]: (subjects, action) => {
      subjects.loading = true;
    },
    [SUBJECTS_REQUEST_FAILED]: (subjects, action) => {
      subjects.loading = false;
    },
    [SUBJECTS_RECIEVED]: (subjects, action) => {
      subjects.list = action.payload.data;
      subjects.loading = false;
    },
  },
});
export default slice.reducer;

// Selectors
export const getSubjects = createSelector(
  (state) => state.subjects,
  (subjects) => subjects.list
);

export const isLoadingSubjects = createSelector(
  (state) => state.subjects,
  (subjects) => subjects.loading
);
