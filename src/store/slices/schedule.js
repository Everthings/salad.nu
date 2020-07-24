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
  },
});

const { courseAdded } = slice.actions;
export default slice.reducer;

// Action Creators
export const addCourse = (course) => {
  return courseAdded(course);
};

export const getScheduledCourses = createSelector(
  (state) => state.entities.schedule.list,
  (schedule) => schedule
);
