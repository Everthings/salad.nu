import { createAction } from "@reduxjs/toolkit";

export const apiRequested = createAction("api/apiRequested");
export const apiSuccess = createAction("api/apiSuccess");
export const apiFailed = createAction("api/apiFailed");
