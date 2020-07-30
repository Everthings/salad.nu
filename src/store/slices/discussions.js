import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as apiActions from "./../api";

// Reducers
const resource = "discussions";

const slice = createSlice({
  name: "discussions",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    discussionsRequested: (discussions, action) => {
      discussions.loading = true;
    },
    discussionsRequestFailed: (discussions, action) => {
      discussions.loading = false;
    },
    discussionsRecieved: (discussions, action) => {
      discussions.list = action.payload.data;
      discussions.loading = false;
    },
  },
});

const {
  discussionsRequested,
  discussionsRequestFailed,
  discussionsRecieved,
} = slice.actions;
export default slice.reducer;

// Action Creators
export const loadDiscussions = (courseId) => (dispatch, getState) => {
  return dispatch(
    apiActions.apiRequested({
      resource,
      data: courseId,
      onStart: discussionsRequested.type,
      onError: discussionsRequestFailed.type,
      onSuccess: discussionsRecieved.type,
    })
  );
};

// Selectors
export const getDiscussions = createSelector(
  (state) => state.entities.discussions.list,
  (discussions) => discussions
);

export const getDiscussion = (id) =>
  createSelector(
    (state) => state.entities.discussions.list,
    (discussions) =>
      discussions.find((discussion) => discussion.unique_id === id)
  );
