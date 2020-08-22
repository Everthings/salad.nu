import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as apiActions from "./../api";

// Reducers
const resource = "schools";

const slice = createSlice({
  name: "schools",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    schoolsRequested: (schools, action) => {
      schools.loading = true;
    },
    schoolsRequestFailed: (schools, action) => {
      schools.loading = false;
    },
    schoolsRecieved: (schools, action) => {
      schools.list = action.payload.data;
      schools.loading = false;
    },
  },
});

const {
  schoolsRequested,
  schoolsRequestFailed,
  schoolsRecieved,
} = slice.actions;
export default slice.reducer;

// Action Creators
export const loadSchools = () => (dispatch, getState) => {
  return dispatch(
    apiActions.apiRequested({
      resource,
      onStart: schoolsRequested.type,
      onError: schoolsRequestFailed.type,
      onSuccess: schoolsRecieved.type,
    })
  );
};

// Selectors
export const getSchools = createSelector(
  (state) => state.schools,
  (schools) => schools.list
);
