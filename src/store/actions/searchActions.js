import { createAction } from "@reduxjs/toolkit";
import { loadCourses } from "./courseActions";
import { loadSubjects } from "./subjectActions";
import { getMaximumStrPartLength } from "./../../utils/searchUtils";
import { MIN_SEARCH_LENGTH } from "./../../configs";

// Constants
export const UPDATED_SEARCH = createAction("UPDATED_SEARCH");
export const UPDATED_SCHOOL = createAction("UPDATED_SCHOOL");
export const CLEARED_SCHOOL = createAction("CLEARED_SCHOOL");
export const UPDATED_SUBJECT = createAction("UPDATED_SUBJECT");
export const CLEARED_SUBJECT = createAction("CLEARED_SUBJECT");

// Action Creators
export const updateSearch = (oldStr, newStr, school, subject) => async (
  dispatch,
  getState
) => {
  await dispatch(UPDATED_SEARCH({ searchStr: newStr, school, subject }));

  const length = getMaximumStrPartLength(newStr);
  if (length >= MIN_SEARCH_LENGTH || (length === 0 && school && subject))
    await dispatch(loadCourses(oldStr, newStr, school, subject));
};

export const updateSchool = (school) => (dispatch) => {
  dispatch(UPDATED_SCHOOL({ school }));
  dispatch(loadSubjects(school));
};

export const clearSchool = () => {
  return CLEARED_SCHOOL();
};

export const updateSubject = (school, subject) => (dispatch, getState) => {
  dispatch(UPDATED_SUBJECT({ subject }));
  dispatch(loadCourses("", "", school, subject));
};

export const clearSubject = () => {
  return CLEARED_SUBJECT();
};
