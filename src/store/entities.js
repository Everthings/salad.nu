import { combineReducers } from "redux";
import termReducer from "./slices/term";
import coursesReducer from "./slices/courses";
import sectionsReducer from "./slices/sections";
import searchReducer from "./slices/search";
import scheduleReducer from "./slices/schedule";

export default combineReducers({
  term: termReducer,
  courses: coursesReducer,
  sections: sectionsReducer,
  search: searchReducer,
  schedule: scheduleReducer,
});
