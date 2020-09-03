import { createAction } from "@reduxjs/toolkit";
import * as apiActions from "./../api";
import { getMaximumStrPartLength } from "./../../utils/searchUtils";
import { MIN_SEARCH_LENGTH } from "./../../configs";

// Constants
export const COURSES_REQUESTED = createAction("COURSES_REQUESTED");
export const COURSES_REQUEST_FAILED = createAction("COURSES_REQUEST_FAILED");
export const COURSES_RECIEVED = createAction("COURSES_RECIEVED");
export const COURSES_RECIEVED_FROM_STORE = createAction(
  "COURSES_RECIEVED_FROM_STORE"
);

// Action Creators
export const loadCourses = (oldStr, newStr, school, subject) => (dispatch) => {
  let action;
  const length = getMaximumStrPartLength(newStr);
  if (
    length > MIN_SEARCH_LENGTH &&
    newStr.includes(oldStr) &&
    newStr.length - oldStr.length === 1
  ) {
    action = COURSES_RECIEVED_FROM_STORE({
      searchStr: newStr,
      school,
      subject,
    });
  } else {
    action = apiActions.API_REQUESTED({
      resource: "courses",
      searchStr: newStr,
      school,
      subject,
      onStart: COURSES_REQUESTED.type,
      onError: COURSES_REQUEST_FAILED.type,
      onSuccess: COURSES_RECIEVED.type,
    });
  }

  return dispatch(action);
};
