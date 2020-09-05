import { createAction } from "@reduxjs/toolkit";
import { loadSections } from "./sectionActions";
import { loadDiscussions } from "./discussionActions";
import { removeSectionFromSchedule } from "./scheduleActions";
import { loadBuilding } from "./buildingActions";

// Constants
export const SELECTED_COURSE = createAction("SELECTED_COURSE");
export const UNSELECTED_COURSE = createAction("UNSELECTED_COURSE");
export const SHOW_SECTION_INFO = createAction("SHOW_SECTION_INFO");
export const HIDE_SECTION_INFO = createAction("HIDE_SECTION_INFO");
export const HOVERED_SCHEDULED_SECTION = createAction(
  "HOVERED_SCHEDULED_SECTION"
);
export const UNHOVERED_SCHEDULED_SECTION = createAction(
  "UNHOVERED_SCHEDULED_SECTION"
);
export const HOVERED_SECTION = createAction("HOVERED_SECTION");
export const UNHOVERED_SECTION = createAction("UNHOVERED_SECTION");
export const UPDATED_CURRENT_BUILDING = createAction(
  "UPDATED_CURRENT_BUILDING"
);

// Action Creators
export const selectCourse = (id) => {
  return SELECTED_COURSE({ id });
};

export const unselectCourse = () => {
  return UNSELECTED_COURSE();
};

export const showSectionInfo = (info) => {
  return SHOW_SECTION_INFO({ info });
};

export const removeAndHideSectionInfo = (unique_id) => (dispatch) => {
  dispatch(removeSectionFromSchedule(unique_id));
  dispatch(hideSectionInfo());
};

export const hideSectionInfo = () => {
  return HIDE_SECTION_INFO();
};

export const hoverScheduleCard = (id, room) => (dispatch) => {
  dispatch(HOVERED_SCHEDULED_SECTION({ id }));
  dispatch(loadBuilding(room));
};

export const unhoverScheduleCard = () => {
  return UNHOVERED_SCHEDULED_SECTION();
};

export const hoverSectionCard = (id, room) => (dispatch) => {
  dispatch(HOVERED_SECTION({ id }));
  dispatch(loadBuilding(room));
};

export const unhoverSectionCard = () => {
  return UNHOVERED_SECTION();
};
