import { createAction } from "@reduxjs/toolkit";
import * as apiActions from "./../api";

// Constants
export const SECTIONS_REQUESTED = createAction("SECTIONS_REQUESTED");
export const SECTIONS_REQUEST_FAILED = createAction("SECTIONS_REQUEST_FAILED");
export const SECTIONS_RECIEVED = createAction("SECTIONS_RECIEVED");

// Action Creators
export const loadSections = (courseId) => (dispatch, getState) => {
  return dispatch(
    apiActions.API_REQUESTED({
      resource: "sections",
      data: courseId,
      onStart: SECTIONS_REQUESTED.type,
      onError: SECTIONS_REQUEST_FAILED.type,
      onSuccess: SECTIONS_RECIEVED.type,
    })
  );
};
