import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as apiActions from "../api";

// Reducers
const resource = "sections";

const slice = createSlice({
  name: "sections",
  initialState: {
    list: [],
    str: "",
  },
  reducers: {
    sectionsRequested: (sections, action) => {
      sections.loading = true;
    },
    sectionsRequestFailed: (sections, action) => {
      sections.loading = false;
    },
    sectionsRecieved: (sections, action) => {
      sections.list = action.payload.data;
      sections.loading = false;
    },
  },
});

const {
  sectionsRequested,
  sectionsRequestFailed,
  sectionsRecieved,
} = slice.actions;
export default slice.reducer;

// Action Creators
export const loadSections = (courseId) => (dispatch, getState) => {
  return dispatch(
    apiActions.apiRequested({
      resource,
      data: courseId,
      onStart: sectionsRequested.type,
      onError: sectionsRequestFailed.type,
      onSuccess: sectionsRecieved.type,
    })
  );
};

// Selectors
export const getSections = () =>
  createSelector(
    (state) => state.entities.sections.list,
    (sections) => sections
  );
