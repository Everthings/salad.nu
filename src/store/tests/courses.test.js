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
    it("should load courses into store if string matches", async () => {
      await store.dispatch(loadCourses("", "", "", ""));

      expect(getCourses(store.getState())).toHaveLength(3);
    });

    it("should load empty list into store if string doesn't match", async () => {
      await store.dispatch(
        loadCourses("", "this is not a valid string: qwertyuiop[]", "", "")
      );

      expect(getCourses(store.getState())).toHaveLength(0);
    });

    it("should load matching course into store if string does match", async () => {
      await store.dispatch(loadCourses("", "title", "", ""));

      expect(getCourses(store.getState())).toHaveLength(3);
    });

    it("should load matching course into store when string typed one letter at a time", async () => {
      await store.dispatch(loadCourses("", "t", "", ""));
      await store.dispatch(loadCourses("t", "ti", "", ""));
      await store.dispatch(loadCourses("ti", "tit", "", ""));
      await store.dispatch(loadCourses("tit", "titl", "", ""));
      await store.dispatch(loadCourses("titl", "title", "", ""));

      expect(getCourses(store.getState())).toHaveLength(3);
    });
  });
});
