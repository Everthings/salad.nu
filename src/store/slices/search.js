import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as apiActions from "../api";

const defaultSelectedCourse = { id: -1, name: "" };
const defaultSelectedSection = { sectionId: -1 };
const defaultBuilding = { lat: -360, lon: -360 };

// Reducers
const slice = createSlice({
  name: "search",
  initialState: {
    searchStr: "",
    selectedCourse: defaultSelectedCourse,
    selectedSection: defaultSelectedSection,
    currentBuilding: defaultBuilding,
  },
  reducers: {
    updatedSearch: (search, action) => {
      search.searchStr = action.payload.searchStr;
    },
    updatedSelectedCourse: (search, action) => {
      search.selectedCourse.id = action.payload.id;
      search.selectedCourse.name = action.payload.name;
    },
    clearedSelectedCourse: (search, action) => {
      search.selectedCourse = defaultSelectedCourse;
    },
    updatedSelectedSection: (search, action) => {
      search.selectedSection.sectionId = action.payload.sectionId;
    },
    clearedSelectedSection: (search, action) => {
      search.selectedSection = defaultSelectedSection;
    },
    updatedCurrentBuilding: (search, action) => {
      const { lat, lon } = action.payload.data;
      if (!lat || !lon) search.currentBuilding = defaultBuilding;
      else search.currentBuilding = { lat, lon };
    },
    clearedCurrentBuilding: (search, action) => {
      search.currentBuilding = defaultBuilding;
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
  clearedCurrentBuilding,
} = slice.actions;
export default slice.reducer;

// Action Creators
export const updateSearch = (searchStr) => {
  return updatedSearch({ searchStr });
};

export const updateSelectedCourse = (id, name) => {
  return updatedSelectedCourse({ id, name });
};

export const clearSelectedCourse = () => {
  return clearedSelectedCourse();
};

export const updateSelectedSection = (id) => {
  return updatedSelectedSection({ sectionId: id });
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

export const clearCurrentBuilding = () => {
  return clearedCurrentBuilding();
};

// Selectors
export const getSearch = createSelector(
  (state) => state.entities.search,
  (search) => search.searchStr
);

export const getSelectedCourse = createSelector(
  (state) => state.entities.search,
  (search) => search.selectedCourse
);

export const getSelectedSection = createSelector(
  (state) => state.entities.search,
  (search) => search.selectedSection
);

export const getCurrentBuilding = createSelector(
  (state) => state.entities.search,
  (search) => search.currentBuilding
);
