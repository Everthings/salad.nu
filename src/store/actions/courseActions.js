import { createAction } from "@reduxjs/toolkit";
import * as apiActions from "./../api";
import { getMaximumStrPartLength } from "./../../utils/searchUtils";
import { MIN_SEARCH_LENGTH } from "./../../configs";

// Constants
export const COURSES_REQUESTED = createAction("COURSES_REQUESTED");
export const COURSES_REQUEST_FAILED = createAction("COURSES_REQUEST_FAILED");
export const COURSES_RECIEVED = createAction("COURSES_RECIEVED");

// Action Creators
export const loadCourses = (searchStr, school, subject) => (dispatch) => {
  const length = getMaximumStrPartLength(searchStr);
  if (length >= MIN_SEARCH_LENGTH || (length === 0 && school && subject)) {
    return dispatch(
      apiActions.API_REQUESTED({
        resource: "courses",
        data: { searchStr, school, subject },
        onStart: COURSES_REQUESTED.type,
        onError: COURSES_REQUEST_FAILED.type,
        onSuccess: COURSES_RECIEVED.type,
      })
    );
  }
};
