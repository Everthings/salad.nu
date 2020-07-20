import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as apiActions from "../api";

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
      const reponse = action.payload.data;
      const searchStr = action.payload.searchStr;
      const filterdCourses = reponse.filter((course) => {
        const courseStr = `${course.subject} ${course.number} ${course.title}`.toLowerCase();
        return courseStr.includes(searchStr.toLowerCase());
      });
      courses.list = filterdCourses;
      courses.loading = false;
    },
    coursesRecievedFromStore: (courses, action) => {
      const searchStr = action.payload.searchStr.toLowerCase();
      const filterdCoursesName = [];
      const filterdCoursesTitle = [];
      for (const course of courses.list) {
        const courseName = `${course.subject} ${course.number}`.toLowerCase();
        const courseTitle = `${course.title}`.toLowerCase();

        if (courseName.includes(searchStr)) {
          filterdCoursesName.push(course);
        } else if (courseTitle.includes(searchStr)) {
          filterdCoursesTitle.push(course);
        }
      }
      const filterdCourses = [...filterdCoursesName, ...filterdCoursesTitle];
      courses.list = filterdCourses;
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
export const getCourses = () =>
  createSelector(
    (state) => state.entities.courses.list,
    (courses) => courses
  );
