import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

// Reducers
const slice = createSlice({
  name: "schedule",
  initialState: {
    list: [],
  },
  reducers: {
    sectionAdded: (schedule, action) => {
      schedule.list.push(action.payload);
    },
    sectionRemoved: (schedule, action) => {
      schedule.list = schedule.list.filter(
        (section) => section.unique_id !== action.payload
      );
    },
  },
});

const { sectionAdded, sectionRemoved } = slice.actions;
export default slice.reducer;

// Action Creators
export const addSection = (section) => {
  return sectionAdded(section);
};

export const removeSection = (id) => {
  return sectionRemoved(id);
};

export const getScheduledSections = createSelector(
  (state) => state.entities.schedule.list,
  (schedule) => schedule
);
