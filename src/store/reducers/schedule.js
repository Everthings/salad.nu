import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  ADDED_SECTION_TO_SCHEDULE,
  REMOVED_SECTION_FROM_SCHEDULE,
} from "./../actions/scheduleActions";

// Reducers
const slice = createSlice({
  name: "schedule",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: {
    [ADDED_SECTION_TO_SCHEDULE]: (schedule, action) => {
      schedule.list.push({ ...action.payload.section, scheduled: true });
    },
    [REMOVED_SECTION_FROM_SCHEDULE]: (schedule, action) => {
      schedule.list = schedule.list.filter(
        (section) => section.unique_id !== action.payload.unique_id
      );
    },
  },
});
export default slice.reducer;

// Selectors
export const getScheduledSections = createSelector(
  (state) => state.schedule.list,
  (schedule) => schedule
);
