import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  COURSES_REQUESTED,
  COURSES_REQUEST_FAILED,
  COURSES_RECIEVED,
  COURSES_RECIEVED_FROM_STORE,
} from "./../actions/courseActions";
import {
  filterCourses,
  filterCoursesBySchoolSubject,
} from "./../../utils/searchUtils";

const filter = (searchStr, school, subject, list) => {
  let filtered = filterCourses(searchStr, list);
  filtered = filterCoursesBySchoolSubject(school, subject, filtered);
  return filtered;
};

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
      const response = action.payload.data;
      const searchStr = action.payload.searchStr;
      const school = action.payload.school;
      const subject = action.payload.subject;
      courses.list = filter(searchStr, school, subject, response);
      courses.loading = false;
    },
    [COURSES_RECIEVED_FROM_STORE]: (courses, action) => {
      const searchStr = action.payload.searchStr;
      const school = action.payload.school;
      const subject = action.payload.subject;
      courses.list = filter(searchStr, school, subject, courses.list);
    },
  },
});
export default slice.reducer;

// Selectors
export const getCourses = createSelector(
  (state) => state.courses,
  (courses) => courses.list
);
