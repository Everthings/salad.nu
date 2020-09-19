import { createAction } from "@reduxjs/toolkit";

// Constants
export const UPDATED_SEARCH = createAction("UPDATED_SEARCH");
export const UPDATED_SCHOOL = createAction("UPDATED_SCHOOL");
export const CLEARED_SCHOOL = createAction("CLEARED_SCHOOL");
export const UPDATED_SUBJECT = createAction("UPDATED_SUBJECT");
export const CLEARED_SUBJECT = createAction("CLEARED_SUBJECT");

// Action Creators
export const updateSearch = (searchStr) => {
  return UPDATED_SEARCH({ searchStr });
};

export const updateSchool = (school) => {
  return UPDATED_SCHOOL({ school });
};

export const clearSchool = () => {
  return CLEARED_SCHOOL();
};

export const updateSubject = (subject) => {
  return UPDATED_SUBJECT({ subject });
};

export const clearSubject = () => {
  return CLEARED_SUBJECT();
};
