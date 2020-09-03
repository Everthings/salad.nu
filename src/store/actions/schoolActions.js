import { createAction } from "@reduxjs/toolkit";
import * as apiActions from "./../api";

// Constants
export const SCHOOLS_REQUESTED = createAction("SCHOOLS_REQUESTED");
export const SCHOOLS_REQUEST_FAILED = createAction("SCHOOLS_REQUEST_FAILED");
export const SCHOOLS_RECIEVED = createAction("SCHOOLS_RECIEVED");

// Action Creators
export const loadSchools = () => (dispatch, getState) => {
  return dispatch(
    apiActions.API_REQUESTED({
      resource: "schools",
      onStart: SCHOOLS_REQUESTED.type,
      onError: SCHOOLS_REQUEST_FAILED.type,
      onSuccess: SCHOOLS_RECIEVED.type,
    })
  );
};
