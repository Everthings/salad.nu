import { createAction } from "@reduxjs/toolkit";
import * as apiActions from "./../api";

// Constants
export const DISCUSSIONS_REQUESTED = createAction("DISCUSSIONS_REQUESTED");
export const DISCUSSIONS_REQUEST_FAILED = createAction(
  "DISCUSSIONS_REQUEST_FAILED"
);
export const DISCUSSIONS_RECIEVED = createAction("DISCUSSIONS_RECIEVED");

// Action Creators
export const loadDiscussions = (courseId) => (dispatch, getState) => {
  return dispatch(
    apiActions.API_REQUESTED({
      resource: "discussions",
      data: courseId,
      onStart: DISCUSSIONS_REQUESTED.type,
      onError: DISCUSSIONS_REQUEST_FAILED.type,
      onSuccess: DISCUSSIONS_RECIEVED.type,
    })
  );
};
