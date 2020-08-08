import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as apiActions from "./../api";

const defaultSelectedCourse = { id: -1 };
const defaultSelectedSection = { info: null };
const defaultBuilding = { lat: null, lon: null };
const noBuilding = { lat: -360, lon: -360 };
const defaultHoveredCourse = { id: -1 };
const defaultHoveredSection = { id: -1 };

// Reducers
const slice = createSlice({
  name: "interactions",
  initialState: {
    searchStr: "",
    selectedCourse: defaultSelectedCourse,
    selectedSection: defaultSelectedSection,
    currentBuilding: defaultBuilding,
    hoveredScheduledCourse: defaultHoveredCourse,
    hoveredSection: defaultHoveredSection,
  },
  reducers: {
    updatedSearch: (interactions, action) => {
      interactions.searchStr = action.payload.searchStr;
    },
    updatedSelectedCourse: (interactions, action) => {
      interactions.selectedCourse = action.payload;
    },
    clearedSelectedCourse: (interactions, action) => {
      interactions.selectedCourse = defaultSelectedCourse;
    },
    updatedSelectedSection: (interactions, action) => {
      interactions.selectedSection = action.payload;
    },
    clearedSelectedSection: (interactions, action) => {
      interactions.selectedSection = defaultSelectedSection;
    },
    updatedCurrentBuilding: (interactions, action) => {
      const { lat, lon } = action.payload.data;
      if (!lat || !lon) interactions.currentBuilding = noBuilding;
      else interactions.currentBuilding = { lat, lon };
    },
    updatedNoCurrentBuilding: (interactions, action) => {
      interactions.currentBuilding = noBuilding;
    },
    clearedCurrentBuilding: (interactions, action) => {
      interactions.currentBuilding = defaultBuilding;
    },
    updatedHoveredCourse: (interactions, action) => {
      interactions.hoveredScheduledCourse.id = action.payload.id;
    },
    clearedHoveredCourse: (interactions, action) => {
      interactions.hoveredScheduledCourse = defaultHoveredCourse;
    },
    updatedHoveredSection: (interactions, action) => {
      interactions.hoveredSection.id = action.payload.id;
    },
    clearedHoveredSection: (interactions, action) => {
      interactions.hoveredSection = defaultHoveredSection;
    },
  },
});

const {
  updatedSearch,
  updatedSelectedCourse,
  clearedSelectedCourse,
  updatedSelectedSection,
  clearedSelectedSection,
  updatedCurrentBuilding,
  updatedNoCurrentBuilding,
  clearedCurrentBuilding,
  updatedHoveredCourse,
  clearedHoveredCourse,
  updatedHoveredSection,
  clearedHoveredSection,
} = slice.actions;
export default slice.reducer;

// Action Creators
export const updateSearch = (searchStr) => {
  return updatedSearch({ searchStr });
};

export const updateSelectedCourse = (id) => {
  return updatedSelectedCourse({ id });
};

export const clearSelectedCourse = () => {
  return clearedSelectedCourse();
};

export const updateSelectedSection = (info) => {
  return updatedSelectedSection({ info });
};

export const updateRemovableSelectedSection = (info) => {
  return updatedSelectedSection({ info: { ...info, removable: true } });
};

export const clearSelectedSection = () => {
  return clearedSelectedSection();
};

export const updateCurrentBuilding = (buildingId) => (dispatch, getState) => {
  const resource = "buildings";
  return dispatch(
    apiActions.apiRequested({
      resource,
      data: buildingId,
      onSuccess: updatedCurrentBuilding.type,
    })
  );
};

export const updateNoCurrentBuilding = () => {
  return updatedNoCurrentBuilding();
};

export const clearCurrentBuilding = () => {
  return clearedCurrentBuilding();
};

export const updateHoveredCourse = (id) => {
  return updatedHoveredCourse({ id });
};

export const clearHoveredCourse = () => {
  return clearedHoveredCourse();
};

export const updateHoveredSection = (id) => {
  return updatedHoveredSection({ id });
};

export const clearHoveredSection = () => {
  return clearedHoveredSection();
};

// Selectors
export const getSearch = createSelector(
  (state) => state.entities.interactions,
  (interactions) => interactions.searchStr
);

export const getSelectedCourse = createSelector(
  (state) => state.entities.interactions,
  (interactions) => interactions.selectedCourse
);

export const getSelectedSection = createSelector(
  (state) => state.entities.interactions,
  (interactions) => interactions.selectedSection
);

export const getCurrentBuilding = createSelector(
  (state) => state.entities.interactions,
  (interactions) => interactions.currentBuilding
);

export const getHoveredCourse = createSelector(
  (state) => state.entities.interactions,
  (interactions) => interactions.hoveredScheduledCourse
);

export const getHoveredSection = createSelector(
  (state) => state.entities.interactions,
  (interactions) => interactions.hoveredSection
);
