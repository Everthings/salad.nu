import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

// Reducers
const slice = createSlice({
  name: "search",
  initialState: {
    searchStr: "",
    selectedCourse: { id: -1, name: "" },
  },
  reducers: {
    updatedSearch: (search, action) => {
      search.searchStr = action.payload.searchStr;
    },
    updatedSelectedCourse: (search, action) => {
      search.selectedCourse.id = action.payload.id;
      search.selectedCourse.name = action.payload.name;
    },
  },
});

const { updatedSearch, updatedSelectedCourse } = slice.actions;
export default slice.reducer;

// Action Creators
export const updateSearch = (searchStr) => (dispatch, getState) => {
  return dispatch(updatedSearch({ searchStr }));
};

export const updateSelectedCourse = (id, name) => (dispatch, getState) => {
  return dispatch(updatedSelectedCourse({ id, name }));
};

// Selectors
export const getSearch = createSelector(
  (state) => state.entities.search,
  (search) => search.searchStr
);

export const getSelectedCourse = createSelector(
  (state) => state.entities.search,
  (search) => search.selectedCourse
);
