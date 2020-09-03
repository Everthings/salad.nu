import * as actions from "./../api";
import { getTerm } from "./../../fakeServices/termsService";
import { getSchools } from "./../../fakeServices/schoolsService";
import { getSubject } from "./../../fakeServices/subjectsService";
import { getCourses } from "./../../fakeServices/coursesService";
import { getSection } from "./../../fakeServices/sectionsService";
import { getDiscussion } from "./../../fakeServices/discussionsService";
import { getBuilding } from "./../../fakeServices/buildingsService";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type === actions.API_REQUESTED.type) {
    const {
      resource,
      method,
      data,
      onSuccess,
      onError,
      onStart,
      ...rest
    } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      let response;
      if (resource === "term") {
        response = await getTerm(data);
      } else if (resource === "schools") {
        response = await getSchools();
      } else if (resource === "subjects") {
        response = await getSubject(data);
      } else if (resource === "courses") {
        response = await getCourses();
      } else if (resource === "sections") {
        response = await getSection(data);
      } else if (resource === "discussions") {
        response = await getDiscussion(data);
      } else if (resource === "buildings") {
        response = await getBuilding(data);
      }

      dispatch(actions.API_SUCCESS(response));

      if (onSuccess)
        dispatch({ type: onSuccess, payload: { data: response, ...rest } });
    } catch (error) {
      dispatch(actions.API_FAILED(error.message));

      if (onError) dispatch({ type: onError, payload: error.message });
    }
  } else next(action);
};

export default api;
