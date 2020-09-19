import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  SCHOOLS_REQUESTED,
  SCHOOLS_REQUEST_FAILED,
  SCHOOLS_RECIEVED,
} from "./../actions/schoolActions";

// Reducers
const slice = createSlice({
  name: "schools",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [SCHOOLS_REQUESTED]: (schools, action) => {
      schools.loading = true;
    },
    [SCHOOLS_REQUEST_FAILED]: (schools, action) => {
      schools.loading = false;
    },
    [SCHOOLS_RECIEVED]: (schools, action) => {
      schools.list = action.payload.data;
      schools.loading = false;
    },
  },
});
export default slice.reducer;

// Selectors
export const getSchools = createSelector(
  (state) => state.schools,
  (schools) => schools.list
);

export const isLoadingSchools = createSelector(
  (state) => state.schools,
  (schools) => schools.loading
);
