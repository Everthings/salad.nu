import { combineReducers } from "redux";
import termReducer from "./reducers/term";
import themeReducer from "./reducers/theme";
import schoolsReducer from "./reducers/schools";
import subjectsReducer from "./reducers/subjects";
import coursesReducer from "./reducers/courses";
import sectionsReducer from "./reducers/sections";
import discussionsReducer from "./reducers/discussions";
import searchReducer from "./reducers/search";
import interactionsReducer from "./reducers/interactions";
import scheduleReducer from "./reducers/schedule";

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
