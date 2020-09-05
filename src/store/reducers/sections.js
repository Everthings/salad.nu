import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  SECTIONS_REQUESTED,
  SECTIONS_REQUEST_FAILED,
  SECTIONS_RECIEVED,
} from "./../actions/sectionActions";

// Reducers
const slice = createSlice({
  name: "sections",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [SECTIONS_REQUESTED]: (sections, action) => {
      sections.loading = true;
    },
    [SECTIONS_REQUEST_FAILED]: (sections, action) => {
      sections.loading = false;
    },
    [SECTIONS_RECIEVED]: (sections, action) => {
      sections.list = action.payload.data;
      sections.loading = false;
    },
  },
});
export default slice.reducer;

// Selectors
export const getSections = createSelector(
  (state) => state.sections,
  (sections) => sections.list
);

export const getSection = (id) =>
  createSelector(
    (state) => state.sections,
    (sections) => sections.list.find((section) => section.unique_id === id)
  );

export const isLoadingSections = createSelector(
  (state) => state.sections,
  (sections) => sections.loading
);
