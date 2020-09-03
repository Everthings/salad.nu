import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  SELECTED_COURSE,
  UNSELECTED_COURSE,
  SHOW_SECTION_INFO,
  HIDE_SECTION_INFO,
  HOVERED_SCHEDULED_SECTION,
  UNHOVERED_SCHEDULED_SECTION,
  HOVERED_SECTION,
  UNHOVERED_SECTION,
} from "./../actions/interactionActions";
import { UPDATED_CURRENT_BUILDING } from "./../actions/buildingActions";
import {
  UPDATED_SEARCH,
  CLEARED_SCHOOL,
  CLEARED_SUBJECT,
} from "./../actions/searchActions";
import {
  ADDED_SECTION_TO_SCHEDULE,
  REMOVED_SECTION_FROM_SCHEDULE,
} from "./../actions/scheduleActions";

const defaultSelectedCourse = { id: -1 };
const defaultSectionInfo = { info: null };
const defaultBuilding = { lat: null, lon: null };
const noBuilding = { lat: -360, lon: -360 };
const defaultHoveredScheduledSection = { id: -1 };
const defaultHoveredSection = { id: -1 };

const resetSelectedCourse = (interactions) => {
  interactions.selectedCourse = defaultSelectedCourse;
};

const resetSectionInfo = (interactions) => {
  interactions.sectionInfo = defaultSectionInfo;
};

const resetCurrentBuilding = (interactions) => {
  interactions.currentBuilding = defaultBuilding;
};

const setToNoCurrentBuilding = (interactions) => {
  interactions.currentBuilding = noBuilding;
};

const resetHoveredScheduledSection = (interactions) => {
  interactions.hoveredScheduledSection = defaultHoveredScheduledSection;
};

const resetHoveredSection = (interactions) => {
  interactions.hoveredSection = defaultHoveredSection;
};

// Reducers
const slice = createSlice({
  name: "interactions",
  initialState: {
    selectedCourse: defaultSelectedCourse,
    sectionInfo: defaultSectionInfo,
    currentBuilding: defaultBuilding,
    hoveredScheduledSection: defaultHoveredScheduledSection,
    hoveredSection: defaultHoveredSection,
  },
  reducers: {},
  extraReducers: {
    [SELECTED_COURSE]: (interactions, action) => {
      interactions.selectedCourse = action.payload;
    },
    [UNSELECTED_COURSE]: (interactions, action) => {
      resetSelectedCourse(interactions);
    },
    [SHOW_SECTION_INFO]: (interactions, action) => {
      interactions.sectionInfo = action.payload;
    },
    [HIDE_SECTION_INFO]: (interactions, action) => {
      resetSectionInfo(interactions);
    },
    [UPDATED_CURRENT_BUILDING]: (interactions, action) => {
      const response = action.payload.data;
      if (!response || !response.lat || !response.lon)
        setToNoCurrentBuilding(interactions);
      else
        interactions.currentBuilding = { lat: response.lat, lon: response.lon };
    },
    [HOVERED_SCHEDULED_SECTION]: (interactions, action) => {
      interactions.hoveredScheduledSection.id = action.payload.id;
    },
    [UNHOVERED_SCHEDULED_SECTION]: (interactions, action) => {
      resetHoveredScheduledSection(interactions);
      resetCurrentBuilding(interactions);
    },
    [HOVERED_SECTION]: (interactions, action) => {
      interactions.hoveredSection.id = action.payload.id;
    },
    [UNHOVERED_SECTION]: (interactions, action) => {
      resetHoveredSection(interactions);
      resetCurrentBuilding(interactions);
    },
    [ADDED_SECTION_TO_SCHEDULE]: (interactions, action) => {
      resetHoveredSection(interactions);
    },
    [REMOVED_SECTION_FROM_SCHEDULE]: (interactions, action) => {
      resetHoveredScheduledSection(interactions);
      resetCurrentBuilding(interactions);
    },
    [UPDATED_SEARCH]: (interactions, action) => {
      resetSelectedCourse(interactions);
    },
    [CLEARED_SCHOOL]: (interactions, action) => {
      resetSelectedCourse(interactions);
    },
    [CLEARED_SUBJECT]: (interactions, action) => {
      resetSelectedCourse(interactions);
    },
  },
});
export default slice.reducer;

// Selectors
export const getSelectedCourse = createSelector(
  (state) => state.interactions,
  (interactions) => interactions.selectedCourse
);

export const getSectionInfo = createSelector(
  (state) => state.interactions,
  (interactions) => interactions.sectionInfo
);

export const getCurrentBuilding = createSelector(
  (state) => state.interactions,
  (interactions) => interactions.currentBuilding
);

export const getHoveredScheduledSection = createSelector(
  (state) => state.interactions,
  (interactions) => interactions.hoveredScheduledSection
);

export const getHoveredSection = createSelector(
  (state) => state.interactions,
  (interactions) => interactions.hoveredSection
);
