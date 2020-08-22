import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as apiActions from "./../api";
import {
  filterCourses,
  filterCoursesBySchoolSubject,
} from "./../../utils/searchUtils";

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
      const school = action.payload.school;
      const subject = action.payload.subject;
      let filtered = filterCourses(searchStr, response);
      filtered = filterCoursesBySchoolSubject(school, subject, filtered);
      courses.list = filtered;
      courses.loading = false;
    },
    coursesRecievedFromStore: (courses, action) => {
      const searchStr = action.payload.searchStr;
      const school = action.payload.school;
      const subject = action.payload.subject;
      let filtered = filterCourses(searchStr, courses.list);
      filtered = filterCoursesBySchoolSubject(school, subject, filtered);
      courses.list = filtered;
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
export const loadCourses = () => (dispatch, getState) => {
  const searchStr = getState().search.searchStr;
  const school = getState().search.school;
  const subject = getState().search.subject;

  return dispatch(
    apiActions.apiRequested({
      resource,
      searchStr,
      school,
      subject,
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
