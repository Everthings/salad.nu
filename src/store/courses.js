import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as apiActions from "./api";

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
      courses.list = action.payload;
      courses.loading = false;
    },
    coursesRequestFailed: (courses, action) => {
      courses.list = action.payload;
      courses.loading = false;
    },
    coursesRecieved: (courses, action) => {
      courses.list = action.payload;
      courses.loading = false;
    },
  },
});

const {
  coursesRequested,
  coursesRequestFailed,
  coursesRecieved,
} = slice.actions;
export default slice.reducer;

// Action Creators
export const loadCourses = () => (dispatch, getState) => {
  return dispatch(
    apiActions.apiRequested({
      resource,
      onStart: coursesRequested.type,
      onError: coursesRequestFailed.type,
      onSuccess: coursesRecieved.type,
    })
  );
};

// Selectors
export const getCourses = (searchStr) =>
  createSelector(
    (state) => state.entities.courses,
    (courses) => {
      if (searchStr.length < 3) return [];

      const filterdCourses = courses.list.filter((course) => {
        const courseStr = `${course.subjectId} ${course.id}`.toLowerCase();
        return courseStr.includes(searchStr.toLowerCase());
      });
      return filterdCourses;
    }
  );
