import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  COURSES_REQUESTED,
  COURSES_REQUEST_FAILED,
  COURSES_RECIEVED,
} from "../actions/courseActions";

// Reducers
const slice = createSlice({
  name: "courses",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [COURSES_REQUESTED]: (courses, action) => {
      courses.loading = true;
    },
    [COURSES_REQUEST_FAILED]: (courses, action) => {
      courses.loading = false;
    },
    [COURSES_RECIEVED]: (courses, action) => {
      courses.list = action.payload.data;
      courses.loading = false;
    },
  },
});
export default slice.reducer;

// Selectors
export const getCourses = createSelector(
  (state) => state.courses,
  (courses) => courses.list
);

export const isLoadingCourses = createSelector(
  (state) => state.courses,
  (courses) => courses.loading
);
