import { loadCourses } from "./../actions/courseActions";
import { getCourses } from "./../reducers/courses";
import * as coursesService from "./../../fakeServices/coursesService";
import configureStore from "./../configureStore";

jest.mock("./../../fakeServices/coursesService");
coursesService.getCourses.mockResolvedValue([
  { unique_id: 1, title: "Title 1", subject: "Subject 1", number: "Number 1" },
  { unique_id: 2, title: "Title 2", subject: "Subject 2", number: "Number 2" },
  { unique_id: 3, title: "Title 3", subject: "Subject 3", number: "Number 3" },
]);

describe("coursesSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  describe("loadCourses + getCourses", () => {
    it("should load courses into store if school and subject are specified but search is empty", async () => {
      await store.dispatch(loadCourses("", "SCHOOL", "SUBJECT"));

      expect(getCourses(store.getState())).toHaveLength(3);
    });

    it("should load courses into store if search is long", async () => {
      await store.dispatch(loadCourses("long search", "", ""));

      expect(getCourses(store.getState())).toHaveLength(3);
    });

    it("should not load courses into store if search is short", async () => {
      await store.dispatch(loadCourses("s h o r t", "", ""));

      expect(getCourses(store.getState())).toHaveLength(0);
    });
  });
});
