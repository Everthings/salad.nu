import { combineReducers } from "redux";
import termReducer from "./slices/term";
import themeReducer from "./slices/theme";
import schoolsReducer from "./slices/schools";
import subjectsReducer from "./slices/subjects";
import coursesReducer from "./slices/courses";
import sectionsReducer from "./slices/sections";
import discussionsReducer from "./slices/discussions";
import searchReducer from "./slices/search";
import interactionsReducer from "./slices/interactions";
import scheduleReducer from "./slices/schedule";

export default combineReducers({
  term: termReducer,
  theme: themeReducer,
  schools: schoolsReducer,
  subjects: subjectsReducer,
  courses: coursesReducer,
  sections: sectionsReducer,
  discussions: discussionsReducer,
  search: searchReducer,
  interactions: interactionsReducer,
  schedule: scheduleReducer,
});
