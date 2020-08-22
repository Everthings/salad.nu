import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const defaultSchool = "";
const defaultSubject = "";

// Reducers
const slice = createSlice({
  name: "search",
  initialState: {
    school: defaultSchool,
    subject: defaultSubject,
    searchStr: "",
  },
  reducers: {
    updatedSearch: (interactions, action) => {
      interactions.searchStr = action.payload.searchStr;
    },
    updatedSchool: (interactions, action) => {
      interactions.school = action.payload.school;
    },
    clearedSchool: (interactions, action) => {
      interactions.school = defaultSchool;
    },
    updatedSubject: (interactions, action) => {
      interactions.subject = action.payload.subject;
    },
    clearedSubject: (interactions, action) => {
      interactions.subject = defaultSubject;
    },
  },
});

const {
  updatedSearch,
  updatedSchool,
  clearedSchool,
  updatedSubject,
  clearedSubject,
} = slice.actions;
export default slice.reducer;

// Action Creators
export const updateSearch = (searchStr) => {
  return updatedSearch({ searchStr });
};

export const updateSchool = (school) => {
  return updatedSchool({ school });
};

export const clearSchool = () => {
  return clearedSchool();
};

export const updateSubject = (subject) => {
  return updatedSubject({ subject });
};

export const clearSubject = () => {
  return clearedSubject();
};

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
