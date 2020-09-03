import { createAction } from "@reduxjs/toolkit";
import * as apiActions from "./../api";

// Constants
export const SUBJECTS_REQUESTED = createAction("SUBJECTS_REQUESTED");
export const SUBJECTS_REQUEST_FAILED = createAction("SUBJECTS_REQUEST_FAILED");
export const SUBJECTS_RECIEVED = createAction("SUBJECTS_RECIEVED");

// Action Creators
export const loadSubjects = (schoolSymbol) => (dispatch, getState) => {
  return dispatch(
    apiActions.API_REQUESTED({
      resource: "subjects",
      data: schoolSymbol,
      onStart: SUBJECTS_REQUESTED.type,
      onError: SUBJECTS_REQUEST_FAILED.type,
      onSuccess: SUBJECTS_RECIEVED.type,
    })
  );
};
