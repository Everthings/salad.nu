import { combineReducers } from "redux";
import termReducer from "./slices/term";
import coursesReducer from "./slices/courses";
import sectionsReducer from "./slices/sections";
import discussionsReducer from "./slices/discussions";
import interactionsReducer from "./slices/interactions";
import scheduleReducer from "./slices/schedule";

export default combineReducers({
  term: termReducer,
  courses: coursesReducer,
  sections: sectionsReducer,
  discussions: discussionsReducer,
  interactions: interactionsReducer,
  schedule: scheduleReducer,
});
