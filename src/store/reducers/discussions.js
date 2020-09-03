import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  DISCUSSIONS_REQUESTED,
  DISCUSSIONS_REQUEST_FAILED,
  DISCUSSIONS_RECIEVED,
} from "./../actions/discussionActions";

// Reducers
const slice = createSlice({
  name: "discussions",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [DISCUSSIONS_REQUESTED]: (discussions, action) => {
      discussions.loading = true;
    },
    [DISCUSSIONS_REQUEST_FAILED]: (discussions, action) => {
      discussions.loading = false;
    },
    [DISCUSSIONS_RECIEVED]: (discussions, action) => {
      discussions.list = action.payload.data;
      discussions.loading = false;
    },
  },
});
export default slice.reducer;

// Selectors
export const getDiscussions = createSelector(
  (state) => state.discussions.list,
  (discussions) => discussions
);

export const getDiscussion = (id) =>
  createSelector(
    (state) => state.discussions.list,
    (discussions) =>
      discussions.find((discussion) => discussion.unique_id === id)
  );
