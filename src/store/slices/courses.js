import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as apiActions from "./../api";
import { filterCourses } from "./../../utils/searchUtils";

// Reducers
const resource = "courses";

const slice = createSlice({
  name: "courses",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    coursesRequested: (courses, action) => {
      courses.loading = true;
    },
    coursesRequestFailed: (courses, action) => {
      courses.loading = false;
    },
    coursesRecieved: (courses, action) => {
      const response = action.payload.data;
      const searchStr = action.payload.searchStr;
      courses.list = filterCourses(searchStr, response);
      courses.loading = false;
    },
    coursesRecievedFromStore: (courses, action) => {
      const searchStr = action.payload.searchStr;
      courses.list = filterCourses(searchStr, courses.list);
    },
  },
});

const {
  coursesRequested,
  coursesRequestFailed,
  coursesRecieved,
  coursesRecievedFromStore,
} = slice.actions;
export default slice.reducer;

// Action Creators
export const loadCourses = (searchStr) => (dispatch, getState) => {
  return dispatch(
    apiActions.apiRequested({
      resource,
      searchStr,
      onStart: coursesRequested.type,
      onError: coursesRequestFailed.type,
      onSuccess: coursesRecieved.type,
    })
  );
};

export const loadCoursesFromStore = (searchStr) => {
  return coursesRecievedFromStore({ searchStr });
};

// Selectors
export const getCourses = createSelector(
  (state) => state.courses,
  (courses) => courses.list
);
