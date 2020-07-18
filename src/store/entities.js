import { combineReducers } from "redux";
import coursesReducer from "./courses";
import sectionsReducer from "./sections";
import searchReducer from "./search";

export default combineReducers({
  courses: coursesReducer,
  sections: sectionsReducer,
  search: searchReducer,
});
