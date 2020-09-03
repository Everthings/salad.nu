import { createAction } from "@reduxjs/toolkit";

export const API_REQUESTED = createAction("api/API_REQUESTED");
export const API_SUCCESS = createAction("api/API_SUCCESS");
export const API_FAILED = createAction("api/API_FAILED");
