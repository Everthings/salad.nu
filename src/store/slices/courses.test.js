import { loadCourses, loadCoursesFromStore, getCourses } from "./courses";
import configureStore from "./../configureStore";

describe("coursesSlice", () => {
  let store;

  const coursesSlice = () => store.getState().courses;

  beforeEach(() => {
    store = configureStore();
  });

  describe("loadCourses", () => {
    it("should load courses into store if string matches", async () => {
      await store.dispatch(loadCourses(""));

      expect(coursesSlice().list.length).toBeGreaterThan(0);
    });

    it("should load empty list into store if string doesn't match", async () => {
      await store.dispatch(
        loadCourses("this is not a valid string: qwertyuiop[]")
      );

      expect(coursesSlice().list.length).toEqual(0);
    });
  });

  describe("loadCoursesFromStore", () => {
    it("should load empty list into store if data not already fetched from coursesService", async () => {
      await store.dispatch(loadCoursesFromStore(""));

      expect(coursesSlice().list.length).toEqual(0);
    });

    it("should load courses into store if data already fetched from coursesService", async () => {
      await store.dispatch(loadCourses(""));
      await store.dispatch(loadCoursesFromStore(""));

      expect(coursesSlice().list.length).toBeGreaterThan(0);
    });

    it("should load empty list into store if string doesn't match", async () => {
      await store.dispatch(loadCourses(""));
      await store.dispatch(
        loadCoursesFromStore("this is not a valid string: qwertyuiop[]")
      );

      expect(coursesSlice().list.length).toEqual(0);
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
