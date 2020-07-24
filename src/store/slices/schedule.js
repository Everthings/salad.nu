import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

// Reducers
const slice = createSlice({
  name: "schedule",
  initialState: {
    list: [],
  },
  reducers: {
    courseAdded: (schdule, action) => {
      schdule.list.push(action.payload);
    },
    courseRemoved: (schdule, action) => {
      console.log(schdule);
      console.log(action);
      schdule.list = schdule.list.filter(
        (course) => course.unique_id !== action.payload
      );
    },
  },
});

const { courseAdded, courseRemoved } = slice.actions;
export default slice.reducer;

// Action Creators
export const addCourse = (course) => {
  return courseAdded(course);
};

export const removeCourse = (id) => {
  return courseRemoved(id);
};

export const getScheduledCourses = createSelector(
  (state) => state.entities.schedule.list,
  (schedule) => schedule
);
