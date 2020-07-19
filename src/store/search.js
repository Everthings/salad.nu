import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

// Reducers
const slice = createSlice({
  name: "search",
  initialState: {
    searchStr: "",
    selectedCourse: { id: -1, name: "" },
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
      search.selectedCourse.id = -1;
      search.selectedCourse.name = "";
    },
  },
});

const {
  updatedSearch,
  updatedSelectedCourse,
  clearedSelectedCourse,
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

// Selectors
export const getSearch = createSelector(
  (state) => state.entities.search,
  (search) => search.searchStr
);

export const getSelectedCourse = createSelector(
  (state) => state.entities.search,
  (search) => search.selectedCourse
);
