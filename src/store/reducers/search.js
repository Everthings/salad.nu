import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  UPDATED_SEARCH,
  UPDATED_SCHOOL,
  CLEARED_SCHOOL,
  UPDATED_SUBJECT,
  CLEARED_SUBJECT,
} from "./../actions/searchActions";

const defaultSearch = "";
const defaultSchool = "";
const defaultSubject = "";

const resetSearch = (search) => {
  search.searchStr = defaultSearch;
};

const resetSchool = (search) => {
  search.school = defaultSchool;
};

const resetSubject = (search) => {
  search.subject = defaultSubject;
};

// Reducers
const slice = createSlice({
  name: "search",
  initialState: {
    school: defaultSchool,
    subject: defaultSubject,
    searchStr: defaultSearch,
  },
  reducers: {},
  extraReducers: {
    [UPDATED_SEARCH]: (search, action) => {
      search.searchStr = action.payload.searchStr;
    },
    [UPDATED_SCHOOL]: (search, action) => {
      search.school = action.payload.school;
      resetSubject(search);
    },
    [CLEARED_SCHOOL]: (search, action) => {
      resetSchool(search);
      resetSubject(search);
      resetSearch(search);
    },
    [UPDATED_SUBJECT]: (search, action) => {
      search.subject = action.payload.subject;
    },
    [CLEARED_SUBJECT]: (search, action) => {
      resetSubject(search);
      resetSearch(search);
    },
  },
});
export default slice.reducer;

// Selectors
export const getSearch = createSelector(
  (state) => state.search,
  (search) => search.searchStr
);

export const getSchool = createSelector(
  (state) => state.search,
  (search) => search.school
);

export const getSubject = createSelector(
  (state) => state.search,
  (search) => search.subject
);
