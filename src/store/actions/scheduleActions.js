import { createAction } from "@reduxjs/toolkit";

// Constants
export const ADDED_SECTION_TO_SCHEDULE = createAction(
  "ADDED_SECTION_TO_SCHEDULE"
);
export const REMOVED_SECTION_FROM_SCHEDULE = createAction(
  "REMOVED_SECTION_FROM_SCHEDULE"
);

// Action Creators
export const addSectionToSchedule = (section) => {
  return ADDED_SECTION_TO_SCHEDULE({ section });
};

export const removeSectionFromSchedule = (unique_id) => {
  return REMOVED_SECTION_FROM_SCHEDULE({ unique_id });
};
