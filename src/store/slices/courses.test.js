import { loadCourses, loadCoursesFromStore, getCourses } from "./courses";
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

  const coursesSlice = () => store.getState().courses;

  beforeEach(() => {
    store = configureStore();
  });

  describe("loadCourses", () => {
    it("should load courses into store if string matches", async () => {
      await store.dispatch(loadCourses(""));

      expect(coursesSlice().list).toHaveLength(3);
    });

    it("should load empty list into store if string doesn't match", async () => {
      await store.dispatch(
        loadCourses("this is not a valid string: qwertyuiop[]")
      );

      expect(coursesSlice().list).toHaveLength(0);
    });

    it("should load matching course into store if string does match", async () => {
      await store.dispatch(loadCourses("title"));

      expect(coursesSlice().list).toHaveLength(3);
    });
  });

  describe("loadCoursesFromStore", () => {
    it("should load empty list into store if data not already fetched from coursesService", async () => {
      await store.dispatch(loadCoursesFromStore(""));

      expect(coursesSlice().list).toHaveLength(0);
    });

    it("should load courses into store if data already fetched from coursesService", async () => {
      await store.dispatch(loadCourses(""));
      await store.dispatch(loadCoursesFromStore(""));

      expect(coursesSlice().list).toHaveLength(3);
    });

    it("should load empty list into store if string doesn't match", async () => {
      await store.dispatch(loadCourses(""));
      await store.dispatch(
        loadCoursesFromStore("this is not a valid string: qwertyuiop[]")
      );

      expect(coursesSlice().list).toHaveLength(0);
    });

    it("should load matching course into store if string does match", async () => {
      await store.dispatch(loadCourses(""));
      await store.dispatch(loadCoursesFromStore("Title 1"));

      expect(coursesSlice().list).toHaveLength(1);
    });
  });

  describe("getCourses", () => {
    it("should fetch correct courses", () => {
      const state = {
        courses: { list: [{ title: "1" }, { title: "2" }, { title: "3" }] },
      };

      const courses = getCourses(state);

      expect(courses).toEqual(state.courses.list);
    });
  });
});
