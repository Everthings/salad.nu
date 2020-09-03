import { createAction } from "@reduxjs/toolkit";
import * as apiActions from "./../api";

// Constants
export const UPDATED_CURRENT_BUILDING = createAction(
  "UPDATED_CURRENT_BUILDING"
);

// Action Creators
export const loadBuilding = (room) =>
  apiActions.API_REQUESTED({
    resource: "buildings",
    data: room && room.building_id,
    onSuccess: UPDATED_CURRENT_BUILDING.type,
  });
