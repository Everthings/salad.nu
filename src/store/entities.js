import { combineReducers } from "redux";
import coursesReducer from "./slices/courses";
import sectionsReducer from "./slices/sections";
import searchReducer from "./slices/search";

export default combineReducers({
  courses: coursesReducer,
  sections: sectionsReducer,
  search: searchReducer,
});
