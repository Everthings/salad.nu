import { createAction } from "@reduxjs/toolkit";
import * as apiActions from "./../api";

// Constants
export const TERM_REQUESTED = createAction("TERM_REQUESTED");
export const TERM_REQUEST_FAILED = createAction("TERM_REQUEST_FAILED");
export const TERM_RECIEVED = createAction("TERM_RECIEVED");

// Action Creators
export const loadTerm = (termId) => (dispatch, getState) => {
  return dispatch(
    apiActions.API_REQUESTED({
      resource: "term",
      data: termId,
      onStart: TERM_REQUESTED.type,
      onError: TERM_REQUEST_FAILED.type,
      onSuccess: TERM_RECIEVED.type,
    })
  );
};
