import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

// Reducers
const slice = createSlice({
  name: "search",
  initialState: {
    str: "",
  },
  reducers: {
    updatedSearch: (search, action) => {
      search.str = action.payload.str;
    },
  },
});

const { updatedSearch, clearedSearch } = slice.actions;
export default slice.reducer;

// Action Creators
export const updateSearch = (searchStr) => (dispatch, getState) => {
  return dispatch(updatedSearch({ str: searchStr }));
};

// Selectors
export const getSearch = createSelector(
  (state) => state.entities.search,
  (search) => search.str
);
